/* ダメージ計算は画面とテストで共用する純粋関数。
 * 「素の値」はゲームがイベントに渡すダメージ。武器の表示攻撃力からの推測はしない。
 * 特殊攻撃は同じ基準値から加算する。途中の計算で丸めない。
 */
(function(root){
  const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
  const num=(o,k,d=0,max=1000000)=>{const v=o[k]===undefined?d:Number(o[k]);if(!Number.isFinite(v)||v<0||v>max)throw Error(k+'の値を確認してください');return v};
  const pct=(o,k,d=0,max=100)=>num(o,k,d,max)/100;
  function attack(o={}){
    const base=num(o,'base',10),str=num(o,'str',20),flat=num(o,'flat',3),rate=pct(o,'rate',25,100000),agi=num(o,'agi'),pieces=num(o,'pieces',0,6),vanilla=num(o,'vanilla',0,24791);
    const weapon=o.weapon||'sword',cause=o.cause||'melee';
    const knowledge=!!o.knowledge&&vanilla>=20,critKnowledge=!!o.critKnowledge&&vanilla>=30;
    const add=str*.2+flat+(o.craft?1:0)+(o.enchanted?1:0)+(knowledge?1:0)+num(o,'strike');
    const chance=clamp(pct(o,'crit',20)+agi*.004+pieces*.025+(critKnowledge?.1:0),0,1);
    const criticalMultiplier=2+pct(o,'critPower',30,100000)+pieces*.025+(critKnowledge?.1:0);
    const dull=pct(o,'dull',0,90),defense=pct(o,'defense',35,80),misfire=pct(o,'misfire',0,50);
    const ranged=cause==='projectile'&&['bow','crossbow'].includes(weapon);
    const lightning=!!o.lightning&&['bow','crossbow','trident','spear'].includes(weapon);
    const combo=(o.bleeding?pct(o,'blood',0,100000):0)+(o.slow?pct(o,'frost',0,100000):0)+(o.stunned?pct(o,'stun',0,100000):0)+(o.weak?pct(o,'weakness',0,100000):0);
    const count=num(o,'afflictions',0,9),chain=o.chain&&count>=2?count*.5:0;
    const special=combo+chain+(ranged&&o.holy?.5:0)+(ranged&&o.blast?.4:0)+(lightning?1:0);
    function run(critical){const trace=[];let d=(base+add)*(1+rate);trace.push({label:'素の値＋固定加算 → 攻勢',formula:`(${base} + ${add}) × ${1+rate}`,value:d});d*=1-dull;trace.push({label:'鈍刃',formula:`× ${1-dull}`,value:d});d*=critical?criticalMultiplier:1;trace.push({label:critical?'会心発動':'会心なし',formula:`× ${critical?criticalMultiplier:1}`,value:d});const specialBase=d,heal=['sword','axe'].includes(weapon)?d*pct(o,'lifesteal',0,50):0;d*=1+special;trace.push({label:'状態異常連携・特殊攻撃',formula:`${specialBase} × (1 + ${special})`,value:d});const self=o.outburst?d:0;if(o.axe&&weapon==='axe'&&cause==='melee')d*=1.1;trace.push({label:'斧の心得（近接・斧）',formula:o.axe&&weapon==='axe'&&cause==='melee'?'× 1.1':'補正なし',value:d});if(o.lethal)d*=2;trace.push({label:'必殺の薬',formula:o.lethal?'× 2':'補正なし',value:d});const preDefense=d;d*=o.pierce?1:(1-defense)*(o.solid?.8:1);trace.push({label:'敵防御・強固',formula:o.pierce?'貫通により無視':`× ${1-defense} × ${o.solid?.8:1}`,value:d});if(o.failed){d=0;trace.unshift({label:'気まぐれ発動',formula:'攻撃前に不発。以下の攻撃処理は行われない。',value:0});return {value:0,trace:trace.slice(0,1),heal:0,self:0,secondary:{cleave:[],blast:0},preDefense:0}}return {value:d,trace,heal,self,preDefense,secondary:{cleave:o.cleave&&cause==='melee'&&['sword','axe','spear','trident'].includes(weapon)?[.5,.35,.2].map(r=>specialBase*r):[],blast:ranged&&o.blast?specialBase*.4:0}}}
    const normal=run(false),critical=run(true);
    return {normal,critical,chance,criticalMultiplier,expected:(normal.value*(1-chance)+critical.value*chance)*(1-misfire)};
  }
  function defense(o={}){
    const base=num(o,'base',10),attack=num(o,'enemyAttack',2,5),critMult=num(o,'enemyCritMultiplier',2,3);
    if(critMult<1)throw Error('敵会心倍率は1以上で指定してください');
    const chance=clamp(pct(o,'enemyCrit',20,40)-pct(o,'critResist'),0,1),reduction=pct(o,'critReduction');
    const guard=pct(o,'guard',0,80),str=num(o,'str',0,166),flat=num(o,'armorFlat'),dodge=pct(o,'dodge',0,30),block=o.shield?pct(o,'block',0,40):0;
    function run(crit){const trace=[];let d=base*attack;trace.push({label:'敵の攻撃倍率',formula:`${base} × ${attack}`,value:d});const m=crit?1+(critMult-1)*(1-reduction):1;d*=m;trace.push({label:crit?'敵会心・致命傷軽減':'敵会心なし',formula:`× ${m}`,value:d});if(o.potionDodge||o.evaded||o.parried&&o.shield)return {value:0,trace:[...trace,{label:'身かわし・受け流し・身かわしの薬',formula:'被弾無効。以降の処理なし。',value:0}],thorns:0};const cap=Math.min(flat,d*.5);d=Math.max(0,d-cap)*(1-guard)*(1-str*.006);trace.push({label:'堅牢 → 守勢 → STR軽減',formula:`固定軽減 ${cap}（50%上限） → × ${1-guard} × ${1-str*.006}`,value:d});const thorns=d*pct(o,'thorns',0,100000);if(o.knowledge&&num(o,'vanilla')>=20)d*=.9;trace.push({label:'知識の護り（バニラLv20以上）',formula:o.knowledge&&num(o,'vanilla')>=20?'× 0.9':'補正なし',value:d});if(o.fullset)d*=.9;trace.push({label:'製作の技・防具4部位',formula:o.fullset?'× 0.9':'補正なし',value:d});if(o.immortal&&d>=num(o,'hp',20)){d=0;trace.push({label:'不死の薬（有効な印・再使用待ちなし）',formula:'致死を無効化し、最大HPまで回復',value:0})}return {value:d,trace,thorns};}
    const normal=run(false),critical=run(true);return {normal,critical,chance,expected:(normal.value*(1-chance)+critical.value*chance)*(1-dodge)*(1-block)};
  }
  root.RPGCalc={attack,defense};
})(typeof window==='undefined'?globalThis:window);
