import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {pathToFileURL} from 'node:url';
// 開発資料は読み取り専用。Web用の公開データだけをdistへ書き出す。
const source=process.argv[2]||'C:/claude_code_dev/status';
const root=process.argv[3]||'C:/Users/d_yam/Documents/RPGwiki';
const read=n=>fs.readFileSync(path.join(source,n),'utf8');
const load=n=>import(pathToFileURL(path.join(source,'RPGsystem_BP/scripts',n)).href);
const [foods,stats,config,pools,prod]=await Promise.all([load('data/foods.js'),load('gear/stats.js'),load('gear/config.js'),load('gear/pools.js'),load('data/production_skills.js')]);
const clean=s=>s.replace(/\*\*/g,'').replace(/★/g,'').replace(/`[^`]*(?:\.js|\.json|register|\/rpg:|rpg:|minecraft:|source|amplifier|preset|perks|noCurse|valueBoost)[^`]*`/g,'').replace(/`([^`]+)`/g,'$1').replace(/（\s*）/g,'').replace(/\s+/g,' ').trim();
const splitRow=s=>s.trim().slice(1,-1).split(/(?<!\\)\|/).map(clean);
const skillDoc=read('RPGsystem_生産スキル一覧.md');
const skillRows=[];let discipline='';let section=0;
const discIds=['logging','mining','crafting','enchanting','farming','fishing','brewing','ranching','cooking'];
for(const line of skillDoc.split(/\r?\n/)){const h=line.match(/^## ([1-9])\. ([^（\n]+)/);if(h){section=+h[1];discipline=h[2].trim()}if(/^\| [1-5]0[ab] \|/.test(line)){const r=splitRow(line);skillRows.push({discipline,disc:discIds[section-1],level:parseInt(r[0]),side:r[0].slice(-1),name:r[1],kind:r[2],operation:r.length===6?r[3]:'常時',detail:r.at(-2),numbers:r.at(-1),source:'RPGsystem_生産スキル一覧.md §'+section});}}
// 1.16.1で更新された短い説明を採用し、詳細条件はMDの表を残す。
const runtimeDiscIds=Object.keys(prod.PRODUCTION_SKILLS);
for(const s of skillRows){let group=prod.PRODUCTION_SKILLS[s.disc];if(!group){group=Object.values(prod.PRODUCTION_SKILLS).find(g=>g.tiers.some(t=>t[s.side]?.name===s.name))}const entry=group?.tiers.find(t=>t.level===s.level)?.[s.side];if(!entry)throw Error('Skill not matched: '+s.name);s.summary=entry.description;s.id=entry.id;}
const overrides={
ore_scan:'半径30・上下30の鉱石を探し、近い順に60個まで、壁越しに見える目印を15秒表示。',
straight_throw:'スプラッシュ・残留ポーションが落下せず、まっすぐ飛ぶ。何にも当たらない場合は4秒で消える。',
};
for(const s of skillRows){if(overrides[s.id])s.detail=overrides[s.id];s.detail=s.detail.replace(/（[^）]*(?:tick|フック|hook|イベント|player\.json|動的プロパティ|amplifier|Lore|clone\(|トレース|秒おきに|控え|同じ仕組み)[^）]*）/g,'').replace(/。トレース[^。]*。?/g,'。').replace(/Lore[^。]*。?/g,'').replace(/1 秒おきに手持ちを確認/g,'').replace(/（\s*）/g,'');}
const passiveNames=['追加の原木','追加の鉱石','追加耐久','経験値の還元','豊作','大漁','二重醸造','豊かな家畜','おかわり'];
const passiveText=['原木を掘ると同じ原木を1個追加。','鉱石の代表的なドロップを1個追加。','製作した装備に追加耐久を付ける。本体の耐久より先に消費。','エンチャントで消費した経験値レベルの一部を還元。端数は確率で1レベル。','成熟した作物の収穫物を1個追加。','同じ魚か宝物を1個追加。ゴミを釣った場合は魚。','作ったポーションを1本複製。秘薬の印も同じ。','飼っている家畜の肉・革の候補から1個追加。','完成した料理をもう1皿追加。レシピ調理にも有効。'];
const xpText=['原木1個：2。プレイヤーが設置した原木は対象外。','石炭・銅：2／鉄・ラピス・レッドストーン・水晶・ネザー金：4／金・きらめく黒石：6／ダイヤ・エメラルド：12／古代の残骸：20／その他の鉱石：3。設置した鉱石は対象外。','素材段階（5・12・30・60）×レア度倍率（1・1.3・1.7・2.2・3・4・5）×連作倍率（1・0.75・0.5・0.25・0）。同じ品の5連作目以降は0。別の品を作ると戻る。作業台・鍛冶台で製作した装備の初回鑑定時に獲得。','エンチャントテーブル・金床でエンチャントが増えるか強まり、経験値レベルを消費したとき、消費レベル×10。名前変更・修理は対象外。','耕す：1（同じ場所は10分に1回）／植える：1／成熟した作物の収穫：3。','魚：5／宝物：20／ゴミ：1。','通常：8／スプラッシュ：12／残留：16。延長・強化は+4。水・ありふれた・奇妙な・濃厚は0。瓶の出し入れだけでは獲得しない。','繁殖：10／飼っている家畜の屠殺：2。自然湧きの家畜を倒しても0。繁殖は餌やりから60秒・8ブロック以内が対象。','素材数×2＋品質付き素材1個につき3＋特殊食材1個につき2。'];
const disciplines=discIds.map((id,i)=>({id,name:skillRows.find(s=>s.disc===id).discipline,passive:passiveNames[i],description:passiveText[i],max:i===2?250:25,unit:i===2?'耐久':'%',xp:xpText[i]}));
const table=read('RPGsystem_改修設計案.md');const descriptions={};
for(const line of table.split(/\r?\n/)){if(/^\| [a-z_]+ \|/.test(line)){const r=splitRow(line);if(r.length===6)descriptions[r[0]]=r[2]}}
Object.assign(descriptions,{attack_flat:'素のダメージへ固定値を加える。STR攻撃・製作スキルなどと合算した後、攻勢の倍率を掛ける。',attack_rate:'固定加算後のダメージを、1＋攻勢÷100倍にする。',max_health:'最大HPを加算。装備全体では+80まで。VITの増加分は別枠。',critical_chance:'会心の発動率。会心の基本倍率は×2.0。AGIや生産スキルは装備上限の後に加算。',critical_power:'会心倍率の×2.0に加算。+30%なら×2.30。',armor_flat:'固定ダメージ軽減。敵の攻撃倍率・会心処理後、割合軽減前のダメージの50%まで。',lifesteal:'会心処理直後のダメージに吸命率を掛けたHPを回復。剣・斧限定。特殊攻撃や敵防御より前の値。',curse_outburst:'会心・特殊攻撃後、斧の心得・必殺の薬・敵防御より前の攻撃値で自傷。半径4の最大6体へ、その50%のダメージ。',affliction_combo:'有害効果が2種類以上ある相手へ、1種類につき特殊攻撃直前のダメージの50%を追加。裂傷・独自の眩暈も別々に数える。',bleed_combo:'相手が独自の裂傷中なら、特殊攻撃直前のダメージ×能力値%を加算。',frost_combo:'相手が移動速度低下中なら、特殊攻撃直前のダメージ×能力値%を加算。',stun_combo:'相手が独自の眩暈中なら、特殊攻撃直前のダメージ×能力値%を加算。',weakness_combo:'相手が弱体化中なら、特殊攻撃直前のダメージ×能力値%を加算。'});
const gearTypes={sword:'剣',axe:'斧',mace:'メイス',trident:'トライデント',spear:'槍',bow:'弓',crossbow:'クロスボウ',helmet:'兜',chestplate:'鎧',leggings:'脚',boots:'靴',shield:'盾',totem:'トーテム',elytra:'エリトラ'};
const allPools=Object.fromEntries(Object.keys(gearTypes).map(t=>[t,pools.getGearRollPool(t)]));
const gear=stats.GEAR_STATS.map(s=>{const types=[];let entry;for(const [type,p]of Object.entries(allPools)){const item=[...p.normal,...p.curses].find(i=>i.id===s.id);if(item){types.push(type);entry=item}}return {...s,description:descriptions[s.id]||'',types,weight:entry?.weight??null,profile:s.valueType==='none'?null:entry?.profile,cap:config.STAT_CAPS[s.id]??null}});
if(gear.some(g=>!g.description))throw Error('Missing gear description');
const foodRows=read('RPGsystem_料理仕様一覧.md').split('## 7. 食材表')[1].split(/\r?\n/).filter(l=>/^\| [^|]+ \| `minecraft:|^\| [^|]+ \| `rpg:/.test(l));
if(foodRows.length!==Object.keys(foods.FOODS).length)throw Error('MD/source food counts disagree: '+foodRows.length);
const foodsOut=Object.entries(foods.FOODS).map(([id,f])=>({id,...f}));
const sources=fs.readdirSync(source).filter(n=>/^RPGsystem_.*\.md$/.test(n)).map(name=>{const t=read(name);return {name,sha256:crypto.createHash('sha256').update(t).digest('hex'),heading:t.split('\n')[0].replace(/^# /,'')}});
const data={version:'1.16.1',date:'2026-09-19',foods:foodsOut,extraPool:foods.EXTRA_POOL,effects:foods.VANILLA_EFFECTS,powers:foods.POWERS,units:foods.STAT_UNITS,inversions:foods.INVERSIONS,alloc:foods.ALLOC_NAMES,skills:skillRows,disciplines,gear,gearTypes,gearPools:allPools,profiles:config.GEAR_GENERATION.valueProfiles,rarities:config.GEAR_GENERATION.rarities.map(r=>({...r,name:config.RARITIES[r.id].name})),sources,skillValues:prod.SKILL_VALUES};
if(data.foods.length!==80||data.skills.length!==90||data.gear.length!==62)throw Error('Unexpected catalog size');
fs.writeFileSync(path.join(root,'dist/data.js'),'// 仕様1.16.1。出典MDと同版の定義データを照合して生成。\nwindow.RPG = '+JSON.stringify(data,null,2)+';\n');
fs.writeFileSync(path.join(root,'tools/source-audit.json'),JSON.stringify({version:data.version,sources,verifiedCorrections:['知識の護りはバニラLv20以上（生産スキル一覧および実装定数で確認）','特殊攻撃の加算基準は会心直後の値。同じ基準に対して加算し、各特殊倍率を乗算しない','堅牢の50%上限は敵倍率・会心処理後のダメージが基準','料理の追加抽選は20候補が重み1。火炎耐性・暗視・落下速度低下はI固定','じっくり煮込みは食材4種類以上。品質違いは同じ種類','生命力の装備合計上限+80を採用','食材抽選はその食材の候補内での確率。最終料理の付与確率ではない']},null,2));
console.log(JSON.stringify({foods:data.foods.length,skills:data.skills.length,gear:data.gear.length,disciplines:runtimeDiscIds,sourceFiles:sources.length,emptyPools:Object.entries(allPools).filter(([k,p])=>p.normal.length===0).map(([k])=>k)}));
