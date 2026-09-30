/* 調査した定義値を使う、独自補正部分の計算です。Minecraft全体の戦闘を再現するものではありません。 */
(() => {
  'use strict';
  const data = window.RPG_SIM_DATA;
  const byElement = Object.fromEntries(data.elements.map(e => [e.id,e]));
  const byPattern = Object.fromEntries(data.patterns.map(p => [p.id,p]));
  const byStaff = Object.fromEntries(data.staves.map(s => [s.id,s]));
  const clamp = (n,min,max) => Math.min(max,Math.max(min,Number.isFinite(Number(n)) ? Number(n) : min));
  const round1 = n => Math.round(n*10)/10;
  const format = n => Number(n).toLocaleString('ja-JP',{maximumFractionDigits:2});

  function calculateMagic(input,options={}) {
    const cfg = data.magic;
    const spell = {...input};
    for(const key of ['power','size','speed','duration']) spell[key] = Math.floor(clamp(input[key],cfg.ranges[key].min,cfg.ranges[key].max));
    spell.elements = [...new Set(input.elements || [])].filter(id => byElement[id]).slice(0,cfg.maxElements);
    const pattern = byPattern[spell.pattern] || byPattern.none;
    const staff = byStaff[options.staff] || data.staves[0];
    // 配分した数値を0～1へ正規化し、設定された指数で重さへ換算します。
    const part = key => {
      const range = cfg.ranges[key]; const term = cfg.cost[key];
      return term.weight * Math.pow((spell[key]-range.min)/(range.max-range.min),term.curve);
    };
    const elementSum = spell.elements.reduce((sum,id) => sum + byElement[id].weight,0);
    const elementMultiplier = spell.elements.length ? cfg.cost.elementCountMultiplier[spell.elements.length-1] : 0;
    const parts = [
      ['基本',cfg.cost.base],['属性',elementSum*elementMultiplier],
      ['威力',part('power')*pattern.powerRate],['大きさ',part('size')],
      ['持続',part('duration')],['速度',part('speed')],['打ち出し方',pattern.cost],['自己',spell.self ? cfg.cost.self : 0]
    ];
    const weight = parts.reduce((sum,p) => sum+p[1],0);
    const mp = Math.max(1,Math.round(weight*cfg.cost.mpRate));
    const basicCast = round1(Math.min(cfg.castTime.max,cfg.castTime.minSeconds+weight*cfg.castTime.perWeight));
    const cast = round1(basicCast*(1-clamp(options.castSpeed || 0,0,50)/100));
    let matchup = 1;
    if(spell.elements.includes('light') && options.undead) matchup *= 2;
    if(spell.elements.includes('fire') && options.green) matchup *= 2;
    if(spell.elements.includes('thunder') && options.wet) matchup *= 2;
    const base = (spell.power+staff.bonus)*matchup;
    const counts = {none:1,fan:cfg.pattern.fanCount,spread:cfg.pattern.spreadCount,radial:cfg.pattern.radialCount,area:0,burst:cfg.pattern.burstCount,omni:cfg.pattern.omniCount,homing:1,arc:1,ricochet:1,spiral:2,drop:1,converge:cfg.pattern.convergeCount,satellite:cfg.pattern.satelliteCount,pierce:1,crawl:1};
    const bullets = spell.self && pattern.id==='none' ? 0 : counts[pattern.id];
    const stage = spell.power <= cfg.status.firstStageMaxPower ? 1 : spell.power <= cfg.status.secondStageMaxPower ? 2 : 3;
    const healRate = Math.min(cfg.effect.healMaxPercent,spell.power*cfg.effect.healPercentPerPower);
    return {spell,pattern,staff,parts,weight,mp,basicCast,cast,base,matchup,bullets,stage,
      radius:cfg.bulletRadius[spell.size-1],areaScale:cfg.areaScale[spell.size-1],
      healRate,heal:clamp(options.targetHp || 20,1,100000)*healRate,
      burn:Math.round(cfg.effect.burnSecondsBase+cfg.effect.burnSecondsPerPower*spell.power),
      repeat:Math.floor(clamp(options.currentMp ?? 50,0,100000)/mp)};
  }

  function calculateDamage(input) {
    const magic = input.kind === 'magic';
    const base = Math.max(0,Number(input.base) || 0);
    const flat = Math.max(0,Number(input.flat) || 0);
    const attack = 1+Math.max(0,Number(input.rate) || 0)/100;
    const alloc = Math.max(0,Number(input.alloc) || 0);
    const point = magic ? data.allocation.int.magicAttackPercentPerPoint : data.allocation.str.attackPercentPerPoint;
    const allocation = 1+round1(alloc*point)/100;
    const dull = 1-clamp(input.dull || 0,0,100)/100;
    const vulnerable = 1+Math.max(0,Number(input.vulnerable) || 0)/100;
    const skill = Math.max(0,Number(input.skillScale ?? 1) || 0);
    const additive = base+flat;
    const beforeCrit = additive*attack*allocation*dull*vulnerable*skill;
    // AGIと生産技能の補正を加えてから、100%超過分の半分を会心強化へ移します。
    const production = Math.max(0,Number(input.productionCrit) || 0);
    const rawChance = Math.max(0,Number(input.critChance) || 0)+round1(Math.max(0,Number(input.agi) || 0)*data.allocation.agi.criticalPercentPerPoint)+production;
    const overflow = Math.max(0,rawChance-100)*data.critical.overflowRate;
    const chance = clamp(rawChance,0,100);
    const power = Math.max(0,Number(input.critPower) || 0)+production+overflow;
    const criticalMultiplier = (magic ? data.critical.magicBase : data.critical.physicalBase)+power/100;
    const penetration = Math.max(0,Number(input.penetration) || 0)/100+Math.max(0,Number(input.ignore) || 0)/100;
    const defense = Math.max(0,clamp(input.defense || 0,0,85)/100-penetration);
    const fortified = Math.max(0,(input.fortified && !input.sealed ? data.fortified : 0)-penetration);
    const defenseMultiplier = (1-defense)*(1-fortified);
    const normal = beforeCrit*defenseMultiplier;
    const critical = normal*criticalMultiplier;
    const expected = normal*(1-chance/100)+critical*(chance/100);
    return {normal,critical,expected,chance,rawChance,power,overflow,criticalMultiplier,
      additive,attack,allocation,dull,vulnerable,skill,beforeCrit,penetration,defense,fortified,defenseMultiplier};
  }
  // 同じ関数を検証にも使い、画面と計算式のずれを防ぎます。
  window.RPG_CALCULATORS = {calculateMagic,calculateDamage};
  if(typeof document === 'undefined') return;
  const write = (id,value) => { const el=document.getElementById(id); if(el) el.textContent=value; };
  const readNumber = (form,id) => {
    const el=form.elements.namedItem(id);
    const raw=Number(el.value); return clamp(Number.isFinite(raw) ? raw : Number(el.defaultValue),Number(el.min),Number(el.max));
  };
  function outputTable(target,rows) {
    const container=document.getElementById(target);container.replaceChildren();
    const wrap=document.createElement('div');wrap.className='table-scroll';wrap.tabIndex=0;
    const table=document.createElement('table');const body=document.createElement('tbody');
    for(const [label,value] of rows) {
      const tr=document.createElement('tr');const th=document.createElement('th');th.scope='row';th.textContent=label;
      const td=document.createElement('td');td.textContent=value;tr.append(th,td);body.append(tr);
    }
    table.append(body);wrap.append(table);container.append(wrap);
  }
  const magicForm=document.getElementById('magic-sim');
  if(magicForm) {
    function updateMagic() {
      const selected=[...magicForm.querySelectorAll('input[name="element"]:checked')].map(x=>x.value);
      magicForm.querySelectorAll('input[name="element"]').forEach(el => { el.disabled = selected.length>=3 && !el.checked; });
      write('element-count',selected.length+' / 3');
      const result=calculateMagic({elements:selected,pattern:magicForm.elements['sim-pattern'].value,
        self:magicForm.elements['sim-self'].checked,power:readNumber(magicForm,'sim-power'),size:readNumber(magicForm,'sim-size'),
        speed:readNumber(magicForm,'sim-speed'),duration:readNumber(magicForm,'sim-duration')},
        {staff:magicForm.elements['sim-staff'].value,castSpeed:readNumber(magicForm,'sim-cast-speed'),
        currentMp:readNumber(magicForm,'sim-current-mp'),targetHp:readNumber(magicForm,'sim-target-hp'),
        undead:magicForm.elements['sim-undead'].checked,green:magicForm.elements['sim-green'].checked,wet:magicForm.elements['sim-wet'].checked});
      write('magic-summary',(selected.map(id=>byElement[id].name).join('・') || '属性なし')+' · '+result.pattern.name+(result.spell.self ? '＋自己' : ''));
      write('magic-summary-sub',result.staff.name+' / 威力'+result.spell.power+' / 大きさ'+result.spell.size+' / 持続'+result.spell.duration+'秒');
      write('magic-mp',result.mp);write('magic-cast',format(result.cast));write('magic-base',format(result.base));write('magic-repeat',result.repeat);
      write('magic-pattern-note',result.bullets ? '方式の弾数：'+result.bullets+'発。命中数や合計ダメージは、狙い方・対象・無敵時間により変わります。' : 'この構成は、自己への効果またはその場の範囲効果です。');
      const rows=[['弾の当たり半径',format(result.radius)+'ブロック'],['範囲の倍率','×'+format(result.areaScale)],['設定した速度',format(result.spell.speed*data.magic.speedPerLevel)+'ブロック / tick']];
      if(selected.some(id=>id.startsWith('buff_') || id.startsWith('debuff_'))) rows.push(['強化・弱体の段階',['I','II','III'][result.stage-1]],['強化・弱体の持続',result.spell.duration+'秒']);
      if(selected.includes('heal')) rows.push(['基礎回復割合',format(result.healRate*100)+'%'],['指定最大HPでの回復量',format(result.heal)+'HP']);
      if(selected.includes('fire')) rows.push(['炎上時間',result.burn+'秒']);
      if(selected.includes('dark')) rows.push(['闇の主対象命中で戻るMP',format(result.mp*data.magic.effect.darkRestoreRate)+'（最大MPによる制限前）']);
      for(const [id,label,base] of [['wood','緑化半径',5],['water','水浸し半径',5],['explosion','爆発の効果半径',10],['gravity','重力半径',10],['thunder','雷の連鎖探索半径',10]]) if(selected.includes(id)) rows.push([label,format(base*result.areaScale)+'ブロック']);
      outputTable('magic-effects',rows);
      outputTable('magic-weight-table',[...result.parts.map(([label,v])=>[label,format(v)]),['合計の重さ',format(result.weight)],['短縮前の詠唱',format(result.basicCast)+'秒']]);
      const warnings=[];
      if(result.repeat===0) warnings.push('入力したMPでは、この魔法を1回発動するためのMPが足りません。');
      if(result.spell.speed===0 && !['area','arc','drop','converge','satellite'].includes(result.pattern.id) && !(result.spell.self && result.pattern.id==='none')) warnings.push('速度0の弾は通常その場に留まります。');
      if(result.spell.self && !selected.some(id=>byElement[id].group==='support')) warnings.push('自己指定時の攻撃・弱体は、支援属性の有無で処理が変わります。構成の安全性は実機で確認してください。');
      const warning=document.getElementById('magic-warning');warning.hidden=warnings.length===0;warning.textContent=warnings.join(' ');
      document.getElementById('magic-to-damage').href='damage-simulator.html?kind=magic&base='+encodeURIComponent(result.base);
    }
    magicForm.addEventListener('input',updateMagic);magicForm.addEventListener('change',updateMagic);
    magicForm.addEventListener('submit',event=>event.preventDefault());magicForm.addEventListener('reset',()=>requestAnimationFrame(updateMagic));updateMagic();
  }
  const damageForm=document.getElementById('damage-sim');
  if(damageForm) {
    const query=new URLSearchParams(location.search);
    if(query.get('kind')==='magic') damageForm.querySelector('input[value="magic"]').checked=true;
    if(query.has('base')) { const base=Number(query.get('base')); if(Number.isFinite(base)) damageForm.elements['dmg-base'].value=clamp(base,0,1000000); }
    function updateDamage() {
      const values={kind:damageForm.querySelector('input[name="damage-kind"]:checked').value,
        fortified:damageForm.elements['dmg-fortified'].checked,sealed:damageForm.elements['dmg-sealed'].checked};
      const mapping={base:'dmg-base',flat:'dmg-flat',rate:'dmg-rate',alloc:'dmg-alloc',skillScale:'dmg-skill-scale',dull:'dmg-dull',critChance:'dmg-crit-chance',critPower:'dmg-crit-power',agi:'dmg-agi',productionCrit:'dmg-production-crit',defense:'dmg-defense',penetration:'dmg-penetration',ignore:'dmg-ignore',vulnerable:'dmg-vulnerable'};
      for(const [key,id] of Object.entries(mapping)) values[key]=readNumber(damageForm,id);
      const result=calculateDamage(values);const magic=values.kind==='magic';
      const labels={'dmg-flat':magic?'固定加算（魔撃）':'固定加算（剛力）','dmg-rate':magic?'割合強化（魔勢・%）':'割合強化（攻勢・%）','dmg-alloc':magic?'INTの有効点数':'STRの有効点数','dmg-dull':magic?'鈍杖の低下（%）':'鈍刃の低下（%）','dmg-crit-chance':magic?'魔会心率（%）':'会心率（%）','dmg-crit-power':magic?'魔会心強化（%）':'会心強化（%）','dmg-penetration':magic?'魔貫（%）':'貫通（%）'};
      for(const [id,label] of Object.entries(labels)) damageForm.elements[id].closest('label').querySelector('span').textContent=label;
      write('damage-normal',format(result.normal));write('damage-critical',format(result.critical));write('damage-expected',format(result.expected));write('damage-chance',format(result.chance));write('damage-multiplier','×'+format(result.criticalMultiplier));
      outputTable('damage-breakdown',[
        ['基礎＋固定加算',format(result.additive)],['攻勢 / 魔勢','×'+format(result.attack)],
        [magic?'INT':'STR','×'+format(result.allocation)],['鈍刃 / 鈍杖','×'+format(result.dull)],
        ['敵の被ダメージ増加','×'+format(result.vulnerable)],['直接戦技の係数','×'+format(result.skill)],
        ['会心前・敵防御前',format(result.beforeCrit)],['貫通＋防御無視',format(result.penetration*100)+'%'],
        ['残る敵防御',format(result.defense*100)+'%'],['残る強固',format(result.fortified*100)+'%'],
        ['敵の軽減を掛けた倍率','×'+format(result.defenseMultiplier)]
      ]);
      write('damage-crit-note','補正前の合計会心率 '+format(result.rawChance)+'%。100%超過から会心強化へ移す量は '+format(result.overflow)+'ポイントです。');
    }
    damageForm.addEventListener('input',updateDamage);damageForm.addEventListener('change',updateDamage);
    damageForm.addEventListener('submit',event=>event.preventDefault());damageForm.addEventListener('reset',()=>requestAnimationFrame(updateDamage));updateDamage();
  }
})();
