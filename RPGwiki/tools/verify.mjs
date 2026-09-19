import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const root='C:/Users/d_yam/Documents/RPGwiki';
const context=vm.createContext({});vm.runInContext(fs.readFileSync(root+'/dist/calc.js','utf8'),context);
const C=context.RPGCalc;let count=0;
const eq=(actual,expected,name)=>{assert.ok(Math.abs(actual-expected)<1e-8,name+': '+actual+' ≠ '+expected);count++};
// 実装をなぞるだけでなく、処理順が変わると失敗する複合ケースを確認。
eq(C.attack({weapon:'axe',axe:true,lethal:true}).critical.value,69.89125,'STR/剛力/攻勢/会心/斧/必殺/防御');
eq(C.attack({weapon:'bow',cause:'projectile',holy:true,blast:true,base:10,str:0,flat:0,rate:0,defense:0,critPower:0}).normal.value,19,'聖矢と爆裂矢は同一基準の加算');
eq(C.attack({weapon:'sword',cause:'melee',holy:true,blast:true,lightning:true,base:10,str:0,flat:0,rate:0,defense:0}).normal.value,10,'武器・原因の対象外を除外');
eq(C.attack({pierce:true,solid:true,defense:80}).normal.value,21.25,'貫通で敵防御と強固を無視');
eq(C.attack({failed:true,outburst:true,lifesteal:50}).critical.heal,0,'不発は吸命処理もしない');
eq(C.attack({failed:true,outburst:true}).critical.self,0,'不発は癇癪も発動しない');
eq(C.attack({base:0,str:0,flat:0,rate:0,defense:0,knowledge:true,vanilla:19}).normal.value,0,'知識の護りLv19では不成立');
eq(C.attack({base:0,str:0,flat:0,rate:0,defense:0,knowledge:true,vanilla:20}).normal.value,1,'知識の護りLv20で成立');
eq(C.defense({base:100,enemyAttack:1,guard:80,str:50}).normal.value,14,'守勢80%とSTR30%は乗算');
eq(C.defense({base:10,enemyAttack:2,enemyCritMultiplier:2,armorFlat:99}).critical.value,20,'堅牢上限は敵倍率・会心の後');
eq(C.defense({base:10,enemyAttack:2,enemyCritMultiplier:3,critReduction:50}).critical.value,40,'致命傷軽減は会心追加分のみ');
eq(C.defense({base:10,enemyAttack:1,enemyCrit:0,dodge:30,block:40,shield:true}).expected,4.2,'身かわしと受け流しは独立した順次判定');
eq(C.defense({base:10,enemyAttack:1,enemyCrit:0,block:40,shield:false}).expected,10,'盾なしで受け流し無効');
eq(C.defense({evaded:true,thorns:50}).critical.thorns,0,'回避時に反撃なし');
eq(C.defense({base:10,enemyAttack:1,immortal:true,hp:10}).normal.value,0,'不死の薬の致死境界');
eq(C.defense({base:10,enemyAttack:1,immortal:true,hp:11}).normal.value,10,'非致死では不死の薬を消費しない');
assert.throws(()=>C.attack({base:NaN}));assert.throws(()=>C.defense({guard:81}));count+=2;
const dctx=vm.createContext({window:{}});vm.runInContext(fs.readFileSync(root+'/dist/data.js','utf8'),dctx);const d=dctx.window.RPG;
assert.equal(d.foods.length,80);assert.equal(d.skills.length,90);assert.equal(d.gear.length,62);assert.equal(d.sources.length,17);assert.equal(d.extraPool.length,20);assert.ok(d.extraPool.every(p=>p[6]===1));
for(const disc of d.disciplines){const ss=d.skills.filter(s=>s.disc===disc.id);assert.equal(ss.length,10);for(const l of [10,20,30,40,50])assert.equal(ss.filter(s=>s.level===l).length,2)}
for(const food of d.foods)for(const p of food.pool){assert.ok(p[6]>0);assert.ok(p[2]<=p[3]);assert.ok(p[4]<=p[5])}
for(const g of d.gear){assert.ok(g.description);if(g.profile)assert.equal(d.profiles[g.profile].length,7)}
const html=fs.readFileSync(root+'/dist/index.html','utf8');for(const m of html.matchAll(/(?:src|href)="([^"]+)"/g)){if(!m[1].startsWith('#')&&!m[1].includes(':'))assert.ok(fs.existsSync(root+'/dist/'+m[1]),'Missing asset '+m[1])}
console.log(JSON.stringify({calculationChecks:count,catalogs:{foods:80,skills:90,gear:62,sources:17},assets:'passed'}));
