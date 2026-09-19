// 仕様1.16.1。出典MDと同版の定義データを照合して生成。
window.RPG = {
  "version": "1.16.1",
  "date": "2026-09-19",
  "foods": [
    {
      "id": "minecraft:apple",
      "name": "リンゴ",
      "category": "crop",
      "nutrition": 4,
      "pool": [
        [
          "v",
          "regeneration",
          1,
          2,
          20,
          40,
          3
        ],
        [
          "v",
          "saturation",
          1,
          1,
          10,
          20,
          2
        ],
        [
          "s",
          "max_health",
          1,
          2,
          120,
          240,
          1
        ]
      ]
    },
    {
      "id": "minecraft:carrot",
      "name": "ニンジン",
      "category": "crop",
      "nutrition": 3,
      "pool": [
        [
          "v",
          "night_vision",
          1,
          1,
          60,
          180,
          3
        ],
        [
          "s",
          "critical_chance",
          1,
          1,
          90,
          180,
          1
        ]
      ]
    },
    {
      "id": "minecraft:potato",
      "name": "ジャガイモ",
      "category": "crop",
      "nutrition": 1,
      "pool": [
        [
          "v",
          "saturation",
          1,
          1,
          10,
          30,
          2
        ],
        [
          "v",
          "resistance",
          1,
          1,
          30,
          60,
          1
        ],
        [
          "s",
          "armor_rate",
          1,
          1,
          90,
          180,
          1
        ]
      ]
    },
    {
      "id": "minecraft:beetroot",
      "name": "ビートルート",
      "category": "crop",
      "nutrition": 1,
      "pool": [
        [
          "v",
          "regeneration",
          1,
          1,
          20,
          40,
          2
        ],
        [
          "s",
          "max_health",
          1,
          1,
          90,
          180,
          2
        ]
      ]
    },
    {
      "id": "minecraft:melon_slice",
      "name": "切ったスイカ",
      "category": "crop",
      "nutrition": 2,
      "pool": [
        [
          "v",
          "speed",
          1,
          1,
          30,
          60,
          2
        ],
        [
          "v",
          "saturation",
          1,
          1,
          10,
          20,
          1
        ],
        [
          "s",
          "movement_speed",
          1,
          1,
          60,
          120,
          1
        ]
      ]
    },
    {
      "id": "minecraft:sweet_berries",
      "name": "スイートベリー",
      "category": "crop",
      "nutrition": 2,
      "pool": [
        [
          "v",
          "speed",
          1,
          2,
          30,
          60,
          2
        ],
        [
          "v",
          "poison",
          1,
          1,
          10,
          20,
          1
        ]
      ]
    },
    {
      "id": "minecraft:glow_berries",
      "name": "グロウベリー",
      "category": "crop",
      "nutrition": 2,
      "pool": [
        [
          "v",
          "night_vision",
          1,
          2,
          60,
          180,
          3
        ],
        [
          "v",
          "jump_boost",
          1,
          1,
          30,
          60,
          1
        ]
      ]
    },
    {
      "id": "minecraft:dried_kelp",
      "name": "乾燥した昆布",
      "category": "other",
      "nutrition": 1,
      "special": "prolong",
      "pool": [
        [
          "v",
          "water_breathing",
          1,
          1,
          60,
          180,
          3
        ]
      ]
    },
    {
      "id": "minecraft:chorus_fruit",
      "name": "コーラスフルーツ",
      "category": "crop",
      "nutrition": 4,
      "special": "extra",
      "pool": [
        [
          "v",
          "slow_falling",
          1,
          1,
          30,
          60,
          2
        ],
        [
          "v",
          "invisibility",
          1,
          1,
          20,
          40,
          1
        ]
      ]
    },
    {
      "id": "minecraft:baked_potato",
      "name": "ベイクドポテト",
      "category": "crop",
      "nutrition": 5,
      "pool": [
        [
          "v",
          "saturation",
          1,
          2,
          20,
          40,
          2
        ],
        [
          "v",
          "resistance",
          1,
          1,
          30,
          90,
          2
        ],
        [
          "s",
          "armor_rate",
          1,
          2,
          120,
          240,
          1
        ]
      ]
    },
    {
      "id": "minecraft:poisonous_potato",
      "name": "青くなったジャガイモ",
      "category": "crop",
      "nutrition": 2,
      "special": "reduce",
      "pool": [
        [
          "v",
          "strength",
          1,
          2,
          30,
          60,
          2
        ],
        [
          "v",
          "poison",
          1,
          1,
          10,
          20,
          2
        ]
      ]
    },
    {
      "id": "minecraft:golden_carrot",
      "name": "金のニンジン",
      "category": "crop",
      "nutrition": 6,
      "special": "invert",
      "pool": [
        [
          "v",
          "night_vision",
          2,
          2,
          120,
          300,
          2
        ],
        [
          "s",
          "critical_chance",
          2,
          2,
          120,
          240,
          1
        ],
        [
          "a",
          "int",
          3,
          6,
          180,
          300,
          1
        ]
      ]
    },
    {
      "id": "minecraft:golden_apple",
      "name": "金のリンゴ",
      "category": "crop",
      "nutrition": 4,
      "special": "amplify",
      "pool": [
        [
          "v",
          "absorption",
          2,
          2,
          60,
          120,
          2
        ],
        [
          "v",
          "regeneration",
          2,
          2,
          20,
          40,
          2
        ],
        [
          "p",
          "calm_regen",
          1,
          1,
          180,
          300,
          1
        ]
      ]
    },
    {
      "id": "minecraft:enchanted_golden_apple",
      "name": "エンチャントされた金のリンゴ",
      "category": "crop",
      "nutrition": 4,
      "special": "amplify2",
      "pool": [
        [
          "v",
          "absorption",
          3,
          4,
          120,
          240,
          2
        ],
        [
          "p",
          "shockwave",
          1,
          2,
          180,
          300,
          1
        ],
        [
          "p",
          "gravity",
          1,
          1,
          180,
          300,
          1
        ],
        [
          "s",
          "max_health",
          3,
          4,
          240,
          480,
          1
        ]
      ]
    },
    {
      "id": "minecraft:beef",
      "name": "生の牛肉",
      "category": "meat",
      "nutrition": 3,
      "pool": [
        [
          "v",
          "strength",
          1,
          1,
          30,
          60,
          2
        ],
        [
          "s",
          "attack_flat",
          1,
          1,
          60,
          120,
          2
        ],
        [
          "v",
          "hunger",
          1,
          1,
          10,
          20,
          1
        ]
      ]
    },
    {
      "id": "minecraft:porkchop",
      "name": "生の豚肉",
      "category": "meat",
      "nutrition": 3,
      "pool": [
        [
          "s",
          "max_health",
          1,
          1,
          60,
          120,
          2
        ],
        [
          "v",
          "saturation",
          1,
          1,
          10,
          20,
          1
        ],
        [
          "v",
          "hunger",
          1,
          1,
          10,
          20,
          1
        ]
      ]
    },
    {
      "id": "minecraft:mutton",
      "name": "生の羊肉",
      "category": "meat",
      "nutrition": 2,
      "pool": [
        [
          "v",
          "resistance",
          1,
          1,
          30,
          60,
          2
        ],
        [
          "s",
          "armor_rate",
          1,
          1,
          60,
          120,
          1
        ],
        [
          "v",
          "hunger",
          1,
          1,
          10,
          20,
          1
        ]
      ]
    },
    {
      "id": "minecraft:chicken",
      "name": "生の鶏肉",
      "category": "meat",
      "nutrition": 2,
      "pool": [
        [
          "p",
          "haste_burst",
          1,
          1,
          60,
          120,
          2
        ],
        [
          "s",
          "dodge_chance",
          1,
          1,
          60,
          120,
          1
        ],
        [
          "v",
          "hunger",
          1,
          1,
          10,
          20,
          2
        ]
      ]
    },
    {
      "id": "minecraft:rabbit",
      "name": "生の兎肉",
      "category": "meat",
      "nutrition": 3,
      "pool": [
        [
          "v",
          "jump_boost",
          1,
          1,
          30,
          60,
          2
        ],
        [
          "v",
          "speed",
          1,
          1,
          30,
          60,
          1
        ],
        [
          "v",
          "hunger",
          1,
          1,
          10,
          20,
          1
        ]
      ]
    },
    {
      "id": "minecraft:cooked_beef",
      "name": "ステーキ",
      "category": "meat",
      "nutrition": 8,
      "pool": [
        [
          "v",
          "strength",
          1,
          2,
          60,
          120,
          3
        ],
        [
          "s",
          "attack_flat",
          1,
          2,
          120,
          240,
          2
        ],
        [
          "s",
          "bleed_chance",
          1,
          1,
          120,
          240,
          1
        ],
        [
          "a",
          "str",
          3,
          5,
          180,
          300,
          1
        ]
      ]
    },
    {
      "id": "minecraft:cooked_porkchop",
      "name": "焼き豚",
      "category": "meat",
      "nutrition": 8,
      "pool": [
        [
          "s",
          "max_health",
          1,
          2,
          120,
          240,
          3
        ],
        [
          "v",
          "absorption",
          1,
          1,
          60,
          120,
          1
        ],
        [
          "a",
          "vit",
          3,
          5,
          180,
          300,
          1
        ]
      ]
    },
    {
      "id": "minecraft:cooked_mutton",
      "name": "焼き羊肉",
      "category": "meat",
      "nutrition": 6,
      "pool": [
        [
          "v",
          "resistance",
          1,
          2,
          60,
          120,
          3
        ],
        [
          "s",
          "armor_rate",
          1,
          2,
          120,
          240,
          2
        ],
        [
          "s",
          "armor_flat",
          1,
          1,
          120,
          240,
          1
        ]
      ]
    },
    {
      "id": "minecraft:cooked_chicken",
      "name": "焼き鳥",
      "category": "meat",
      "nutrition": 6,
      "pool": [
        [
          "v",
          "speed",
          1,
          2,
          60,
          120,
          2
        ],
        [
          "s",
          "dodge_chance",
          1,
          2,
          120,
          240,
          2
        ],
        [
          "a",
          "agi",
          3,
          5,
          180,
          300,
          1
        ]
      ]
    },
    {
      "id": "minecraft:cooked_rabbit",
      "name": "焼き兎肉",
      "category": "meat",
      "nutrition": 5,
      "pool": [
        [
          "v",
          "jump_boost",
          1,
          2,
          60,
          120,
          2
        ],
        [
          "s",
          "critical_chance",
          1,
          2,
          120,
          240,
          1
        ],
        [
          "s",
          "stun_chance",
          1,
          1,
          120,
          240,
          1
        ]
      ]
    },
    {
      "id": "minecraft:cod",
      "name": "生鱈",
      "category": "fish",
      "nutrition": 2,
      "pool": [
        [
          "v",
          "water_breathing",
          1,
          1,
          60,
          120,
          3
        ],
        [
          "s",
          "dodge_chance",
          1,
          1,
          60,
          120,
          1
        ]
      ]
    },
    {
      "id": "minecraft:salmon",
      "name": "生鮭",
      "category": "fish",
      "nutrition": 2,
      "pool": [
        [
          "v",
          "water_breathing",
          1,
          1,
          60,
          120,
          2
        ],
        [
          "v",
          "regeneration",
          1,
          1,
          10,
          20,
          1
        ],
        [
          "s",
          "max_health",
          1,
          1,
          60,
          120,
          1
        ]
      ]
    },
    {
      "id": "minecraft:tropical_fish",
      "name": "熱帯魚",
      "category": "fish",
      "nutrition": 1,
      "pool": [
        [
          "s",
          "critical_power",
          1,
          1,
          60,
          120,
          2
        ],
        [
          "s",
          "frost_chance",
          1,
          1,
          60,
          120,
          1
        ],
        [
          "v",
          "nausea",
          1,
          1,
          5,
          10,
          1
        ]
      ]
    },
    {
      "id": "minecraft:pufferfish",
      "name": "フグ",
      "category": "fish",
      "nutrition": 1,
      "special": "reduce",
      "pool": [
        [
          "v",
          "water_breathing",
          2,
          2,
          120,
          300,
          2
        ],
        [
          "v",
          "poison",
          2,
          2,
          10,
          20,
          2
        ],
        [
          "v",
          "nausea",
          1,
          1,
          10,
          20,
          1
        ]
      ]
    },
    {
      "id": "minecraft:cooked_cod",
      "name": "焼き鱈",
      "category": "fish",
      "nutrition": 5,
      "pool": [
        [
          "v",
          "water_breathing",
          1,
          2,
          120,
          240,
          2
        ],
        [
          "s",
          "dodge_chance",
          1,
          2,
          120,
          240,
          2
        ]
      ]
    },
    {
      "id": "minecraft:cooked_salmon",
      "name": "焼き鮭",
      "category": "fish",
      "nutrition": 6,
      "pool": [
        [
          "v",
          "regeneration",
          1,
          1,
          20,
          40,
          2
        ],
        [
          "s",
          "max_health",
          1,
          2,
          120,
          240,
          2
        ],
        [
          "a",
          "spi",
          3,
          5,
          180,
          300,
          1
        ]
      ]
    },
    {
      "id": "minecraft:bread",
      "name": "パン",
      "category": "crop",
      "nutrition": 5,
      "pool": [
        [
          "v",
          "saturation",
          1,
          2,
          20,
          60,
          3
        ],
        [
          "a",
          "vit",
          2,
          4,
          120,
          240,
          1
        ]
      ]
    },
    {
      "id": "minecraft:cookie",
      "name": "クッキー",
      "category": "crop",
      "nutrition": 2,
      "special": "extra",
      "pool": [
        [
          "v",
          "speed",
          1,
          1,
          30,
          60,
          1
        ],
        [
          "v",
          "jump_boost",
          1,
          1,
          30,
          60,
          1
        ]
      ]
    },
    {
      "id": "minecraft:pumpkin_pie",
      "name": "パンプキンパイ",
      "category": "crop",
      "nutrition": 8,
      "pool": [
        [
          "v",
          "saturation",
          2,
          2,
          30,
          60,
          2
        ],
        [
          "v",
          "regeneration",
          1,
          1,
          20,
          40,
          1
        ],
        [
          "x",
          "xp",
          1,
          1,
          120,
          240,
          1
        ]
      ]
    },
    {
      "id": "minecraft:mushroom_stew",
      "name": "キノコシチュー",
      "category": "other",
      "nutrition": 6,
      "container": "minecraft:bowl",
      "pool": [
        [
          "v",
          "regeneration",
          1,
          2,
          20,
          60,
          2
        ],
        [
          "v",
          "resistance",
          1,
          1,
          60,
          120,
          1
        ],
        [
          "v",
          "nausea",
          1,
          1,
          5,
          10,
          1
        ]
      ]
    },
    {
      "id": "minecraft:beetroot_soup",
      "name": "ビートルートスープ",
      "category": "crop",
      "nutrition": 6,
      "container": "minecraft:bowl",
      "pool": [
        [
          "v",
          "regeneration",
          1,
          1,
          30,
          60,
          2
        ],
        [
          "s",
          "max_health",
          1,
          2,
          120,
          240,
          2
        ]
      ]
    },
    {
      "id": "minecraft:rabbit_stew",
      "name": "ウサギシチュー",
      "category": "meat",
      "nutrition": 10,
      "container": "minecraft:bowl",
      "pool": [
        [
          "v",
          "jump_boost",
          2,
          2,
          60,
          120,
          2
        ],
        [
          "v",
          "speed",
          1,
          1,
          60,
          120,
          1
        ],
        [
          "s",
          "dodge_chance",
          2,
          2,
          120,
          240,
          1
        ],
        [
          "v",
          "saturation",
          2,
          2,
          20,
          40,
          1
        ]
      ]
    },
    {
      "id": "minecraft:suspicious_stew",
      "name": "怪しげなシチュー",
      "category": "other",
      "nutrition": 6,
      "container": "minecraft:bowl",
      "special": "extra",
      "pool": []
    },
    {
      "id": "minecraft:rotten_flesh",
      "name": "腐った肉",
      "category": "meat",
      "nutrition": 4,
      "special": "reduce",
      "pool": [
        [
          "s",
          "attack_flat",
          1,
          2,
          60,
          120,
          2
        ],
        [
          "s",
          "lifesteal",
          1,
          1,
          60,
          120,
          1
        ],
        [
          "v",
          "hunger",
          2,
          2,
          20,
          40,
          2
        ]
      ]
    },
    {
      "id": "minecraft:spider_eye",
      "name": "クモの目",
      "category": "other",
      "nutrition": 2,
      "special": "reduce",
      "pool": [
        [
          "s",
          "weakness_chance",
          1,
          2,
          60,
          120,
          2
        ],
        [
          "v",
          "poison",
          1,
          1,
          10,
          20,
          2
        ]
      ]
    },
    {
      "id": "minecraft:honey_bottle",
      "name": "ハチミツ入りの瓶",
      "category": "other",
      "nutrition": 6,
      "container": "minecraft:glass_bottle",
      "special": "invert",
      "pool": [
        [
          "v",
          "regeneration",
          1,
          1,
          20,
          40,
          2
        ],
        [
          "v",
          "saturation",
          1,
          1,
          20,
          40,
          1
        ]
      ]
    },
    {
      "id": "minecraft:milk_bucket",
      "name": "ミルク バケツ",
      "category": "other",
      "nutrition": 0,
      "container": "minecraft:bucket",
      "special": "invert",
      "pool": [
        [
          "v",
          "saturation",
          1,
          1,
          10,
          20,
          1
        ]
      ]
    },
    {
      "id": "minecraft:potion|water",
      "name": "水入り瓶",
      "category": "other",
      "nutrition": 0,
      "container": "minecraft:glass_bottle",
      "pool": [
        [
          "v",
          "saturation",
          1,
          1,
          5,
          10,
          2
        ],
        [
          "v",
          "fire_resistance",
          1,
          1,
          20,
          40,
          1
        ]
      ]
    },
    {
      "id": "minecraft:bone",
      "name": "骨",
      "category": "other",
      "nutrition": 1,
      "special": "prolong",
      "pool": [
        [
          "v",
          "regeneration",
          1,
          1,
          20,
          40,
          2
        ],
        [
          "s",
          "max_health",
          1,
          1,
          90,
          180,
          1
        ]
      ]
    },
    {
      "id": "rpg:golden_egg",
      "name": "金の卵",
      "category": "other",
      "nutrition": 4,
      "special": "amplify",
      "pool": [
        [
          "x",
          "xp",
          1,
          2,
          300,
          600,
          3
        ]
      ]
    },
    {
      "id": "minecraft:wheat",
      "name": "小麦",
      "category": "crop",
      "nutrition": 2,
      "pool": [
        [
          "v",
          "saturation",
          1,
          1,
          10,
          20,
          2
        ],
        [
          "s",
          "max_health",
          1,
          1,
          60,
          120,
          1
        ]
      ]
    },
    {
      "id": "minecraft:cocoa_beans",
      "name": "カカオ豆",
      "category": "crop",
      "nutrition": 1,
      "pool": [
        [
          "v",
          "speed",
          1,
          1,
          30,
          60,
          2
        ],
        [
          "v",
          "haste",
          1,
          1,
          30,
          60,
          1
        ],
        [
          "x",
          "xp",
          1,
          1,
          60,
          120,
          1
        ]
      ]
    },
    {
      "id": "minecraft:sugar",
      "name": "砂糖",
      "category": "other",
      "nutrition": 1,
      "special": "prolong",
      "pool": [
        [
          "v",
          "speed",
          1,
          2,
          20,
          40,
          2
        ],
        [
          "v",
          "jump_boost",
          1,
          1,
          20,
          40,
          1
        ]
      ]
    },
    {
      "id": "minecraft:egg",
      "name": "卵",
      "category": "other",
      "nutrition": 2,
      "pool": [
        [
          "s",
          "max_health",
          1,
          1,
          60,
          120,
          2
        ],
        [
          "v",
          "regeneration",
          1,
          1,
          10,
          20,
          1
        ]
      ]
    },
    {
      "id": "minecraft:pumpkin",
      "name": "カボチャ",
      "category": "crop",
      "nutrition": 3,
      "pool": [
        [
          "v",
          "saturation",
          1,
          1,
          20,
          40,
          2
        ],
        [
          "v",
          "resistance",
          1,
          1,
          30,
          60,
          1
        ]
      ]
    },
    {
      "id": "minecraft:brown_mushroom",
      "name": "茶色のキノコ",
      "category": "crop",
      "nutrition": 1,
      "pool": [
        [
          "v",
          "regeneration",
          1,
          1,
          10,
          30,
          2
        ],
        [
          "v",
          "nausea",
          1,
          1,
          5,
          10,
          1
        ]
      ]
    },
    {
      "id": "minecraft:red_mushroom",
      "name": "赤色のキノコ",
      "category": "crop",
      "nutrition": 1,
      "pool": [
        [
          "v",
          "strength",
          1,
          1,
          20,
          40,
          1
        ],
        [
          "v",
          "poison",
          1,
          1,
          5,
          10,
          2
        ],
        [
          "v",
          "nausea",
          1,
          1,
          5,
          10,
          1
        ]
      ]
    },
    {
      "id": "minecraft:kelp",
      "name": "コンブ",
      "category": "crop",
      "nutrition": 1,
      "pool": [
        [
          "v",
          "water_breathing",
          1,
          1,
          30,
          90,
          3
        ]
      ]
    },
    {
      "id": "minecraft:honeycomb",
      "name": "ハニカム",
      "category": "other",
      "nutrition": 2,
      "special": "prolong",
      "pool": [
        [
          "v",
          "regeneration",
          1,
          1,
          10,
          30,
          1
        ],
        [
          "s",
          "armor_rate",
          1,
          1,
          60,
          120,
          1
        ]
      ]
    },
    {
      "id": "minecraft:nether_wart",
      "name": "ネザーウォート",
      "category": "crop",
      "nutrition": 1,
      "pool": [
        [
          "v",
          "fire_resistance",
          1,
          1,
          60,
          120,
          2
        ],
        [
          "v",
          "wither",
          1,
          1,
          5,
          10,
          1
        ]
      ]
    },
    {
      "id": "minecraft:sugar_cane",
      "name": "サトウキビ",
      "category": "crop",
      "nutrition": 1,
      "pool": [
        [
          "v",
          "speed",
          1,
          1,
          20,
          40,
          2
        ],
        [
          "v",
          "saturation",
          1,
          1,
          5,
          10,
          1
        ]
      ]
    },
    {
      "id": "minecraft:pitcher_plant",
      "name": "ウツボカズラ",
      "category": "crop",
      "nutrition": 0,
      "pool": [
        [
          "v",
          "night_vision",
          1,
          1,
          30,
          60,
          1
        ],
        [
          "v",
          "regeneration",
          1,
          1,
          10,
          20,
          1
        ]
      ]
    },
    {
      "id": "minecraft:wheat_seeds",
      "name": "小麦の種",
      "category": "crop",
      "nutrition": 0,
      "pool": [
        [
          "v",
          "saturation",
          1,
          1,
          5,
          10,
          2
        ],
        [
          "a",
          "vit",
          2,
          2,
          60,
          120,
          1
        ]
      ]
    },
    {
      "id": "minecraft:beetroot_seeds",
      "name": "ビートルートの種",
      "category": "crop",
      "nutrition": 0,
      "pool": [
        [
          "v",
          "regeneration",
          1,
          1,
          5,
          10,
          2
        ],
        [
          "a",
          "vit",
          2,
          2,
          60,
          120,
          1
        ]
      ]
    },
    {
      "id": "minecraft:melon_seeds",
      "name": "スイカの種",
      "category": "crop",
      "nutrition": 0,
      "pool": [
        [
          "v",
          "speed",
          1,
          1,
          10,
          20,
          2
        ],
        [
          "a",
          "agi",
          2,
          2,
          60,
          120,
          1
        ]
      ]
    },
    {
      "id": "minecraft:pumpkin_seeds",
      "name": "カボチャの種",
      "category": "crop",
      "nutrition": 0,
      "pool": [
        [
          "v",
          "resistance",
          1,
          1,
          10,
          20,
          2
        ],
        [
          "a",
          "str",
          2,
          2,
          60,
          120,
          1
        ]
      ]
    },
    {
      "id": "minecraft:torchflower_seeds",
      "name": "トーチフラワーの種",
      "category": "crop",
      "nutrition": 0,
      "pool": [
        [
          "v",
          "night_vision",
          1,
          1,
          30,
          60,
          1
        ],
        [
          "a",
          "int",
          2,
          2,
          60,
          120,
          1
        ]
      ]
    },
    {
      "id": "minecraft:pitcher_pod",
      "name": "ウツボカズラのさや",
      "category": "crop",
      "nutrition": 0,
      "pool": [
        [
          "v",
          "jump_boost",
          1,
          1,
          10,
          20,
          1
        ],
        [
          "a",
          "spi",
          2,
          2,
          60,
          120,
          1
        ]
      ]
    },
    {
      "id": "minecraft:popped_chorus_fruit",
      "name": "焼いたコーラスフルーツ",
      "category": "crop",
      "nutrition": 2,
      "special": "extra",
      "pool": [
        [
          "v",
          "slow_falling",
          1,
          2,
          30,
          60,
          2
        ],
        [
          "v",
          "night_vision",
          1,
          1,
          30,
          60,
          1
        ],
        [
          "a",
          "int",
          2,
          4,
          120,
          240,
          1
        ]
      ]
    },
    {
      "id": "minecraft:sniffer_egg",
      "name": "スニッファーの卵",
      "category": "other",
      "nutrition": 4,
      "special": "amplify",
      "pool": [
        [
          "s",
          "max_health",
          2,
          3,
          120,
          240,
          2
        ],
        [
          "v",
          "regeneration",
          1,
          2,
          20,
          40,
          1
        ],
        [
          "a",
          "vit",
          3,
          5,
          180,
          300,
          1
        ]
      ]
    },
    {
      "id": "minecraft:turtle_egg",
      "name": "カメの卵",
      "category": "other",
      "nutrition": 3,
      "pool": [
        [
          "v",
          "resistance",
          1,
          2,
          30,
          60,
          2
        ],
        [
          "v",
          "water_breathing",
          1,
          1,
          60,
          120,
          2
        ],
        [
          "s",
          "armor_flat",
          1,
          2,
          90,
          180,
          1
        ]
      ]
    },
    {
      "id": "minecraft:dragon_egg",
      "name": "ドラゴンの卵",
      "category": "other",
      "nutrition": 6,
      "special": "amplify2",
      "pool": [
        [
          "v",
          "strength",
          2,
          3,
          60,
          120,
          2
        ],
        [
          "s",
          "attack_rate",
          2,
          3,
          120,
          240,
          2
        ],
        [
          "p",
          "shockwave",
          1,
          2,
          180,
          300,
          1
        ],
        [
          "x",
          "xp",
          2,
          3,
          300,
          600,
          1
        ]
      ]
    },
    {
      "id": "minecraft:blue_egg",
      "name": "青色の卵",
      "category": "other",
      "nutrition": 2,
      "pool": [
        [
          "s",
          "max_health",
          1,
          1,
          60,
          120,
          2
        ],
        [
          "v",
          "water_breathing",
          1,
          1,
          30,
          60,
          1
        ],
        [
          "a",
          "spi",
          2,
          3,
          60,
          120,
          1
        ]
      ]
    },
    {
      "id": "minecraft:brown_egg",
      "name": "茶色の卵",
      "category": "other",
      "nutrition": 2,
      "pool": [
        [
          "s",
          "max_health",
          1,
          1,
          60,
          120,
          2
        ],
        [
          "v",
          "resistance",
          1,
          1,
          20,
          40,
          1
        ],
        [
          "a",
          "vit",
          2,
          3,
          60,
          120,
          1
        ]
      ]
    },
    {
      "id": "minecraft:ink_sac",
      "name": "イカスミ",
      "category": "other",
      "nutrition": 1,
      "special": "invert",
      "pool": [
        [
          "s",
          "dodge_chance",
          1,
          2,
          60,
          120,
          2
        ],
        [
          "v",
          "blindness",
          1,
          1,
          5,
          10,
          1
        ]
      ]
    },
    {
      "id": "minecraft:glow_ink_sac",
      "name": "輝くイカスミ",
      "category": "other",
      "nutrition": 1,
      "special": "invert",
      "pool": [
        [
          "v",
          "night_vision",
          1,
          2,
          60,
          120,
          2
        ],
        [
          "s",
          "dodge_chance",
          1,
          2,
          60,
          120,
          1
        ],
        [
          "v",
          "darkness",
          1,
          1,
          5,
          10,
          1
        ]
      ]
    },
    {
      "id": "minecraft:rabbit_foot",
      "name": "ウサギの足",
      "category": "meat",
      "nutrition": 1,
      "pool": [
        [
          "v",
          "jump_boost",
          2,
          3,
          60,
          120,
          2
        ],
        [
          "s",
          "dodge_chance",
          1,
          2,
          90,
          180,
          2
        ],
        [
          "a",
          "agi",
          3,
          5,
          180,
          300,
          1
        ]
      ]
    },
    {
      "id": "minecraft:fermented_spider_eye",
      "name": "発酵したクモの目",
      "category": "other",
      "nutrition": 1,
      "special": "invert",
      "pool": [
        [
          "s",
          "weakness_chance",
          2,
          3,
          60,
          120,
          2
        ],
        [
          "v",
          "weakness",
          1,
          1,
          10,
          20,
          1
        ],
        [
          "v",
          "slowness",
          1,
          1,
          10,
          20,
          1
        ]
      ]
    },
    {
      "id": "minecraft:phantom_membrane",
      "name": "ファントムの皮膜",
      "category": "other",
      "nutrition": 1,
      "pool": [
        [
          "v",
          "slow_falling",
          2,
          3,
          60,
          120,
          2
        ],
        [
          "s",
          "dodge_chance",
          1,
          1,
          60,
          120,
          1
        ],
        [
          "v",
          "regeneration",
          1,
          1,
          10,
          20,
          1
        ]
      ]
    },
    {
      "id": "minecraft:glistering_melon_slice",
      "name": "輝くスイカの薄切り",
      "category": "crop",
      "nutrition": 4,
      "special": "amplify",
      "pool": [
        [
          "v",
          "regeneration",
          1,
          2,
          30,
          60,
          2
        ],
        [
          "v",
          "absorption",
          1,
          2,
          60,
          120,
          1
        ],
        [
          "s",
          "lifesteal",
          1,
          2,
          90,
          180,
          1
        ]
      ]
    },
    {
      "id": "minecraft:magma_cream",
      "name": "マグマクリーム",
      "category": "other",
      "nutrition": 1,
      "pool": [
        [
          "v",
          "fire_resistance",
          1,
          1,
          120,
          240,
          3
        ],
        [
          "s",
          "thorns_chance",
          1,
          2,
          60,
          120,
          1
        ],
        [
          "p",
          "haste_burst",
          1,
          1,
          120,
          240,
          1
        ]
      ]
    },
    {
      "id": "minecraft:slime_ball",
      "name": "スライムボール",
      "category": "other",
      "nutrition": 1,
      "pool": [
        [
          "v",
          "jump_boost",
          1,
          2,
          30,
          60,
          2
        ],
        [
          "s",
          "knockback_resist",
          1,
          2,
          60,
          120,
          2
        ],
        [
          "v",
          "slowness",
          1,
          1,
          5,
          10,
          1
        ]
      ]
    },
    {
      "id": "minecraft:blaze_powder",
      "name": "ブレイズパウダー",
      "category": "other",
      "nutrition": 1,
      "special": "amplify",
      "pool": [
        [
          "v",
          "strength",
          1,
          2,
          30,
          60,
          2
        ],
        [
          "v",
          "fire_resistance",
          1,
          1,
          60,
          120,
          1
        ],
        [
          "s",
          "attack_flat",
          1,
          2,
          60,
          120,
          1
        ]
      ]
    },
    {
      "id": "minecraft:ghast_tear",
      "name": "ガストの涙",
      "category": "other",
      "nutrition": 1,
      "special": "prolong",
      "pool": [
        [
          "v",
          "regeneration",
          2,
          3,
          30,
          60,
          2
        ],
        [
          "s",
          "critical_reduction",
          1,
          2,
          90,
          180,
          1
        ],
        [
          "a",
          "spi",
          3,
          5,
          180,
          300,
          1
        ]
      ]
    },
    {
      "id": "minecraft:dragon_breath",
      "name": "ドラゴンブレス",
      "category": "other",
      "nutrition": 0,
      "container": "minecraft:glass_bottle",
      "special": "amplify2",
      "pool": [
        [
          "v",
          "strength",
          2,
          3,
          30,
          60,
          2
        ],
        [
          "p",
          "gravity",
          1,
          2,
          120,
          240,
          1
        ],
        [
          "s",
          "critical_chance",
          2,
          3,
          90,
          180,
          1
        ]
      ]
    },
    {
      "id": "minecraft:cake",
      "name": "ケーキ",
      "category": "other",
      "nutrition": 14,
      "special": "extra",
      "pool": [
        [
          "v",
          "saturation",
          2,
          3,
          20,
          40,
          2
        ],
        [
          "v",
          "speed",
          1,
          2,
          60,
          120,
          1
        ],
        [
          "x",
          "xp",
          1,
          2,
          300,
          600,
          1
        ]
      ]
    }
  ],
  "extraPool": [
    [
      "v",
      "speed",
      1,
      2,
      30,
      90,
      1
    ],
    [
      "v",
      "haste",
      1,
      2,
      30,
      90,
      1
    ],
    [
      "v",
      "strength",
      1,
      2,
      30,
      90,
      1
    ],
    [
      "v",
      "regeneration",
      1,
      2,
      30,
      90,
      1
    ],
    [
      "v",
      "resistance",
      1,
      2,
      30,
      90,
      1
    ],
    [
      "v",
      "fire_resistance",
      1,
      1,
      30,
      90,
      1
    ],
    [
      "v",
      "night_vision",
      1,
      1,
      30,
      90,
      1
    ],
    [
      "v",
      "jump_boost",
      1,
      2,
      30,
      90,
      1
    ],
    [
      "v",
      "absorption",
      1,
      2,
      30,
      90,
      1
    ],
    [
      "v",
      "slow_falling",
      1,
      1,
      30,
      90,
      1
    ],
    [
      "v",
      "poison",
      1,
      1,
      10,
      20,
      1
    ],
    [
      "v",
      "weakness",
      1,
      1,
      10,
      20,
      1
    ],
    [
      "v",
      "slowness",
      1,
      1,
      10,
      20,
      1
    ],
    [
      "v",
      "hunger",
      1,
      1,
      10,
      20,
      1
    ],
    [
      "s",
      "attack_flat",
      1,
      2,
      60,
      120,
      1
    ],
    [
      "s",
      "armor_rate",
      1,
      2,
      60,
      120,
      1
    ],
    [
      "s",
      "critical_chance",
      1,
      2,
      60,
      120,
      1
    ],
    [
      "s",
      "dodge_chance",
      1,
      2,
      60,
      120,
      1
    ],
    [
      "s",
      "max_health",
      1,
      2,
      60,
      120,
      1
    ],
    [
      "x",
      "xp",
      1,
      1,
      60,
      120,
      1
    ]
  ],
  "effects": {
    "speed": {
      "name": "移動速度上昇"
    },
    "haste": {
      "name": "採掘速度上昇"
    },
    "strength": {
      "name": "攻撃力上昇"
    },
    "regeneration": {
      "name": "再生能力"
    },
    "resistance": {
      "name": "耐性"
    },
    "fire_resistance": {
      "name": "火炎耐性"
    },
    "night_vision": {
      "name": "暗視"
    },
    "water_breathing": {
      "name": "水中呼吸"
    },
    "jump_boost": {
      "name": "跳躍力上昇"
    },
    "absorption": {
      "name": "衝撃吸収"
    },
    "saturation": {
      "name": "満腹度回復"
    },
    "slow_falling": {
      "name": "落下速度低下"
    },
    "invisibility": {
      "name": "透明化"
    },
    "health_boost": {
      "name": "体力増強"
    },
    "conduit_power": {
      "name": "コンジットパワー"
    },
    "poison": {
      "name": "毒",
      "bad": true
    },
    "weakness": {
      "name": "弱体化",
      "bad": true
    },
    "slowness": {
      "name": "移動速度低下",
      "bad": true
    },
    "nausea": {
      "name": "吐き気",
      "bad": true
    },
    "hunger": {
      "name": "空腹",
      "bad": true
    },
    "mining_fatigue": {
      "name": "採掘速度低下",
      "bad": true
    },
    "blindness": {
      "name": "盲目",
      "bad": true
    },
    "wither": {
      "name": "衰弱",
      "bad": true
    },
    "darkness": {
      "name": "暗闇",
      "bad": true
    }
  },
  "powers": {
    "haste_burst": {
      "name": "加速",
      "description": "攻撃を受けた直後 3 秒、移動速度が上がる（CT 10 秒）"
    },
    "calm_regen": {
      "name": "再生",
      "description": "10 秒間攻撃されなければ最大 HP の 10% 回復"
    },
    "shockwave": {
      "name": "衝撃波",
      "description": "攻撃時 20% で周囲の敵に攻撃 ×0.5 と吹き飛ばし（CT 8 秒）"
    },
    "gravity": {
      "name": "重力",
      "description": "スニーク＋ジャンプで周囲の敵を引き寄せる（CT 15 秒）"
    }
  },
  "units": {
    "attack_flat": 1,
    "attack_rate": 5,
    "critical_chance": 5,
    "critical_power": 10,
    "bleed_chance": 5,
    "bleed_duration": 1,
    "frost_chance": 5,
    "frost_duration": 1,
    "stun_chance": 5,
    "stun_duration": 1,
    "weakness_chance": 5,
    "weakness_duration": 1,
    "knockback_chance": 5,
    "knockback_power": 10,
    "lifesteal": 3,
    "thorns_chance": 5,
    "thorns_power": 10,
    "armor_flat": 1,
    "armor_rate": 5,
    "max_health": 4,
    "block_chance": 5,
    "critical_resist": 5,
    "critical_reduction": 5,
    "bleed_resist": 10,
    "frost_resist": 10,
    "stun_resist": 10,
    "weakness_resist": 10,
    "thorns_resist": 10,
    "knockback_resist": 10,
    "fire_resistance": 1,
    "dodge_chance": 5,
    "fall_guard": 10,
    "movement_speed": 5,
    "sneak_speed": 10,
    "night_vision": 1,
    "jump_boost": 1
  },
  "inversions": {
    "poison": "regeneration",
    "weakness": "strength",
    "slowness": "speed",
    "hunger": "saturation",
    "mining_fatigue": "haste",
    "blindness": "night_vision",
    "nausea": "resistance",
    "wither": "absorption",
    "darkness": "night_vision"
  },
  "alloc": {
    "vit": "VIT",
    "str": "STR",
    "agi": "AGI",
    "int": "INT",
    "spi": "SPI"
  },
  "skills": [
    {
      "discipline": "伐採",
      "disc": "logging",
      "level": 10,
      "side": "a",
      "name": "豊かな葉",
      "kind": "常時",
      "operation": "—",
      "detail": "葉を壊すと苗木（葉の種類に対応）が追加で落ちる。オーク・ダークオークの葉はリンゴも",
      "numbers": "苗木 5%／リンゴ 0.5%（バニラと同率＝合計 2 倍）",
      "source": "RPGsystem_生産スキル一覧.md §1",
      "summary": "葉から苗木とリンゴのドロップ率が2倍になる。",
      "id": "leaf_bonus"
    },
    {
      "discipline": "伐採",
      "disc": "logging",
      "level": 20,
      "side": "a",
      "name": "炭焼き",
      "kind": "常時",
      "operation": "—",
      "detail": "原木を掘ると木炭が落ちる",
      "numbers": "5%",
      "source": "RPGsystem_生産スキル一覧.md §1",
      "summary": "原木の伐採時、低確率で木炭をドロップする。",
      "id": "charcoal"
    },
    {
      "discipline": "伐採",
      "disc": "logging",
      "level": 30,
      "side": "a",
      "name": "植え直し",
      "kind": "常時",
      "operation": "—",
      "detail": "下が土・草などの原木（根元）を掘ると、持ち物の同種の苗木を 1 個消費して同じ場所に植える",
      "numbers": "—",
      "source": "RPGsystem_生産スキル一覧.md §1",
      "summary": "木の根元を掘ると自動で苗木を植え直す。",
      "id": "replant"
    },
    {
      "discipline": "伐採",
      "disc": "logging",
      "level": 40,
      "side": "a",
      "name": "森の恵み",
      "kind": "常時",
      "operation": "—",
      "detail": "自然に生えた原木（苗木から育てた木も。自分が置いた原木は除く）を掘ると経験値オーブが落ちる",
      "numbers": "50%",
      "source": "RPGsystem_生産スキル一覧.md §1",
      "summary": "自然生成された原木の伐採時、50%の確率で経験値オーブをドロップする。",
      "id": "log_xp"
    },
    {
      "discipline": "伐採",
      "disc": "logging",
      "level": 50,
      "side": "a",
      "name": "一括刈り取り",
      "kind": "切替",
      "operation": "ハサミでスニーク＋右クリック",
      "detail": "ON の間、葉を壊すとつながった同じ葉を葉ブロックとしてまとめて回収。ハサミの耐久消費は 4 回に 1 回",
      "numbers": "最大 256 個・距離 12（1.16.1）",
      "source": "RPGsystem_生産スキル一覧.md §1",
      "summary": "ハサミを持ちスニーク＋右クリックでON/OFF切替。葉をまとめて刈り取る。",
      "id": "shear_mode"
    },
    {
      "discipline": "伐採",
      "disc": "logging",
      "level": 10,
      "side": "b",
      "name": "木こりの腕",
      "kind": "常時",
      "operation": "斧を持つ",
      "detail": "採掘速度上昇 I が常に付く",
      "numbers": "haste I",
      "source": "RPGsystem_生産スキル一覧.md §1",
      "summary": "斧の所持中、採掘速度が上昇する。",
      "id": "axe_haste"
    },
    {
      "discipline": "伐採",
      "disc": "logging",
      "level": 20,
      "side": "b",
      "name": "一括伐採",
      "kind": "切替",
      "operation": "斧でスニーク＋右クリック",
      "detail": "ON の間、原木を掘るとつながった同じ種類の木をまとめて伐る。スニーク中は 1 本だけ。1tick に 8 個、道具の耐久 1/個（耐久力エンチャントはバニラ同率で無効化）、道具が壊れたら打ち切り、終わると範囲 24 のアイテムを足元へ引き寄せ。壊した 1 本ごとに経験値 2 と追加ドロップ系が働く",
      "numbers": "最大 96 個・距離 24",
      "source": "RPGsystem_生産スキル一覧.md §1",
      "summary": "斧を持ちスニーク＋右クリックでON/OFF切替。木をまとめて伐採する。",
      "id": "fell_mode"
    },
    {
      "discipline": "伐採",
      "disc": "logging",
      "level": 30,
      "side": "b",
      "name": "斧の心得",
      "kind": "常時",
      "operation": "斧を持つ",
      "detail": "近接ダメージ ×1.10。会心・癇癪の後に掛かる特殊倍率（ に行）",
      "numbers": "×1.10",
      "source": "RPGsystem_生産スキル一覧.md §1",
      "summary": "斧の所持中、与ダメージが+10%される。",
      "id": "axe_damage"
    },
    {
      "discipline": "伐採",
      "disc": "logging",
      "level": 40,
      "side": "b",
      "name": "黄金の葉",
      "kind": "常時",
      "operation": "—",
      "detail": "葉を壊すと金のリンゴ／エンチャントされた金のリンゴ（先にエンチャント側を引く）",
      "numbers": "0.1%／0.01%",
      "source": "RPGsystem_生産スキル一覧.md §1",
      "summary": "葉の破壊時、低確率で金のリンゴをドロップする。",
      "id": "golden_leaf"
    },
    {
      "discipline": "伐採",
      "disc": "logging",
      "level": 50,
      "side": "b",
      "name": "森の加護",
      "kind": "常時",
      "operation": "—",
      "detail": "原木を掘るとごくまれにバニラの満腹度回復（saturation）効果が 1 時間続く",
      "numbers": "0.2%／72,000 tick",
      "source": "RPGsystem_生産スキル一覧.md §1",
      "summary": "原木の伐採時、ごくまれに満腹度が回復する効果（持続1時間）を付与する。",
      "id": "saturation_log"
    },
    {
      "discipline": "採掘",
      "disc": "mining",
      "level": 10,
      "side": "a",
      "name": "選鉱",
      "kind": "常時",
      "operation": "—",
      "detail": "石炭・銅の鉱石から金塊または鉄塊（半々）",
      "numbers": "5%",
      "source": "RPGsystem_生産スキル一覧.md §2",
      "summary": "石炭・銅鉱石から、まれに金塊・鉄塊をドロップする。",
      "id": "nuggets"
    },
    {
      "discipline": "採掘",
      "disc": "mining",
      "level": 20,
      "side": "a",
      "name": "3×3 採掘",
      "kind": "切替",
      "operation": "つるはしでスニーク＋右クリック",
      "detail": "ON の間、石・深層岩・花崗岩などを視線に垂直な面の 3×3 でまとめて掘る。スニーク中は 1 個",
      "numbers": "3×3",
      "source": "RPGsystem_生産スキル一覧.md §2",
      "summary": "つるはしを持ちスニーク＋右クリックでON/OFF切替。石を3×3の範囲でまとめて採掘する。",
      "id": "stone_mode"
    },
    {
      "discipline": "採掘",
      "disc": "mining",
      "level": 30,
      "side": "a",
      "name": "一括採掘",
      "kind": "切替",
      "operation": "つるはしでスニーク＋右クリック",
      "detail": "ON の間、鉱石を掘るとつながった同じ鉱脈（鉄と深層鉄は同じ）をまとめて掘る。つるはしの階層が足りない鉱石では始まらない。一括伐採と同じ仕組み",
      "numbers": "最大 64 個・距離 16",
      "source": "RPGsystem_生産スキル一覧.md §2",
      "summary": "つるはしを持ちスニーク＋右クリックでON/OFF切替。繋がった鉱脈をまとめて採掘する。",
      "id": "vein_mode"
    },
    {
      "discipline": "採掘",
      "disc": "mining",
      "level": 40,
      "side": "a",
      "name": "鉱石透視",
      "kind": "発動",
      "operation": "つるはしでスニーク＋右クリック",
      "detail": "半径 30・上下 30 の鉱石を 1 層/tick で走査し、近い順 60 個までを壁越しに光らせるマーカーを 15 秒出す",
      "numbers": "再使用 60 秒",
      "source": "RPGsystem_生産スキル一覧.md §2",
      "summary": "つるはしを持ちスニーク＋右クリックで発動。半径30ブロック以内の鉱石を透視する。（クールタイム: 60秒）",
      "id": "ore_sense"
    },
    {
      "discipline": "採掘",
      "disc": "mining",
      "level": 50,
      "side": "a",
      "name": "大地の加護",
      "kind": "常時",
      "operation": "—",
      "detail": "鉱石を掘るとごくまれにバニラの満腹度回復（saturation）効果が 1 時間（森の加護と同じ）",
      "numbers": "0.2%",
      "source": "RPGsystem_生産スキル一覧.md §2",
      "summary": "鉱石の採掘時、ごくまれに満腹度が回復する効果（持続1時間）を付与する。",
      "id": "saturation_ore"
    },
    {
      "discipline": "採掘",
      "disc": "mining",
      "level": 10,
      "side": "b",
      "name": "鉱夫の腕",
      "kind": "常時",
      "operation": "つるはしを持つ",
      "detail": "採掘速度上昇 I が常に付く",
      "numbers": "haste I",
      "source": "RPGsystem_生産スキル一覧.md §2",
      "summary": "つるはしの所持中、採掘速度が上昇する。",
      "id": "pick_haste"
    },
    {
      "discipline": "採掘",
      "disc": "mining",
      "level": 20,
      "side": "b",
      "name": "坑道の目",
      "kind": "常時",
      "operation": "つるはしを持つ",
      "detail": "暗視が常に付く",
      "numbers": "—",
      "source": "RPGsystem_生産スキル一覧.md §2",
      "summary": "つるはしの所持中、暗視効果が付与される。",
      "id": "pick_nightvision"
    },
    {
      "discipline": "採掘",
      "disc": "mining",
      "level": 30,
      "side": "b",
      "name": "坑夫の足",
      "kind": "常時",
      "operation": "つるはしを持つ",
      "detail": "落下ダメージ 0（条件付き防御ルール）",
      "numbers": "—",
      "source": "RPGsystem_生産スキル一覧.md §2",
      "summary": "つるはしの所持中、落下ダメージを無効化する。",
      "id": "pick_fall"
    },
    {
      "discipline": "採掘",
      "disc": "mining",
      "level": 40,
      "side": "b",
      "name": "軽い足取り",
      "kind": "常時",
      "operation": "つるはしを持つ",
      "detail": "跳躍力上昇 III と移動速度 ×1.2（ステ振り・装備と乗算）",
      "numbers": "×1.2",
      "source": "RPGsystem_生産スキル一覧.md §2",
      "summary": "つるはしの所持中、跳躍力上昇III・移動速度+20%が付与される。",
      "id": "pick_agility"
    },
    {
      "discipline": "採掘",
      "disc": "mining",
      "level": 50,
      "side": "b",
      "name": "原石の目",
      "kind": "常時",
      "operation": "—",
      "detail": "鉱石を掘ると宝石（等級は敵ドロップと同じ抽選）が落ちる",
      "numbers": "1%",
      "source": "RPGsystem_生産スキル一覧.md §2",
      "summary": "鉱石からまれに宝石をドロップする。",
      "id": "ore_gem"
    },
    {
      "discipline": "装備製作",
      "disc": "crafting",
      "level": 10,
      "side": "a",
      "name": "手に馴染む刃",
      "kind": "常時（装備に固定）",
      "operation": "常時",
      "detail": "自分が作った武器（剣・斧・槍・メイス・トライデント・弓・クロスボウ）をメインハンドに持つと攻撃 +1。剛力と同じ倍率前の固定加算",
      "numbers": "+1",
      "source": "RPGsystem_生産スキル一覧.md §3",
      "summary": "自作した武器の攻撃力が+1される。",
      "id": "weapon_self"
    },
    {
      "discipline": "装備製作",
      "disc": "crafting",
      "level": 20,
      "side": "a",
      "name": "自作の鎧",
      "kind": "常時（固定）",
      "operation": "常時",
      "detail": "自分が作った防具を頭・胴・脚・足の 4 部位すべて着ると被ダメ ×0.9。すべての計算の後に掛かる特殊乗算（ に行）",
      "numbers": "×0.9",
      "source": "RPGsystem_生産スキル一覧.md §3",
      "summary": "自作した防具を4部位すべて装備すると、被ダメージが-10%される。",
      "id": "armor_self"
    },
    {
      "discipline": "装備製作",
      "disc": "crafting",
      "level": 30,
      "side": "a",
      "name": "清めの技",
      "kind": "常時（固定）",
      "operation": "常時",
      "detail": "作った装備に呪いが付かない。再抽選・昇華の後も続く",
      "numbers": "—",
      "source": "RPGsystem_生産スキル一覧.md §3",
      "summary": "自作した装備に呪い効果が付与されなくなる。",
      "id": "no_curse"
    },
    {
      "discipline": "装備製作",
      "disc": "crafting",
      "level": 40,
      "side": "a",
      "name": "堅牢な素地",
      "kind": "常時（抽選）",
      "operation": "常時",
      "detail": "作った装備のポテンシャルが必ず 10 以上（10〜20 で抽選）",
      "numbers": "下限 10",
      "source": "RPGsystem_生産スキル一覧.md §3",
      "summary": "自作した装備のポテンシャルが常に10以上になる。",
      "id": "potential_floor"
    },
    {
      "discipline": "装備製作",
      "disc": "crafting",
      "level": 50,
      "side": "a",
      "name": "穿孔の勘",
      "kind": "常時（抽選）",
      "operation": "常時",
      "detail": "通常のソケット抽選の後、空き枠それぞれ 20% で追加（最大 3 枠）",
      "numbers": "20%/枠",
      "source": "RPGsystem_生産スキル一覧.md §3",
      "summary": "自作した装備にソケットが付与されやすくなる。（各枠20%の確率）",
      "id": "socket_luck"
    },
    {
      "discipline": "装備製作",
      "disc": "crafting",
      "level": 10,
      "side": "b",
      "name": "職人の銘",
      "kind": "常時（固定）",
      "operation": "常時",
      "detail": "自分が作った武器を他人が持つと攻撃 +1（本人には効かない）",
      "numbers": "+1",
      "source": "RPGsystem_生産スキル一覧.md §3",
      "summary": "自作した武器を他プレイヤーが装備すると、その攻撃力が+1される。",
      "id": "weapon_others"
    },
    {
      "discipline": "装備製作",
      "disc": "crafting",
      "level": 20,
      "side": "b",
      "name": "名工の鎧",
      "kind": "常時（固定）",
      "operation": "常時",
      "detail": "同じ他人が作った防具 4 部位で ×0.9（製作者本人には効かない）",
      "numbers": "×0.9",
      "source": "RPGsystem_生産スキル一覧.md §3",
      "summary": "自作した防具4部位を他プレイヤーが装備すると、その被ダメージが-10%される。",
      "id": "armor_others"
    },
    {
      "discipline": "装備製作",
      "disc": "crafting",
      "level": 30,
      "side": "b",
      "name": "匠の鍛え",
      "kind": "常時（固定）",
      "operation": "常時",
      "detail": "作った装備の追加耐久が 1 点ごとに 30% で減らない",
      "numbers": "30%",
      "source": "RPGsystem_生産スキル一覧.md §3",
      "summary": "自作した装備の追加耐久値が、30%の確率で消費されなくなる。",
      "id": "durability_saver"
    },
    {
      "discipline": "装備製作",
      "disc": "crafting",
      "level": 40,
      "side": "b",
      "name": "上位の鍛造",
      "kind": "常時（抽選）",
      "operation": "常時",
      "detail": "数値プールが 1 段階上のレア度（ユニークは据え置き）。全再抽選・能力再抽選・数値再抽選・昇華で消え、固定・解除では残り、刻印で引き継ぐ",
      "numbers": "+1 段",
      "source": "RPGsystem_生産スキル一覧.md §3",
      "summary": "自作した装備のステータス数値が1段階上のレア度基準になる。（再抽選・昇華を行うとこの効果は消失）",
      "id": "value_boost"
    },
    {
      "discipline": "装備製作",
      "disc": "crafting",
      "level": 50,
      "side": "b",
      "name": "急所の細工",
      "kind": "常時（固定）",
      "operation": "常時",
      "detail": "この技の付いた装備 1 部位につき会心率 +2.5%・会心倍率 +2.5%（武器・防具・盾・トーテム・エリトラ。製作者は誰でも可）。装備上限の後に加算",
      "numbers": "+2.5%/部位",
      "source": "RPGsystem_生産スキル一覧.md §3",
      "summary": "自作した装備1部位につき、会心率+2.5%・会心倍率+2.5%が付与される。",
      "id": "crit_pieces"
    },
    {
      "discipline": "エンチャント",
      "disc": "enchanting",
      "level": 10,
      "side": "a",
      "name": "魔力の刃",
      "kind": "常時",
      "operation": "エンチャント付き武器を持つ",
      "detail": "攻撃 +1（固定加算）。",
      "numbers": "+1",
      "source": "RPGsystem_生産スキル一覧.md §4",
      "summary": "エンチャントされた武器の攻撃力が+1される。",
      "id": "ench_weapon"
    },
    {
      "discipline": "エンチャント",
      "disc": "enchanting",
      "level": 20,
      "side": "a",
      "name": "魔力の補強",
      "kind": "常時",
      "operation": "—",
      "detail": "エンチャントした品（耐久のある物）に追加耐久 +50。重ねると積む。本には付かない",
      "numbers": "+50",
      "source": "RPGsystem_生産スキル一覧.md §4",
      "summary": "エンチャントされた装備に耐久値+50を追加する。",
      "id": "ench_durability"
    },
    {
      "discipline": "エンチャント",
      "disc": "enchanting",
      "level": 30,
      "side": "a",
      "name": "知識の護り",
      "kind": "常時",
      "operation": "Lv20 以上",
      "detail": "被ダメ ×0.9（全計算の後の hurtHook）＋攻撃 +1（レベル条件付きルール）",
      "numbers": "×0.9／+1",
      "source": "RPGsystem_生産スキル一覧.md §4",
      "summary": "経験値レベルが20以上の場合、被ダメージ-10%・攻撃力+1が付与される。",
      "id": "level_guard"
    },
    {
      "discipline": "エンチャント",
      "disc": "enchanting",
      "level": 40,
      "side": "a",
      "name": "知識の一撃",
      "kind": "常時",
      "operation": "Lv30 以上",
      "detail": "会心率 +10%・会心倍率 +10%（装備上限の後に加算）",
      "numbers": "+10%/+10%",
      "source": "RPGsystem_生産スキル一覧.md §4",
      "summary": "経験値レベルが30以上の場合、会心率+10%・会心倍率+10%が付与される。",
      "id": "level_crit"
    },
    {
      "discipline": "エンチャント",
      "disc": "enchanting",
      "level": 50,
      "side": "a",
      "name": "経験の一撃",
      "kind": "発動",
      "operation": "本でスニーク＋右クリック",
      "detail": "本 1 冊（スタックから 1 つだけ）と経験値レベルを全消費し、次の 1 発（近接・飛び道具）の攻撃にレベルぶんを固定加算（1 回で消える）。エンチャント本では発動しない（1.16.1）",
      "numbers": "+Lv",
      "source": "RPGsystem_生産スキル一覧.md §4",
      "summary": "本を持ちスニーク＋右クリックで発動。本と全レベルを消費し、次の一撃の攻撃力に「消費したレベル数値」を加算する。",
      "id": "xp_strike"
    },
    {
      "discipline": "エンチャント",
      "disc": "enchanting",
      "level": 10,
      "side": "b",
      "name": "砥石の心得",
      "kind": "常時",
      "operation": "—",
      "detail": "砥石でエンチャントを剥がしたとき、バニラと同じ式（各エンチャントの最低コスト合計 s → ceil(s/2)〜s。呪いは除く）で計算した経験値をもう 1 回受け取る（オーブの実値は読めないため表で近似）",
      "numbers": "×2 相当",
      "source": "RPGsystem_生産スキル一覧.md §4",
      "summary": "砥石を使用した際に得られる経験値が2倍になる。",
      "id": "grindstone_double"
    },
    {
      "discipline": "エンチャント",
      "disc": "enchanting",
      "level": 20,
      "side": "b",
      "name": "経験の引力",
      "kind": "常時",
      "operation": "—",
      "detail": "10 ブロック以内の経験値オーブを 10tick おきに足元へ",
      "numbers": "半径 10",
      "source": "RPGsystem_生産スキル一覧.md §4",
      "summary": "半径10ブロック以内の経験値オーブを自動で引き寄せる。",
      "id": "xp_magnet"
    },
    {
      "discipline": "エンチャント",
      "disc": "enchanting",
      "level": 30,
      "side": "b",
      "name": "魔力の奇跡",
      "kind": "常時",
      "operation": "—",
      "detail": "エンチャント時 10% で消費レベルを全額返還。常時の還元と重なる（最大 125%）",
      "numbers": "10%",
      "source": "RPGsystem_生産スキル一覧.md §4",
      "summary": "エンチャント時、10%の確率で消費したレベルが全額返還される。",
      "id": "full_refund"
    },
    {
      "discipline": "エンチャント",
      "disc": "enchanting",
      "level": 40,
      "side": "b",
      "name": "魔力の変換",
      "kind": "発動",
      "operation": "呪い（束縛・消滅）付きの装備・本でスニーク＋右クリック → その場でスニークを 10 秒続ける",
      "detail": "Lv10 以上。完了でレベル −10、その品は消え、ダメージ軽減 III／ダメージ増加 III／修繕 I の本のどれか。動く（1.5 ブロック）・スニークをやめる・持ち替えで中断（レベルは減らない）。能力付き装備は警告",
      "numbers": "10 秒／−10 Lv",
      "source": "RPGsystem_生産スキル一覧.md §4",
      "summary": "呪いエンチャント付きアイテムを持ちスニーク＋右クリック後、10秒間スニークを維持するとレベルを10消費し、「軽減III・増加III・修繕」のいずれかのエンチャント本に変換する。",
      "id": "transmute_book"
    },
    {
      "discipline": "エンチャント",
      "disc": "enchanting",
      "level": 50,
      "side": "b",
      "name": "魔導の昇華",
      "kind": "発動",
      "operation": "バニラの最大レベルに達したエンチャントを含む本でスニーク＋右クリック → スニークを続ける",
      "detail": "対象は最大レベルのすべてのエンチャント（呪いと、最大 I でレベルの概念が無いもの＝無限・修繕・シルクタッチ・水中採掘・フレイム・召雷・拡散は除く。最大レベルは API の値を優先）。毎秒レベル 1 消費、成功率 1% + 99% × 消費/50（50 で 100%）。成功でそのエンチャントだけ 1 段上の本（複数が最大ならランダム 1 つ、他のエンチャントは消える）。上限は最大+4。上限超えの本は構造物 structures/rpg/<ench>_<lv>.mcstructure を足元へ読み込む",
      "numbers": "1〜100%",
      "source": "RPGsystem_生産スキル一覧.md §4",
      "summary": "最大レベルのエンチャント本を持ちスニーク＋右クリックで発動。スニーク中は毎秒レベルを1消費し、確率（1〜100%）で1段階上のエンチャント本に昇華させる。",
      "id": "book_ascend"
    },
    {
      "discipline": "農業",
      "disc": "farming",
      "level": 10,
      "side": "a",
      "name": "広い鍬さばき",
      "kind": "常時",
      "operation": "鍬で耕す",
      "detail": "耕した tick に周囲 3×3 の耕せる土（上が空気）も耕地に。追加 1 マスごとに耕し点 1（10 分クールダウン共通）と鍬の耐久 1（尽きれば壊れる）",
      "numbers": "3×3",
      "source": "RPGsystem_生産スキル一覧.md §5",
      "summary": "鍬の使用時、3×3の範囲をまとめて耕す。",
      "id": "till_area"
    },
    {
      "discipline": "農業",
      "disc": "farming",
      "level": 20,
      "side": "a",
      "name": "歩き収穫",
      "kind": "切替（既定 ON）",
      "operation": "鍬でスニーク＋右クリック",
      "detail": "5tick おきに足元を見て成熟作物なら setblock … destroy（バニラのドロップ）で収穫。小麦・ニンジン・ジャガイモ・ビートルート・ネザーウォート・トーチフラワー・ピッチャーが対象（スイートベリー・ココア・メロン・カボチャは除く）",
      "numbers": "足元 1 マス",
      "source": "RPGsystem_生産スキル一覧.md §5",
      "summary": "鍬を持ちスニーク＋右クリックでON/OFF切替。ONの間、成熟した作物の上を歩くだけで自動収穫する。",
      "id": "walk_harvest"
    },
    {
      "discipline": "農業",
      "disc": "farming",
      "level": 30,
      "side": "a",
      "name": "植え直しの手",
      "kind": "常時",
      "operation": "—",
      "detail": "収穫の次の tick に、持ち物の対応する種を 1 個減らして同じ場所へ成長 0 で植える。下が耕地（ネザーウォートはソウルサンド）のときだけ。植える点 1 も入る",
      "numbers": "—",
      "source": "RPGsystem_生産スキル一覧.md §5",
      "summary": "作物の収穫時、自動で種を植え直す。",
      "id": "auto_replant"
    },
    {
      "discipline": "農業",
      "disc": "farming",
      "level": 40,
      "side": "a",
      "name": "一括収穫",
      "kind": "切替（既定 ON）",
      "operation": "鍬でスニーク＋右クリック",
      "detail": "収穫すると周囲 3×3 の成熟作物も収穫。スニーク中は 1 個だけ",
      "numbers": "3×3",
      "source": "RPGsystem_生産スキル一覧.md §5",
      "summary": "鍬を持ちスニーク＋右クリックでON/OFF切替。ONの間、収穫した作物の周囲3×3の成熟した作物もまとめて自動収穫する。",
      "id": "bulk_harvest"
    },
    {
      "discipline": "農業",
      "disc": "farming",
      "level": 50,
      "side": "a",
      "name": "早熟の種",
      "kind": "常時",
      "operation": "—",
      "detail": "植えた瞬間（植え直し含む）に最高段階まで成長。茎も最大に",
      "numbers": "20%",
      "source": "RPGsystem_生産スキル一覧.md §5",
      "summary": "種を植えた瞬間、20%の確率で即座に成熟する。",
      "id": "instant_grow"
    },
    {
      "discipline": "農業",
      "disc": "farming",
      "level": 10,
      "side": "b",
      "name": "畑の足取り",
      "kind": "常時",
      "operation": "鍬を持つ",
      "detail": "移動速度 ×1.3（ステ振り・装備と乗算）",
      "numbers": "×1.3",
      "source": "RPGsystem_生産スキル一覧.md §5",
      "summary": "鍬の所持中、移動速度が+30%される。",
      "id": "hoe_speed"
    },
    {
      "discipline": "農業",
      "disc": "farming",
      "level": 20,
      "side": "b",
      "name": "青いジャガイモの力",
      "kind": "常時",
      "operation": "毒のあるジャガイモを食べる",
      "detail": "移動速度上昇 II・跳躍力上昇 II・攻撃力上昇 I・耐性 I を 20 秒",
      "numbers": "400 tick",
      "source": "RPGsystem_生産スキル一覧.md §5",
      "summary": "青いジャガイモを食べると、20秒間（移動速度上昇II・跳躍力上昇II・攻撃力上昇I・耐性I）が付与される。",
      "id": "blue_potato"
    },
    {
      "discipline": "農業",
      "disc": "farming",
      "level": 30,
      "side": "b",
      "name": "栄養満点",
      "kind": "常時",
      "operation": "—",
      "detail": "収穫 1 回につき産物のスタック全体に品質「栄養満点」（種には付かない）",
      "numbers": "20%",
      "source": "RPGsystem_生産スキル一覧.md §5",
      "summary": "収穫時、20%の確率で「栄養満点」状態の作物が採れる。",
      "id": "quality_nutritious"
    },
    {
      "discipline": "農業",
      "disc": "farming",
      "level": 40,
      "side": "b",
      "name": "突然変異",
      "kind": "常時",
      "operation": "—",
      "detail": "品質「突然変異」",
      "numbers": "5%",
      "source": "RPGsystem_生産スキル一覧.md §5",
      "summary": "収穫時、5%の確率で「突然変異」状態の作物が採れる。",
      "id": "quality_mutant"
    },
    {
      "discipline": "農業",
      "disc": "farming",
      "level": 50,
      "side": "b",
      "name": "至高の実り",
      "kind": "常時",
      "operation": "—",
      "detail": "品質「至高」",
      "numbers": "1%",
      "source": "RPGsystem_生産スキル一覧.md §5",
      "summary": "収穫時、1%の確率で「至高」状態の作物が採れる。",
      "id": "quality_supreme"
    },
    {
      "discipline": "釣り",
      "disc": "fishing",
      "level": 10,
      "side": "a",
      "name": "不動の釣り人",
      "kind": "常時",
      "operation": "釣り竿を持って針が出ている",
      "detail": "ノックバックしない。ダメージは受ける",
      "numbers": "—",
      "source": "RPGsystem_生産スキル一覧.md §6",
      "summary": "釣り中、あらゆるノックバックを無効化する。",
      "id": "rod_stance"
    },
    {
      "discipline": "釣り",
      "disc": "fishing",
      "level": 20,
      "side": "a",
      "name": "針掛け",
      "kind": "常時",
      "operation": "—",
      "detail": "釣り針の 1 ブロック以内に敵モブ（monster）がいると眩暈（装備の眩暈と同じ：鈍化＋弱体）。同じ針で 1 回",
      "numbers": "2 秒",
      "source": "RPGsystem_生産スキル一覧.md §6",
      "summary": "釣り針を敵に当てると、2秒間「眩暈」状態にする。",
      "id": "hook_stun"
    },
    {
      "discipline": "釣り",
      "disc": "fishing",
      "level": 30,
      "side": "a",
      "name": "沈没船の記憶",
      "kind": "常時",
      "operation": "—",
      "detail": "釣り上げたときレア品 1 個：ネザライトインゴット 1・ダイヤ 4・エメラルド 4・金インゴット 6・鉄インゴット 8・エンチャント金リンゴ 1（重み）",
      "numbers": "2%",
      "source": "RPGsystem_生産スキル一覧.md §6",
      "summary": "釣り上げ時、2%の確率でレアアイテムを獲得する。",
      "id": "rare_catch"
    },
    {
      "discipline": "釣り",
      "disc": "fishing",
      "level": 40,
      "side": "a",
      "name": "海底の宝石",
      "kind": "常時",
      "operation": "—",
      "detail": "宝石 1〜4 等級（原石の目と同じ抽選）",
      "numbers": "1%",
      "source": "RPGsystem_生産スキル一覧.md §6",
      "summary": "釣り上げ時、1%の確率で宝石を獲得する。",
      "id": "gem_catch"
    },
    {
      "discipline": "釣り",
      "disc": "fishing",
      "level": 50,
      "side": "a",
      "name": "海神の贈り物",
      "kind": "常時",
      "operation": "—",
      "detail": "宝珠・精髄 1 個（敵の報酬表から宝石・穿孔の宝珠・昇華の宝珠（ユニーク）・至高の精髄を除いた重み）",
      "numbers": "0.5%",
      "source": "RPGsystem_生産スキル一覧.md §6",
      "summary": "釣り上げ時、0.5%の確率で宝珠や精髄を獲得する。",
      "id": "orb_catch"
    },
    {
      "discipline": "釣り",
      "disc": "fishing",
      "level": 10,
      "side": "b",
      "name": "一荷釣り",
      "kind": "常時",
      "operation": "—",
      "detail": "魚を釣ると同じ魚がもう 1 匹（大漁とは独立に抽選）",
      "numbers": "30%",
      "source": "RPGsystem_生産スキル一覧.md §6",
      "summary": "魚を釣り上げた際、30%の確率でもう1匹獲得する。",
      "id": "double_fish"
    },
    {
      "discipline": "釣り",
      "disc": "fishing",
      "level": 20,
      "side": "b",
      "name": "雨乞いのフグ",
      "kind": "常時",
      "operation": "フグを食べる",
      "detail": "天候が雨に",
      "numbers": "20%",
      "source": "RPGsystem_生産スキル一覧.md §6",
      "summary": "フグを食べると、20%の確率で天候が雨に変わる。",
      "id": "puffer_rain"
    },
    {
      "discipline": "釣り",
      "disc": "fishing",
      "level": 30,
      "side": "b",
      "name": "栄養満点（魚）",
      "kind": "常時",
      "operation": "—",
      "detail": "釣った魚に品質「栄養満点」（大漁・一荷釣りで増えた同じ魚にも同じ品質。宝物・ゴミには付かない）",
      "numbers": "20%",
      "source": "RPGsystem_生産スキル一覧.md §6",
      "summary": "釣果の20%の確率で「栄養満点」状態の魚が釣れる。",
      "id": "fish_nutritious"
    },
    {
      "discipline": "釣り",
      "disc": "fishing",
      "level": 40,
      "side": "b",
      "name": "突然変異（魚）",
      "kind": "常時",
      "operation": "—",
      "detail": "品質「突然変異」",
      "numbers": "5%",
      "source": "RPGsystem_生産スキル一覧.md §6",
      "summary": "釣果の5%の確率で「突然変異」状態の魚が釣れる。",
      "id": "fish_mutant"
    },
    {
      "discipline": "釣り",
      "disc": "fishing",
      "level": 50,
      "side": "b",
      "name": "至高の魚",
      "kind": "常時",
      "operation": "—",
      "detail": "品質「至高」",
      "numbers": "1%",
      "source": "RPGsystem_生産スキル一覧.md §6",
      "summary": "釣果の1%の確率で「至高」状態の魚が釣れる。",
      "id": "fish_supreme"
    },
    {
      "discipline": "ポーション作成",
      "disc": "brewing",
      "level": 10,
      "side": "a",
      "name": "持続の秘薬",
      "kind": "切替（既定 ON・UI のみ）",
      "operation": "生産画面",
      "detail": "ON の間、延長した飲む瓶に印「16 分」。飲むとその効果（俊敏→速度 など。タートルマスターは 2 効果）を 16 分で付け直す。スプラッシュ・残留は対象外",
      "numbers": "19,200 tick",
      "source": "RPGsystem_生産スキル一覧.md §7",
      "summary": "ONの間、効果延長の飲用ポーションを作成すると、効果時間が「16分」になる。（スプラッシュ・残留は対象外）",
      "id": "extend16"
    },
    {
      "discipline": "ポーション作成",
      "disc": "brewing",
      "level": 20,
      "side": "a",
      "name": "極みの秘薬",
      "kind": "切替（既定 ON・UI のみ）",
      "operation": "生産画面",
      "detail": "ON の間、強化した飲む瓶に印「効果 III」。飲むと同じ残り時間で amplifier 2 に付け直す",
      "numbers": "III",
      "source": "RPGsystem_生産スキル一覧.md §7",
      "summary": "ONの間、効果強化の飲用ポーションを作成すると、効果レベルが「III」になる。（スプラッシュ・残留は対象外）",
      "id": "potion_level3"
    },
    {
      "discipline": "ポーション作成",
      "disc": "brewing",
      "level": 30,
      "side": "a",
      "name": "身かわしの薬",
      "kind": "常時",
      "operation": "—",
      "detail": "飲む瓶に印「身かわし」。飲むと次の被弾を 1 回だけ無効（装備の身かわしと同じ位置＝軽減の前で 0。受け流し・反撃・状態異常も起きない）",
      "numbers": "20%",
      "source": "RPGsystem_生産スキル一覧.md §7",
      "summary": "飲用ポーション使用時、20%の確率で「身かわし（次の一撃を1回無効化）」を付与する。",
      "id": "dodge_brew"
    },
    {
      "discipline": "ポーション作成",
      "disc": "brewing",
      "level": 40,
      "side": "a",
      "name": "必殺の薬",
      "kind": "常時",
      "operation": "—",
      "detail": "強化の毒・負傷／延長の弱化・鈍化・衰弱の飲む瓶に印「必殺」。飲むと次の近接・飛び道具の攻撃が ×2（会心・癇癪・斧の心得の後。1 回で消える）",
      "numbers": "10%／×2",
      "source": "RPGsystem_生産スキル一覧.md §7",
      "summary": "「強化の毒・負傷」または「延長の弱化・鈍化・衰弱」ポーション使用時、10%の確率で「必殺（次の攻撃力が2倍）」を付与する。",
      "id": "double_brew"
    },
    {
      "discipline": "ポーション作成",
      "disc": "brewing",
      "level": 50,
      "side": "a",
      "name": "不死の薬",
      "kind": "常時",
      "operation": "—",
      "detail": "強化・延長の飲む瓶に印「不死」。飲むと 10 分間、致死ダメージ（すべての軽減の後で 最終ダメージ ≥ 今の HP）を 1 度だけ 0 にし、最大 HP（装備・ステ振り・スキル込み）まで全回復＋耐性 255 を 3 秒。発動後 30 分は再発動しない（再使用中に飲んでも期限は付き、再使用が切れた後の致死で発動）",
      "numbers": "5%／10 分／再使用 30 分",
      "source": "RPGsystem_生産スキル一覧.md §7",
      "summary": "「強化・延長」ポーション使用時、5%の確率で「不死」を付与する。（10分間、致死ダメージを1回無効化しHP全回復。再発動には30分必要）",
      "id": "lastlife_brew"
    },
    {
      "discipline": "ポーション作成",
      "disc": "brewing",
      "level": 10,
      "side": "b",
      "name": "戻る瓶",
      "kind": "常時",
      "operation": "スプラッシュ・残留を投げる",
      "detail": "同じ瓶が 1 本手元に戻る",
      "numbers": "30%",
      "source": "RPGsystem_生産スキル一覧.md §7",
      "summary": "投擲ポーションを使用した際、30%の確率で空き瓶が手元に戻る。",
      "id": "bottle_return"
    },
    {
      "discipline": "ポーション作成",
      "disc": "brewing",
      "level": 20,
      "side": "b",
      "name": "直射投擲",
      "kind": "常時",
      "operation": "スプラッシュ・残留を投げる",
      "detail": "スプラッシュ・残留ポーションが落下せず、まっすぐ飛ぶ。何にも当たらない場合は4秒で消える。",
      "numbers": "重力 0",
      "source": "RPGsystem_生産スキル一覧.md §7",
      "summary": "投擲ポーションが重力の影響を受けず真っ直ぐ飛ぶようになる。",
      "id": "straight_throw"
    },
    {
      "discipline": "ポーション作成",
      "disc": "brewing",
      "level": 30,
      "side": "b",
      "name": "竜息の一撃",
      "kind": "発動",
      "operation": "ドラゴンブレスでスニーク＋右クリック",
      "detail": "1 個消費し、半径 5 の敵モブに眩暈（鈍化＋弱体）＋衰弱 I を 10 秒、ノックバック（水平 3・上 0.5）",
      "numbers": "再使用 5 秒",
      "source": "RPGsystem_生産スキル一覧.md §7",
      "summary": "ドラゴンブレスを持ちスニーク＋右クリックで発動。半径5ブロックの対象に「眩暈・衰弱（10秒）＋吹き飛ばし」を与える。（クールタイム: 5秒）",
      "id": "dragon_breath"
    },
    {
      "discipline": "ポーション作成",
      "disc": "brewing",
      "level": 40,
      "side": "b",
      "name": "毒矢の冴え",
      "kind": "常時",
      "operation": "効果付きの矢を当てる",
      "detail": "命中した相手に付いている「矢の効果」（残り 60 秒以下の 毒・鈍化・弱化・暗視・透明化・跳躍・耐火・速度・水中呼吸・再生・力・衰弱・低速落下・耐性）を amplifier +1・同じ残り時間で付け直す（近似。治癒・負傷は対象外）",
      "numbers": "+1 段",
      "source": "RPGsystem_生産スキル一覧.md §7",
      "summary": "効果付きの矢のポーション効果レベルが+1段強化される。",
      "id": "arrow_boost"
    },
    {
      "discipline": "ポーション作成",
      "disc": "brewing",
      "level": 50,
      "side": "b",
      "name": "投擲の勢い",
      "kind": "常時",
      "operation": "スプラッシュ・残留を投げる",
      "detail": "移動速度上昇 V・跳躍力上昇 V を 10 秒",
      "numbers": "200 tick",
      "source": "RPGsystem_生産スキル一覧.md §7",
      "summary": "ポーション投擲後、10秒間「移動速度上昇V・跳躍力上昇V」が付与される。",
      "id": "throw_haste"
    },
    {
      "discipline": "畜産",
      "disc": "ranching",
      "level": 10,
      "side": "a",
      "name": "牧童の呼び声",
      "kind": "切替（既定 ON）",
      "operation": "小麦でスニーク＋右クリック",
      "detail": "動物に餌をやると 10 ブロック以内の同じ種類（子ども含む）が餌をやった動物の周り 1〜2 ブロックへテレポート",
      "numbers": "半径 10",
      "source": "RPGsystem_生産スキル一覧.md §8",
      "summary": "小麦を持ちスニーク＋右クリックでON/OFF切替。ONの間、動物に餌を与えると半径10ブロック以内の同種の動物が足元に集まる。",
      "id": "herd_call"
    },
    {
      "discipline": "畜産",
      "disc": "ranching",
      "level": 20,
      "side": "a",
      "name": "早生えの毛",
      "kind": "常時",
      "operation": "ハサミで羊を刈る",
      "detail": "刈った次の tick に羊毛が生え直す（バニラの event を試し、戻らなければ同じ色・名札・印・持ち主の羊を出し直す）",
      "numbers": "30%",
      "source": "RPGsystem_生産スキル一覧.md §8",
      "summary": "羊の毛刈り時、30%の確率で即座に毛が再生する。",
      "id": "wool_regrow"
    },
    {
      "discipline": "畜産",
      "disc": "ranching",
      "level": 30,
      "side": "a",
      "name": "双子の祝福",
      "kind": "常時",
      "operation": "—",
      "detail": "繁殖で子が生まれたとき同種をもう 1 匹（子ども・印・持ち主付き）。2 匹目にも繁殖点 10",
      "numbers": "20%",
      "source": "RPGsystem_生産スキル一覧.md §8",
      "summary": "動物の繁殖時、20%の確率で双子が生まれる。",
      "id": "twins"
    },
    {
      "discipline": "畜産",
      "disc": "ranching",
      "level": 40,
      "side": "a",
      "name": "よく産む鶏",
      "kind": "常時",
      "operation": "鶏に餌をやる",
      "detail": "持ち主がこのスキルを持つ鶏は 5 分ごとに追加で卵を産む。バニラの産卵に追加。持ち主がスキルを外すと予定が消える",
      "numbers": "5 分",
      "source": "RPGsystem_生産スキル一覧.md §8",
      "summary": "飼育している鶏が5分ごとに卵を産むようになる。",
      "id": "egg_timer"
    },
    {
      "discipline": "畜産",
      "disc": "ranching",
      "level": 50,
      "side": "a",
      "name": "一斉出荷",
      "kind": "発動",
      "operation": "木の剣でスニーク＋右クリック",
      "detail": "10 ブロック以内の飼っている家畜（成体のみ。子ども・自然湧きは除く）をまとめて屠殺（点・豊かな家畜・品質は通常どおり）し、2tick 後に 12 ブロック以内のドロップを持ち物へ（入らない分はその場）",
      "numbers": "再使用 60 秒",
      "source": "RPGsystem_生産スキル一覧.md §8",
      "summary": "木の剣を持ちスニーク＋右クリックで発動。半径10ブロック以内の飼育家畜を一斉に屠殺しアイテムを回収する。（クールタイム: 60秒）",
      "id": "mass_slaughter"
    },
    {
      "discipline": "畜産",
      "disc": "ranching",
      "level": 10,
      "side": "b",
      "name": "牛乳の恵み",
      "kind": "常時",
      "operation": "牛乳を飲む",
      "detail": "HP +10（最大まで）",
      "numbers": "+10",
      "source": "RPGsystem_生産スキル一覧.md §8",
      "summary": "牛乳を飲むとHPが+10回復する。",
      "id": "milk_heal"
    },
    {
      "discipline": "畜産",
      "disc": "ranching",
      "level": 20,
      "side": "b",
      "name": "金の卵",
      "kind": "常時",
      "operation": "—",
      "detail": "飼っている鶏（1.5 ブロック以内）が産んだ卵が、持ち主がこのスキルを持っていれば金の卵 に。食べると 10 分間 生産・プレイヤー・バニラ経験値 2 倍（バニラは 1 秒おきの増分と同量を追加。期限は実時間で退出後も続く）",
      "numbers": "1%／10 分",
      "source": "RPGsystem_生産スキル一覧.md §8",
      "summary": "飼育している鶏が、1%の確率で「金の卵（10分間経験値2倍）」を産む。",
      "id": "golden_egg"
    },
    {
      "discipline": "畜産",
      "disc": "ranching",
      "level": 30,
      "side": "b",
      "name": "栄養満点（肉）",
      "kind": "常時",
      "operation": "—",
      "detail": "屠殺時、肉（牛・豚・羊・鶏・ウサギ）に品質「栄養満点」（革・羽には付かない）",
      "numbers": "20%",
      "source": "RPGsystem_生産スキル一覧.md §8",
      "summary": "家畜の屠殺時、20%の確率で「栄養満点」状態の肉をドロップする。",
      "id": "meat_nutritious"
    },
    {
      "discipline": "畜産",
      "disc": "ranching",
      "level": 40,
      "side": "b",
      "name": "突然変異（肉）",
      "kind": "常時",
      "operation": "—",
      "detail": "品質「突然変異」",
      "numbers": "5%",
      "source": "RPGsystem_生産スキル一覧.md §8",
      "summary": "家畜の屠殺時、5%の確率で「突然変異」状態の肉をドロップする。",
      "id": "meat_mutant"
    },
    {
      "discipline": "畜産",
      "disc": "ranching",
      "level": 50,
      "side": "b",
      "name": "至高の肉",
      "kind": "常時",
      "operation": "—",
      "detail": "品質「至高」",
      "numbers": "1%",
      "source": "RPGsystem_生産スキル一覧.md §8",
      "summary": "家畜の屠殺時、1%の確率で「至高」状態の肉をドロップする。",
      "id": "meat_supreme"
    },
    {
      "discipline": "料理",
      "disc": "cooking",
      "level": 10,
      "side": "a",
      "name": "大盛り",
      "kind": "常時",
      "operation": "調理",
      "detail": "料理の満腹度 ×1.2",
      "numbers": "×1.2",
      "source": "RPGsystem_生産スキル一覧.md §9",
      "summary": "料理の満腹度回復量が1.2倍になる。（満腹度の上限を突破可能）",
      "id": "hearty_dish"
    },
    {
      "discipline": "料理",
      "disc": "cooking",
      "level": 20,
      "side": "a",
      "name": "じっくり煮込み",
      "kind": "常時",
      "operation": "調理",
      "detail": "4 種類以上の素材（同じ食材は 1 種類。品質違いも同じ種類）で作った料理は全効果の時間 +20%（上限で切る前に掛ける。豪華料理の +25% と重なる）",
      "numbers": "4 種類以上／×1.2",
      "source": "RPGsystem_生産スキル一覧.md §9",
      "summary": "4種類以上の素材を使用した料理の、バフ効果時間が+20%される。",
      "id": "slow_simmer"
    },
    {
      "discipline": "料理",
      "disc": "cooking",
      "level": 30,
      "side": "a",
      "name": "フルコース",
      "kind": "常時",
      "operation": "—",
      "detail": "料理に付く効果の種類数 5 → 8（ で +3）",
      "numbers": "8 種",
      "source": "RPGsystem_生産スキル一覧.md §9",
      "summary": "料理に付与されるバフ効果の種類が「5種類」から「8種類」に拡張される。",
      "id": "full_course"
    },
    {
      "discipline": "料理",
      "disc": "cooking",
      "level": 40,
      "side": "a",
      "name": "豪華料理",
      "kind": "常時",
      "operation": "調理",
      "detail": "上限で切って種類数を絞ったあとに異なる効果が 5 種類以上残っていれば、全効果 +1 段（上限内）・時間 ×1.25・満腹度 +2（上限 20 内）。",
      "numbers": "5 種以上",
      "source": "RPGsystem_生産スキル一覧.md §9",
      "summary": "バフ効果が5種類以上付与された料理は、全効果レベル+1、効果時間+25%、満腹度回復量+2される。",
      "id": "grand_dish"
    },
    {
      "discipline": "料理",
      "disc": "cooking",
      "level": 50,
      "side": "a",
      "name": "至高の一皿",
      "kind": "常時",
      "operation": "調理",
      "detail": "至高の素材を 1 個以上使うと、至高の個数 ×2% で 1 回抽選。当たると全効果 +1 段（限界突破：バニラ VI・独自 6 段・ステ振り +26 まで）。",
      "numbers": "2%/個",
      "source": "RPGsystem_生産スキル一覧.md §9",
      "summary": "調理に使用した「至高」食材1個につき、2%の確率で全効果レベルが+1される。（上限を突破可能）",
      "id": "supreme_plate"
    },
    {
      "discipline": "料理",
      "disc": "cooking",
      "level": 10,
      "side": "b",
      "name": "節約上手",
      "kind": "常時",
      "operation": "調理",
      "detail": "調理ごとに 10% で、使った素材をすべて消費しない（素材が残るので容器も戻らない）。レシピ調理にも効く。",
      "numbers": "10%",
      "source": "RPGsystem_生産スキル一覧.md §9",
      "summary": "調理時、10%の確率で素材アイテムを消費しない。",
      "id": "save_ingredient"
    },
    {
      "discipline": "料理",
      "disc": "cooking",
      "level": 20,
      "side": "b",
      "name": "変異の手懐け",
      "kind": "常時",
      "operation": "調理",
      "detail": "突然変異の素材を含む料理に残った悪いバニラ効果（追加抽選のものも）を消し、代わりに同じ時間の VIT+5・SPI+5 を付ける（調理者のスキル。誰が食べても同じ）",
      "numbers": "+5/+5",
      "source": "RPGsystem_生産スキル一覧.md §9",
      "summary": "「突然変異」食材のマイナス効果を「VIT+5・SPI+5」のプラス効果に変換する。",
      "id": "mutant_taming"
    },
    {
      "discipline": "料理",
      "disc": "cooking",
      "level": 30,
      "side": "b",
      "name": "レシピ帳",
      "kind": "常時",
      "operation": "料理を手に持って調理台を殴る",
      "detail": "料理が消えて「レシピ」 に（料理の効果・満腹度・素材と品質・抽選の記録。残り 5 回）。質（同じ料理ができる確率）は作るときに抽選：減点幅 P = (効果の種類 ×4 ＋ 素材 ×2 ＋ 素材の品質 栄養満点 3／突然変異 6／至高 10) × (1 + 0.5 × 世代) として 100−P 〜 100% の一様乱数（どんな料理でも 1/(P+1) で 100% が出る）。レシピから作った料理（世代 1、2…）をレシピにすると P が増えて下がりやすい。下限 10%。調理画面にレシピが並び、選ぶと持ち物から同じ食材（品質も同じ）を集める。質の確率で記録どおり（抽選なし）。外れると floor(質 × 抽選回数 / 100) 回の抽選だけランダムに記録どおりにし、残りは引き直す（引き直しはいまの調理者のスキルで）。おかわり・節約上手・経験値は通常どおり。足りなければ何が足りないかを表示。使い切ると消える",
      "numbers": "5 回／質 10〜100%",
      "source": "RPGsystem_生産スキル一覧.md §9",
      "summary": "料理を持ち調理台を叩くと、その料理をレシピ化する（品質10〜100%で5回分）。以降、同じ素材を使用すると品質の確率に応じて元の料理を再現できる。",
      "id": "recipe_note"
    },
    {
      "discipline": "料理",
      "disc": "cooking",
      "level": 40,
      "side": "b",
      "name": "三度煮",
      "kind": "常時",
      "operation": "調理",
      "detail": "同じ効果が 3 回以上抽選された（奇跡の一皿・追加抽選ぶんも数える。反転で変わった効果は回数を引き継ぐ）ら、上限で切ったあとにその効果 +1 段（限界突破）",
      "numbers": "3 回",
      "source": "RPGsystem_生産スキル一覧.md §9",
      "summary": "同じ効果が3回抽選された場合、効果レベルが+1される。（上限を突破可能）",
      "id": "triple_boil"
    },
    {
      "discipline": "料理",
      "disc": "cooking",
      "level": 50,
      "side": "b",
      "name": "奇跡の一皿",
      "kind": "常時",
      "operation": "調理",
      "detail": "至高と突然変異の素材を両方使った料理は 10% で、全食材の抽選をもう一巡して足す（突然変異の悪い効果・追加抽選ももう 1 回）。",
      "numbers": "10%",
      "source": "RPGsystem_生産スキル一覧.md §9",
      "summary": "「至高」と「突然変異」の食材を併用して調理した際、10%の確率で全食材のバフ効果を再抽選し追加付与する。",
      "id": "miracle_plate"
    }
  ],
  "disciplines": [
    {
      "id": "logging",
      "name": "伐採",
      "passive": "追加の原木",
      "description": "原木を掘ると同じ原木を1個追加。",
      "max": 25,
      "unit": "%",
      "xp": "原木1個：2。プレイヤーが設置した原木は対象外。"
    },
    {
      "id": "mining",
      "name": "採掘",
      "passive": "追加の鉱石",
      "description": "鉱石の代表的なドロップを1個追加。",
      "max": 25,
      "unit": "%",
      "xp": "石炭・銅：2／鉄・ラピス・レッドストーン・水晶・ネザー金：4／金・きらめく黒石：6／ダイヤ・エメラルド：12／古代の残骸：20／その他の鉱石：3。設置した鉱石は対象外。"
    },
    {
      "id": "crafting",
      "name": "装備製作",
      "passive": "追加耐久",
      "description": "製作した装備に追加耐久を付ける。本体の耐久より先に消費。",
      "max": 250,
      "unit": "耐久",
      "xp": "素材段階（5・12・30・60）×レア度倍率（1・1.3・1.7・2.2・3・4・5）×連作倍率（1・0.75・0.5・0.25・0）。同じ品の5連作目以降は0。別の品を作ると戻る。作業台・鍛冶台で製作した装備の初回鑑定時に獲得。"
    },
    {
      "id": "enchanting",
      "name": "エンチャント",
      "passive": "経験値の還元",
      "description": "エンチャントで消費した経験値レベルの一部を還元。端数は確率で1レベル。",
      "max": 25,
      "unit": "%",
      "xp": "エンチャントテーブル・金床でエンチャントが増えるか強まり、経験値レベルを消費したとき、消費レベル×10。名前変更・修理は対象外。"
    },
    {
      "id": "farming",
      "name": "農業",
      "passive": "豊作",
      "description": "成熟した作物の収穫物を1個追加。",
      "max": 25,
      "unit": "%",
      "xp": "耕す：1（同じ場所は10分に1回）／植える：1／成熟した作物の収穫：3。"
    },
    {
      "id": "fishing",
      "name": "釣り",
      "passive": "大漁",
      "description": "同じ魚か宝物を1個追加。ゴミを釣った場合は魚。",
      "max": 25,
      "unit": "%",
      "xp": "魚：5／宝物：20／ゴミ：1。"
    },
    {
      "id": "brewing",
      "name": "ポーション作成",
      "passive": "二重醸造",
      "description": "作ったポーションを1本複製。秘薬の印も同じ。",
      "max": 25,
      "unit": "%",
      "xp": "通常：8／スプラッシュ：12／残留：16。延長・強化は+4。水・ありふれた・奇妙な・濃厚は0。瓶の出し入れだけでは獲得しない。"
    },
    {
      "id": "ranching",
      "name": "畜産",
      "passive": "豊かな家畜",
      "description": "飼っている家畜の肉・革の候補から1個追加。",
      "max": 25,
      "unit": "%",
      "xp": "繁殖：10／飼っている家畜の屠殺：2。自然湧きの家畜を倒しても0。繁殖は餌やりから60秒・8ブロック以内が対象。"
    },
    {
      "id": "cooking",
      "name": "料理",
      "passive": "おかわり",
      "description": "完成した料理をもう1皿追加。レシピ調理にも有効。",
      "max": 25,
      "unit": "%",
      "xp": "素材数×2＋品質付き素材1個につき3＋特殊食材1個につき2。"
    }
  ],
  "gear": [
    {
      "id": "attack_flat",
      "name": "剛力",
      "category": "offense",
      "valueType": "flat",
      "description": "素のダメージへ固定値を加える。STR攻撃・製作スキルなどと合算した後、攻勢の倍率を掛ける。",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow"
      ],
      "weight": 10,
      "profile": "attackFlat",
      "cap": null
    },
    {
      "id": "attack_rate",
      "name": "攻勢",
      "category": "offense",
      "valueType": "percent",
      "description": "固定加算後のダメージを、1＋攻勢÷100倍にする。",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow"
      ],
      "weight": 10,
      "profile": "power",
      "cap": null
    },
    {
      "id": "critical_chance",
      "name": "会心",
      "category": "offense",
      "valueType": "percent",
      "description": "会心の発動率。会心の基本倍率は×2.0。AGIや生産スキルは装備上限の後に加算。",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow",
        "helmet",
        "chestplate",
        "leggings",
        "boots",
        "elytra"
      ],
      "weight": 10,
      "profile": "chance",
      "cap": 100
    },
    {
      "id": "critical_power",
      "name": "会心強化",
      "category": "offense",
      "valueType": "percent",
      "description": "会心倍率の×2.0に加算。+30%なら×2.30。",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow",
        "helmet",
        "chestplate",
        "leggings",
        "boots",
        "elytra"
      ],
      "weight": 10,
      "profile": "power",
      "cap": null
    },
    {
      "id": "bleed_chance",
      "name": "裂傷",
      "category": "offense",
      "valueType": "percent",
      "description": "5秒、毎秒 命中×25%（magic）",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow",
        "helmet",
        "chestplate",
        "leggings",
        "boots",
        "elytra"
      ],
      "weight": 10,
      "profile": "chance",
      "cap": 100
    },
    {
      "id": "bleed_duration",
      "name": "深傷",
      "category": "offense",
      "valueType": "seconds",
      "description": "裂傷の時間+",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow",
        "helmet",
        "chestplate",
        "leggings",
        "boots",
        "elytra"
      ],
      "weight": 10,
      "profile": "duration",
      "cap": null
    },
    {
      "id": "frost_chance",
      "name": "氷撃",
      "category": "offense",
      "valueType": "percent",
      "description": "鈍足III 5秒",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow",
        "helmet",
        "chestplate",
        "leggings",
        "boots",
        "elytra"
      ],
      "weight": 10,
      "profile": "chance",
      "cap": 100
    },
    {
      "id": "frost_duration",
      "name": "冷気持続",
      "category": "offense",
      "valueType": "seconds",
      "description": "氷撃の時間+",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow",
        "helmet",
        "chestplate",
        "leggings",
        "boots",
        "elytra"
      ],
      "weight": 10,
      "profile": "duration",
      "cap": null
    },
    {
      "id": "stun_chance",
      "name": "眩暈打ち",
      "category": "offense",
      "valueType": "percent",
      "description": "鈍足255＋弱体化255 2秒",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow",
        "helmet",
        "chestplate",
        "leggings",
        "boots",
        "elytra"
      ],
      "weight": 10,
      "profile": "chance",
      "cap": 100
    },
    {
      "id": "stun_duration",
      "name": "眩暈延長",
      "category": "offense",
      "valueType": "seconds",
      "description": "眩暈の時間+",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow",
        "helmet",
        "chestplate",
        "leggings",
        "boots",
        "elytra"
      ],
      "weight": 10,
      "profile": "duration",
      "cap": null
    },
    {
      "id": "weakness_chance",
      "name": "衰弱打ち",
      "category": "offense",
      "valueType": "percent",
      "description": "弱体化I 5秒",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow",
        "helmet",
        "chestplate",
        "leggings",
        "boots",
        "elytra"
      ],
      "weight": 10,
      "profile": "chance",
      "cap": 100
    },
    {
      "id": "weakness_duration",
      "name": "衰弱延長",
      "category": "offense",
      "valueType": "seconds",
      "description": "衰弱の時間+",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow",
        "helmet",
        "chestplate",
        "leggings",
        "boots",
        "elytra"
      ],
      "weight": 10,
      "profile": "duration",
      "cap": null
    },
    {
      "id": "knockback_chance",
      "name": "吹き飛ばし",
      "category": "offense",
      "valueType": "percent",
      "description": "追加ノックバック 0.8×(1+衝撃強化)",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow"
      ],
      "weight": 10,
      "profile": "chance",
      "cap": 100
    },
    {
      "id": "knockback_power",
      "name": "衝撃強化",
      "category": "offense",
      "valueType": "percent",
      "description": "吹き飛ばしの強さ+",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow"
      ],
      "weight": 10,
      "profile": "power",
      "cap": null
    },
    {
      "id": "lifesteal",
      "name": "吸命",
      "category": "offense",
      "valueType": "percent",
      "description": "会心処理直後のダメージに吸命率を掛けたHPを回復。剣・斧限定。特殊攻撃や敵防御より前の値。",
      "types": [
        "sword",
        "axe"
      ],
      "weight": 10,
      "profile": "sustain",
      "cap": 50
    },
    {
      "id": "thorns_chance",
      "name": "反撃",
      "category": "offense",
      "valueType": "percent",
      "description": "被弾時に反射",
      "types": [
        "helmet",
        "chestplate",
        "leggings",
        "boots",
        "shield",
        "totem",
        "elytra"
      ],
      "weight": 10,
      "profile": "chance",
      "cap": 100
    },
    {
      "id": "thorns_power",
      "name": "反撃強化",
      "category": "offense",
      "valueType": "percent",
      "description": "受けたダメージ×%を返す",
      "types": [
        "helmet",
        "chestplate",
        "leggings",
        "boots",
        "shield",
        "totem",
        "elytra"
      ],
      "weight": 10,
      "profile": "power",
      "cap": null
    },
    {
      "id": "armor_flat",
      "name": "堅牢",
      "category": "defense",
      "valueType": "flat",
      "description": "固定ダメージ軽減。敵の攻撃倍率・会心処理後、割合軽減前のダメージの50%まで。",
      "types": [
        "helmet",
        "chestplate",
        "leggings",
        "boots",
        "shield",
        "elytra"
      ],
      "weight": 10,
      "profile": "armorFlat",
      "cap": null
    },
    {
      "id": "armor_rate",
      "name": "守勢",
      "category": "defense",
      "valueType": "percent",
      "description": "割合軽減（合計80%まで）",
      "types": [
        "helmet",
        "chestplate",
        "leggings",
        "boots",
        "shield",
        "elytra"
      ],
      "weight": 10,
      "profile": "power",
      "cap": 80
    },
    {
      "id": "max_health",
      "name": "生命力",
      "category": "defense",
      "valueType": "flat",
      "description": "最大HPを加算。装備全体では+80まで。VITの増加分は別枠。",
      "types": [
        "helmet",
        "chestplate",
        "leggings",
        "boots",
        "shield",
        "totem",
        "elytra"
      ],
      "weight": 10,
      "profile": "healthFlat",
      "cap": 80
    },
    {
      "id": "block_chance",
      "name": "受け流し",
      "category": "defense",
      "valueType": "percent",
      "description": "盾装備中に完全無効",
      "types": [
        "shield"
      ],
      "weight": 10,
      "profile": "chance",
      "cap": 40
    },
    {
      "id": "critical_resist",
      "name": "会心耐性",
      "category": "defense",
      "valueType": "percent",
      "description": "敵会心率から減算",
      "types": [
        "helmet",
        "chestplate",
        "leggings",
        "boots"
      ],
      "weight": 10,
      "profile": "chance",
      "cap": 100
    },
    {
      "id": "critical_reduction",
      "name": "致命傷軽減",
      "category": "defense",
      "valueType": "percent",
      "description": "敵会心の追加分を割合減",
      "types": [
        "shield",
        "totem"
      ],
      "weight": 10,
      "profile": "power",
      "cap": 100
    },
    {
      "id": "bleed_resist",
      "name": "止血",
      "category": "defense",
      "valueType": "percent",
      "description": "敵の裂傷を確率で無効",
      "types": [
        "helmet",
        "chestplate"
      ],
      "weight": 10,
      "profile": "chance",
      "cap": 100
    },
    {
      "id": "frost_resist",
      "name": "耐寒",
      "category": "defense",
      "valueType": "percent",
      "description": "敵の氷撃を確率で無効",
      "types": [
        "helmet",
        "boots"
      ],
      "weight": 10,
      "profile": "chance",
      "cap": 100
    },
    {
      "id": "stun_resist",
      "name": "眩暈耐性",
      "category": "defense",
      "valueType": "percent",
      "description": "敵の眩暈を確率で無効",
      "types": [
        "helmet",
        "leggings"
      ],
      "weight": 10,
      "profile": "chance",
      "cap": 100
    },
    {
      "id": "weakness_resist",
      "name": "衰弱耐性",
      "category": "defense",
      "valueType": "percent",
      "description": "敵の衰弱を確率で無効",
      "types": [
        "helmet",
        "leggings"
      ],
      "weight": 10,
      "profile": "chance",
      "cap": 100
    },
    {
      "id": "thorns_resist",
      "name": "反撃耐性",
      "category": "defense",
      "valueType": "percent",
      "description": "敵の反撃を割合減",
      "types": [
        "helmet",
        "chestplate"
      ],
      "weight": 10,
      "profile": "chance",
      "cap": 100
    },
    {
      "id": "knockback_resist",
      "name": "不動",
      "category": "defense",
      "valueType": "percent",
      "description": "ノックバックだけ無効",
      "types": [
        "helmet",
        "chestplate",
        "leggings",
        "boots",
        "shield",
        "totem",
        "elytra"
      ],
      "weight": 10,
      "profile": "chance",
      "cap": 100
    },
    {
      "id": "fire_resistance",
      "name": "耐火",
      "category": "defense",
      "valueType": "level",
      "description": "装備中は耐火",
      "types": [
        "chestplate",
        "elytra"
      ],
      "weight": 10,
      "profile": "level",
      "cap": null
    },
    {
      "id": "shield_bash",
      "name": "盾撃",
      "category": "defense",
      "valueType": "none",
      "description": "受け流し成功時に攻撃者へ眩暈2秒",
      "types": [
        "shield"
      ],
      "weight": 10,
      "profile": null,
      "cap": null
    },
    {
      "id": "dodge_chance",
      "name": "身かわし",
      "category": "survival",
      "valueType": "percent",
      "description": "近接・飛び道具を完全無効",
      "types": [
        "boots",
        "totem"
      ],
      "weight": 10,
      "profile": "chance",
      "cap": 30
    },
    {
      "id": "fall_guard",
      "name": "軽やかな着地",
      "category": "survival",
      "valueType": "percent",
      "description": "落下ダメージ軽減",
      "types": [
        "boots",
        "elytra"
      ],
      "weight": 10,
      "profile": "chance",
      "cap": 100
    },
    {
      "id": "movement_speed",
      "name": "俊足",
      "category": "survival",
      "valueType": "percent",
      "description": "移動速度倍率",
      "types": [
        "leggings",
        "boots"
      ],
      "weight": 10,
      "profile": "power",
      "cap": null
    },
    {
      "id": "sneak_speed",
      "name": "忍び足",
      "category": "survival",
      "valueType": "percent",
      "description": "スニーク中の速度倍率",
      "types": [
        "leggings",
        "boots"
      ],
      "weight": 10,
      "profile": "power",
      "cap": null
    },
    {
      "id": "night_vision",
      "name": "夜目",
      "category": "survival",
      "valueType": "level",
      "description": "装備中は暗視",
      "types": [
        "helmet"
      ],
      "weight": 10,
      "profile": "level",
      "cap": null
    },
    {
      "id": "soulbound",
      "name": "魂縛",
      "category": "special",
      "valueType": "none",
      "description": "死亡時に保持",
      "types": [],
      "weight": null,
      "profile": null,
      "cap": null
    },
    {
      "id": "cleave_chance",
      "name": "薙ぎ払い",
      "category": "special",
      "valueType": "percent",
      "description": "近接時、半径4の最大3体へ 50/35/20%",
      "types": [
        "sword",
        "axe",
        "trident",
        "spear"
      ],
      "weight": 5,
      "profile": "chance",
      "cap": 100
    },
    {
      "id": "piercing_chance",
      "name": "貫通",
      "category": "special",
      "valueType": "percent",
      "description": "敵の独自防御・強固を無視",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow"
      ],
      "weight": 5,
      "profile": "chance",
      "cap": 100
    },
    {
      "id": "holy_arrow_chance",
      "name": "聖矢",
      "category": "special",
      "valueType": "percent",
      "description": "飛び道具 +50%",
      "types": [
        "bow",
        "crossbow"
      ],
      "weight": 5,
      "profile": "chance",
      "cap": 100
    },
    {
      "id": "blast_arrow_chance",
      "name": "爆裂矢",
      "category": "special",
      "valueType": "percent",
      "description": "主対象+40%、半径3の最大4体へ40%",
      "types": [
        "bow",
        "crossbow"
      ],
      "weight": 5,
      "profile": "chance",
      "cap": 100
    },
    {
      "id": "lightning_chance",
      "name": "雷撃",
      "category": "special",
      "valueType": "percent",
      "description": "+100%＋音",
      "types": [
        "trident",
        "spear",
        "bow",
        "crossbow"
      ],
      "weight": 5,
      "profile": "chance",
      "cap": 100
    },
    {
      "id": "bleed_combo",
      "name": "血響",
      "category": "special",
      "valueType": "percent",
      "description": "相手が独自の裂傷中なら、特殊攻撃直前のダメージ×能力値%を加算。",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow"
      ],
      "weight": 5,
      "profile": "power",
      "cap": null
    },
    {
      "id": "frost_combo",
      "name": "氷砕",
      "category": "special",
      "valueType": "percent",
      "description": "相手が移動速度低下中なら、特殊攻撃直前のダメージ×能力値%を加算。",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow"
      ],
      "weight": 5,
      "profile": "power",
      "cap": null
    },
    {
      "id": "stun_combo",
      "name": "震撃",
      "category": "special",
      "valueType": "percent",
      "description": "相手が独自の眩暈中なら、特殊攻撃直前のダメージ×能力値%を加算。",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow"
      ],
      "weight": 5,
      "profile": "power",
      "cap": null
    },
    {
      "id": "weakness_combo",
      "name": "心砕",
      "category": "special",
      "valueType": "percent",
      "description": "相手が弱体化中なら、特殊攻撃直前のダメージ×能力値%を加算。",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow"
      ],
      "weight": 5,
      "profile": "power",
      "cap": null
    },
    {
      "id": "affliction_combo",
      "name": "連鎖破砕",
      "category": "special",
      "valueType": "none",
      "description": "有害効果が2種類以上ある相手へ、1種類につき特殊攻撃直前のダメージの50%を追加。裂傷・独自の眩暈も別々に数える。",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow"
      ],
      "weight": 5,
      "profile": null,
      "cap": null
    },
    {
      "id": "frost_aura",
      "name": "寒気",
      "category": "special",
      "valueType": "level",
      "description": "3秒ごと半径5の最大8体へ鈍足III 3秒",
      "types": [
        "helmet",
        "chestplate",
        "leggings",
        "boots",
        "shield",
        "totem"
      ],
      "weight": 5,
      "profile": "level",
      "cap": null
    },
    {
      "id": "survivor",
      "name": "生存本能",
      "category": "special",
      "valueType": "percent",
      "description": "非戦闘10秒後、2秒ごとに最大HP×%",
      "types": [
        "chestplate",
        "elytra"
      ],
      "weight": 5,
      "profile": "sustain",
      "cap": 20
    },
    {
      "id": "jump_boost",
      "name": "跳躍",
      "category": "special",
      "valueType": "level",
      "description": "装備中は跳躍",
      "types": [
        "leggings"
      ],
      "weight": 5,
      "profile": "level",
      "cap": null
    },
    {
      "id": "curse_dull_blade",
      "name": "鈍刃",
      "category": "curse",
      "valueType": "percent",
      "description": "与ダメ−%（上限90）",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow"
      ],
      "weight": 10,
      "profile": "cursePenalty",
      "cap": 90
    },
    {
      "id": "curse_misfire",
      "name": "気まぐれ",
      "category": "curse",
      "valueType": "percent",
      "description": "攻撃が不発",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow"
      ],
      "weight": 10,
      "profile": "curseChance",
      "cap": 50
    },
    {
      "id": "curse_gravity",
      "name": "重力の気まぐれ",
      "category": "curse",
      "valueType": "percent",
      "description": "ジャンプ時に下向きの力",
      "types": [
        "boots"
      ],
      "weight": 10,
      "profile": "curseChance",
      "cap": 100
    },
    {
      "id": "curse_vertigo",
      "name": "足元の迷い",
      "category": "curse",
      "valueType": "percent",
      "description": "移動中に鈍足I",
      "types": [
        "boots"
      ],
      "weight": 10,
      "profile": "curseChance",
      "cap": 100
    },
    {
      "id": "curse_whisper",
      "name": "ささやく装備",
      "category": "curse",
      "valueType": "none",
      "description": "30秒ごとにメッセージ",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow",
        "helmet",
        "chestplate",
        "leggings",
        "boots",
        "shield",
        "totem",
        "elytra"
      ],
      "weight": 10,
      "profile": null,
      "cap": null
    },
    {
      "id": "curse_heavy_step",
      "name": "鉛の歩み",
      "category": "curse",
      "valueType": "percent",
      "description": "移動中に鈍足IV",
      "types": [
        "boots"
      ],
      "weight": 10,
      "profile": "curseChance",
      "cap": 100
    },
    {
      "id": "curse_drunken",
      "name": "酩酊",
      "category": "curse",
      "valueType": "percent",
      "description": "攻撃・被弾時に吐き気",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow",
        "helmet",
        "chestplate",
        "leggings",
        "boots",
        "shield",
        "totem",
        "elytra"
      ],
      "weight": 10,
      "profile": "curseChance",
      "cap": 100
    },
    {
      "id": "curse_outburst",
      "name": "癇癪",
      "category": "curse",
      "valueType": "percent",
      "description": "会心・特殊攻撃後、斧の心得・必殺の薬・敵防御より前の攻撃値で自傷。半径4の最大6体へ、その50%のダメージ。",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow"
      ],
      "weight": 10,
      "profile": "curseChance",
      "cap": 100
    },
    {
      "id": "curse_breeze",
      "name": "風の逆襲",
      "category": "curse",
      "valueType": "percent",
      "description": "攻撃時にブリーズ召喚",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow",
        "helmet",
        "chestplate",
        "leggings",
        "boots",
        "shield",
        "totem",
        "elytra"
      ],
      "weight": 10,
      "profile": "curseChance",
      "cap": 100
    },
    {
      "id": "curse_dinner_bell",
      "name": "宴の鐘",
      "category": "curse",
      "valueType": "percent",
      "description": "60秒ごとに敵3体",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow",
        "helmet",
        "chestplate",
        "leggings",
        "boots",
        "shield",
        "totem",
        "elytra"
      ],
      "weight": 10,
      "profile": "curseChance",
      "cap": 100
    },
    {
      "id": "curse_phantom_debt",
      "name": "夜空の取り立て",
      "category": "curse",
      "valueType": "percent",
      "description": "夜の屋外でファントム",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow",
        "helmet",
        "chestplate",
        "leggings",
        "boots",
        "shield",
        "totem",
        "elytra"
      ],
      "weight": 10,
      "profile": "curseChance",
      "cap": 100
    },
    {
      "id": "curse_offspring",
      "name": "遺児の復讐",
      "category": "curse",
      "valueType": "percent",
      "description": "撃破時に子供を召喚",
      "types": [
        "sword",
        "axe",
        "mace",
        "trident",
        "spear",
        "bow",
        "crossbow"
      ],
      "weight": 10,
      "profile": "curseChance",
      "cap": 100
    }
  ],
  "gearTypes": {
    "sword": "剣",
    "axe": "斧",
    "mace": "メイス",
    "trident": "トライデント",
    "spear": "槍",
    "bow": "弓",
    "crossbow": "クロスボウ",
    "helmet": "兜",
    "chestplate": "鎧",
    "leggings": "脚",
    "boots": "靴",
    "shield": "盾",
    "totem": "トーテム",
    "elytra": "エリトラ"
  },
  "gearPools": {
    "sword": {
      "normal": [
        {
          "id": "attack_flat",
          "profile": "attackFlat",
          "weight": 10
        },
        {
          "id": "attack_rate",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "critical_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "critical_power",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "bleed_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "bleed_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "frost_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "frost_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "stun_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "stun_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "weakness_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "weakness_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "knockback_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "knockback_power",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "piercing_chance",
          "profile": "chance",
          "weight": 5
        },
        {
          "id": "bleed_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "frost_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "stun_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "weakness_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "affliction_combo",
          "profile": "chance",
          "weight": 5
        },
        {
          "id": "lifesteal",
          "profile": "sustain",
          "weight": 10
        },
        {
          "id": "cleave_chance",
          "profile": "chance",
          "weight": 5
        }
      ],
      "curses": [
        {
          "id": "curse_dull_blade",
          "profile": "cursePenalty",
          "weight": 10
        },
        {
          "id": "curse_misfire",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_outburst",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_offspring",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_whisper",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_dinner_bell",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_breeze",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_phantom_debt",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_drunken",
          "profile": "curseChance",
          "weight": 10
        }
      ]
    },
    "axe": {
      "normal": [
        {
          "id": "attack_flat",
          "profile": "attackFlat",
          "weight": 10
        },
        {
          "id": "attack_rate",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "critical_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "critical_power",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "bleed_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "bleed_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "frost_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "frost_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "stun_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "stun_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "weakness_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "weakness_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "knockback_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "knockback_power",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "piercing_chance",
          "profile": "chance",
          "weight": 5
        },
        {
          "id": "bleed_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "frost_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "stun_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "weakness_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "affliction_combo",
          "profile": "chance",
          "weight": 5
        },
        {
          "id": "lifesteal",
          "profile": "sustain",
          "weight": 10
        },
        {
          "id": "cleave_chance",
          "profile": "chance",
          "weight": 5
        }
      ],
      "curses": [
        {
          "id": "curse_dull_blade",
          "profile": "cursePenalty",
          "weight": 10
        },
        {
          "id": "curse_misfire",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_outburst",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_offspring",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_whisper",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_dinner_bell",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_breeze",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_phantom_debt",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_drunken",
          "profile": "curseChance",
          "weight": 10
        }
      ]
    },
    "mace": {
      "normal": [
        {
          "id": "attack_flat",
          "profile": "attackFlat",
          "weight": 10
        },
        {
          "id": "attack_rate",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "critical_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "critical_power",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "bleed_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "bleed_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "frost_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "frost_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "stun_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "stun_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "weakness_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "weakness_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "knockback_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "knockback_power",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "piercing_chance",
          "profile": "chance",
          "weight": 5
        },
        {
          "id": "bleed_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "frost_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "stun_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "weakness_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "affliction_combo",
          "profile": "chance",
          "weight": 5
        }
      ],
      "curses": [
        {
          "id": "curse_dull_blade",
          "profile": "cursePenalty",
          "weight": 10
        },
        {
          "id": "curse_misfire",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_outburst",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_offspring",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_whisper",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_dinner_bell",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_breeze",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_phantom_debt",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_drunken",
          "profile": "curseChance",
          "weight": 10
        }
      ]
    },
    "trident": {
      "normal": [
        {
          "id": "attack_flat",
          "profile": "attackFlat",
          "weight": 10
        },
        {
          "id": "attack_rate",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "critical_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "critical_power",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "bleed_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "bleed_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "frost_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "frost_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "stun_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "stun_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "weakness_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "weakness_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "knockback_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "knockback_power",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "piercing_chance",
          "profile": "chance",
          "weight": 5
        },
        {
          "id": "bleed_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "frost_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "stun_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "weakness_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "affliction_combo",
          "profile": "chance",
          "weight": 5
        },
        {
          "id": "cleave_chance",
          "profile": "chance",
          "weight": 5
        },
        {
          "id": "lightning_chance",
          "profile": "chance",
          "weight": 5
        }
      ],
      "curses": [
        {
          "id": "curse_dull_blade",
          "profile": "cursePenalty",
          "weight": 10
        },
        {
          "id": "curse_misfire",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_outburst",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_offspring",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_whisper",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_dinner_bell",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_breeze",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_phantom_debt",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_drunken",
          "profile": "curseChance",
          "weight": 10
        }
      ]
    },
    "spear": {
      "normal": [
        {
          "id": "attack_flat",
          "profile": "attackFlat",
          "weight": 10
        },
        {
          "id": "attack_rate",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "critical_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "critical_power",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "bleed_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "bleed_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "frost_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "frost_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "stun_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "stun_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "weakness_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "weakness_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "knockback_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "knockback_power",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "piercing_chance",
          "profile": "chance",
          "weight": 5
        },
        {
          "id": "bleed_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "frost_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "stun_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "weakness_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "affliction_combo",
          "profile": "chance",
          "weight": 5
        },
        {
          "id": "cleave_chance",
          "profile": "chance",
          "weight": 5
        },
        {
          "id": "lightning_chance",
          "profile": "chance",
          "weight": 5
        }
      ],
      "curses": [
        {
          "id": "curse_dull_blade",
          "profile": "cursePenalty",
          "weight": 10
        },
        {
          "id": "curse_misfire",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_outburst",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_offspring",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_whisper",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_dinner_bell",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_breeze",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_phantom_debt",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_drunken",
          "profile": "curseChance",
          "weight": 10
        }
      ]
    },
    "bow": {
      "normal": [
        {
          "id": "attack_flat",
          "profile": "attackFlat",
          "weight": 10
        },
        {
          "id": "attack_rate",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "critical_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "critical_power",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "bleed_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "bleed_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "frost_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "frost_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "stun_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "stun_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "weakness_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "weakness_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "knockback_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "knockback_power",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "piercing_chance",
          "profile": "chance",
          "weight": 5
        },
        {
          "id": "bleed_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "frost_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "stun_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "weakness_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "affliction_combo",
          "profile": "chance",
          "weight": 5
        },
        {
          "id": "holy_arrow_chance",
          "profile": "chance",
          "weight": 5
        },
        {
          "id": "blast_arrow_chance",
          "profile": "chance",
          "weight": 5
        },
        {
          "id": "lightning_chance",
          "profile": "chance",
          "weight": 5
        }
      ],
      "curses": [
        {
          "id": "curse_dull_blade",
          "profile": "cursePenalty",
          "weight": 10
        },
        {
          "id": "curse_misfire",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_outburst",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_offspring",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_whisper",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_dinner_bell",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_breeze",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_phantom_debt",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_drunken",
          "profile": "curseChance",
          "weight": 10
        }
      ]
    },
    "crossbow": {
      "normal": [
        {
          "id": "attack_flat",
          "profile": "attackFlat",
          "weight": 10
        },
        {
          "id": "attack_rate",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "critical_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "critical_power",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "bleed_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "bleed_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "frost_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "frost_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "stun_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "stun_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "weakness_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "weakness_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "knockback_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "knockback_power",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "piercing_chance",
          "profile": "chance",
          "weight": 5
        },
        {
          "id": "bleed_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "frost_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "stun_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "weakness_combo",
          "profile": "power",
          "weight": 5
        },
        {
          "id": "affliction_combo",
          "profile": "chance",
          "weight": 5
        },
        {
          "id": "holy_arrow_chance",
          "profile": "chance",
          "weight": 5
        },
        {
          "id": "blast_arrow_chance",
          "profile": "chance",
          "weight": 5
        },
        {
          "id": "lightning_chance",
          "profile": "chance",
          "weight": 5
        }
      ],
      "curses": [
        {
          "id": "curse_dull_blade",
          "profile": "cursePenalty",
          "weight": 10
        },
        {
          "id": "curse_misfire",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_outburst",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_offspring",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_whisper",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_dinner_bell",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_breeze",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_phantom_debt",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_drunken",
          "profile": "curseChance",
          "weight": 10
        }
      ]
    },
    "helmet": {
      "normal": [
        {
          "id": "armor_flat",
          "profile": "armorFlat",
          "weight": 10
        },
        {
          "id": "armor_rate",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "max_health",
          "profile": "healthFlat",
          "weight": 10
        },
        {
          "id": "frost_aura",
          "profile": "level",
          "weight": 5
        },
        {
          "id": "knockback_resist",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "thorns_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "thorns_power",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "critical_resist",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "critical_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "critical_power",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "bleed_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "bleed_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "frost_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "frost_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "stun_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "stun_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "weakness_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "weakness_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "bleed_resist",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "frost_resist",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "stun_resist",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "weakness_resist",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "thorns_resist",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "night_vision",
          "profile": "level",
          "weight": 10
        }
      ],
      "curses": [
        {
          "id": "curse_whisper",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_dinner_bell",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_breeze",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_phantom_debt",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_drunken",
          "profile": "curseChance",
          "weight": 10
        }
      ]
    },
    "chestplate": {
      "normal": [
        {
          "id": "armor_flat",
          "profile": "armorFlat",
          "weight": 10
        },
        {
          "id": "armor_rate",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "max_health",
          "profile": "healthFlat",
          "weight": 10
        },
        {
          "id": "frost_aura",
          "profile": "level",
          "weight": 5
        },
        {
          "id": "knockback_resist",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "thorns_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "thorns_power",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "critical_resist",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "critical_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "critical_power",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "bleed_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "bleed_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "frost_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "frost_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "stun_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "stun_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "weakness_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "weakness_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "bleed_resist",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "thorns_resist",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "fire_resistance",
          "profile": "level",
          "weight": 10
        },
        {
          "id": "survivor",
          "profile": "sustain",
          "weight": 5
        }
      ],
      "curses": [
        {
          "id": "curse_whisper",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_dinner_bell",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_breeze",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_phantom_debt",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_drunken",
          "profile": "curseChance",
          "weight": 10
        }
      ]
    },
    "leggings": {
      "normal": [
        {
          "id": "armor_flat",
          "profile": "armorFlat",
          "weight": 10
        },
        {
          "id": "armor_rate",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "max_health",
          "profile": "healthFlat",
          "weight": 10
        },
        {
          "id": "frost_aura",
          "profile": "level",
          "weight": 5
        },
        {
          "id": "knockback_resist",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "thorns_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "thorns_power",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "critical_resist",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "critical_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "critical_power",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "bleed_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "bleed_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "frost_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "frost_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "stun_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "stun_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "weakness_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "weakness_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "stun_resist",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "weakness_resist",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "movement_speed",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "sneak_speed",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "jump_boost",
          "profile": "level",
          "weight": 5
        }
      ],
      "curses": [
        {
          "id": "curse_whisper",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_dinner_bell",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_breeze",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_phantom_debt",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_drunken",
          "profile": "curseChance",
          "weight": 10
        }
      ]
    },
    "boots": {
      "normal": [
        {
          "id": "armor_flat",
          "profile": "armorFlat",
          "weight": 10
        },
        {
          "id": "armor_rate",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "max_health",
          "profile": "healthFlat",
          "weight": 10
        },
        {
          "id": "frost_aura",
          "profile": "level",
          "weight": 5
        },
        {
          "id": "knockback_resist",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "thorns_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "thorns_power",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "critical_resist",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "critical_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "critical_power",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "bleed_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "bleed_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "frost_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "frost_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "stun_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "stun_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "weakness_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "weakness_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "frost_resist",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "movement_speed",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "sneak_speed",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "dodge_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "fall_guard",
          "profile": "chance",
          "weight": 10
        }
      ],
      "curses": [
        {
          "id": "curse_whisper",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_dinner_bell",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_breeze",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_phantom_debt",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_drunken",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_vertigo",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_heavy_step",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_gravity",
          "profile": "curseChance",
          "weight": 10
        }
      ]
    },
    "shield": {
      "normal": [
        {
          "id": "armor_flat",
          "profile": "armorFlat",
          "weight": 10
        },
        {
          "id": "armor_rate",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "max_health",
          "profile": "healthFlat",
          "weight": 10
        },
        {
          "id": "frost_aura",
          "profile": "level",
          "weight": 5
        },
        {
          "id": "knockback_resist",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "thorns_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "thorns_power",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "block_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "critical_reduction",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "shield_bash",
          "profile": "chance",
          "weight": 10
        }
      ],
      "curses": [
        {
          "id": "curse_whisper",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_dinner_bell",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_breeze",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_phantom_debt",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_drunken",
          "profile": "curseChance",
          "weight": 10
        }
      ]
    },
    "totem": {
      "normal": [
        {
          "id": "max_health",
          "profile": "healthFlat",
          "weight": 10
        },
        {
          "id": "frost_aura",
          "profile": "level",
          "weight": 5
        },
        {
          "id": "knockback_resist",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "thorns_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "thorns_power",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "critical_reduction",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "dodge_chance",
          "profile": "chance",
          "weight": 10
        }
      ],
      "curses": [
        {
          "id": "curse_whisper",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_dinner_bell",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_breeze",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_phantom_debt",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_drunken",
          "profile": "curseChance",
          "weight": 10
        }
      ]
    },
    "elytra": {
      "normal": [
        {
          "id": "armor_flat",
          "profile": "armorFlat",
          "weight": 10
        },
        {
          "id": "armor_rate",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "max_health",
          "profile": "healthFlat",
          "weight": 10
        },
        {
          "id": "knockback_resist",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "thorns_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "thorns_power",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "fire_resistance",
          "profile": "level",
          "weight": 10
        },
        {
          "id": "survivor",
          "profile": "sustain",
          "weight": 5
        },
        {
          "id": "fall_guard",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "critical_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "critical_power",
          "profile": "power",
          "weight": 10
        },
        {
          "id": "bleed_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "bleed_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "frost_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "frost_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "stun_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "stun_duration",
          "profile": "duration",
          "weight": 10
        },
        {
          "id": "weakness_chance",
          "profile": "chance",
          "weight": 10
        },
        {
          "id": "weakness_duration",
          "profile": "duration",
          "weight": 10
        }
      ],
      "curses": [
        {
          "id": "curse_whisper",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_dinner_bell",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_breeze",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_phantom_debt",
          "profile": "curseChance",
          "weight": 10
        },
        {
          "id": "curse_drunken",
          "profile": "curseChance",
          "weight": 10
        }
      ]
    }
  },
  "profiles": {
    "chance": [
      [
        2,
        4
      ],
      [
        4,
        7
      ],
      [
        7,
        10
      ],
      [
        10,
        14
      ],
      [
        14,
        18
      ],
      [
        18,
        22
      ],
      [
        22,
        26
      ]
    ],
    "power": [
      [
        3,
        5
      ],
      [
        5,
        8
      ],
      [
        8,
        12
      ],
      [
        12,
        17
      ],
      [
        17,
        24
      ],
      [
        24,
        30
      ],
      [
        30,
        36
      ]
    ],
    "attackFlat": [
      [
        1,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        7
      ],
      [
        7,
        9
      ]
    ],
    "armorFlat": [
      [
        1,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        7
      ],
      [
        7,
        9
      ]
    ],
    "healthFlat": [
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        7
      ],
      [
        7,
        9
      ],
      [
        9,
        12
      ]
    ],
    "duration": [
      [
        1,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        6
      ],
      [
        6,
        8
      ]
    ],
    "sustain": [
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        6
      ],
      [
        6,
        8
      ],
      [
        8,
        10
      ],
      [
        10,
        12
      ]
    ],
    "level": [
      [
        1,
        1
      ],
      [
        1,
        1
      ],
      [
        1,
        1
      ],
      [
        1,
        1
      ],
      [
        1,
        1
      ],
      [
        2,
        2
      ],
      [
        2,
        2
      ]
    ],
    "curseChance": [
      [
        4,
        6
      ],
      [
        6,
        9
      ],
      [
        9,
        12
      ],
      [
        12,
        16
      ],
      [
        16,
        20
      ],
      [
        20,
        24
      ],
      [
        24,
        28
      ]
    ],
    "cursePenalty": [
      [
        10,
        15
      ],
      [
        15,
        20
      ],
      [
        20,
        25
      ],
      [
        25,
        32
      ],
      [
        32,
        40
      ],
      [
        40,
        48
      ],
      [
        48,
        55
      ]
    ]
  },
  "rarities": [
    {
      "id": "common",
      "weight": 50,
      "slots": 1,
      "name": "コモン"
    },
    {
      "id": "uncommon",
      "weight": 28,
      "slots": 2,
      "name": "アンコモン"
    },
    {
      "id": "rare",
      "weight": 14,
      "slots": 3,
      "name": "レア"
    },
    {
      "id": "epic",
      "weight": 5.9,
      "slots": 4,
      "name": "エピック"
    },
    {
      "id": "legendary",
      "weight": 1.9,
      "slots": 5,
      "name": "レジェンド"
    },
    {
      "id": "mythic",
      "weight": 0.2,
      "slots": 6,
      "name": "ミシック"
    },
    {
      "id": "unique",
      "weight": 0,
      "slots": 7,
      "name": "ユニーク"
    }
  ],
  "sources": [
    {
      "name": "RPGsystem_1.2.0_仕様とデバッグ項目.md",
      "sha256": "d41acf340484afaa375930c3c3754f6294e056b12f669c0b96f34ac3fe3cdc60",
      "heading": "RPGsystem 1.2.x 仕様まとめとデバッグ項目\r"
    },
    {
      "name": "RPGsystem_1.3.0_生産スキル仕様とデバッグ項目.md",
      "sha256": "3e61b80262a896018419ce6b3200524275cfbbdcb1195e8ca115bb214591a7f6",
      "heading": "RPGsystem 1.3.0 生産スキル 仕様とデバッグ項目\r"
    },
    {
      "name": "RPGsystem_UI調査_DDUI.md",
      "sha256": "caf176ec3d3c1d1bb15dad4b1236090db7b5645807647d44e79b2823dadf866d",
      "heading": "Bedrock 最新版（1.26.50 / 1.26.60 preview）で使える UI 機能の調査"
    },
    {
      "name": "RPGsystem_エンチャントスキル設計案.md",
      "sha256": "7c4244b2b96800f3b4dea66e4b187d70bd5b25ff4cf26c5afb2b1413f39fad6f",
      "heading": "エンチャントスキル（Lv10〜50）設計案 — 技術的可否と実装方式\r"
    },
    {
      "name": "RPGsystem_ステ振り・生産設計案.md",
      "sha256": "bda0355c0d4cb17c4e76276089a833fd51fd0e07094e8c18efadde8ade8c8500",
      "heading": "RPGsystem ステ振り・生産ポイント 設計案"
    },
    {
      "name": "RPGsystem_ポーションスキル設計案.md",
      "sha256": "8005af05cc7497ee54bbe470a686c090a72305a41ca76b2a80f151832069d60c",
      "heading": "ポーション作成スキル（Lv10〜50）設計案 — 技術的可否と実装方式\r"
    },
    {
      "name": "RPGsystem_仕様書.md",
      "sha256": "f42f288f476cf4c479dc86c3421b5a17864fe37fdb3719db770f0e3716e25b8a",
      "heading": "RPGsystem 仕様書・開発引き継ぎ\r"
    },
    {
      "name": "RPGsystem_改修設計案.md",
      "sha256": "a59300727e0dfec599b6a23c534f71598b1d48bfd076f43cf0baf3e582e4787f",
      "heading": "RPGsystem 改修設計案（敵レア度・購入制v2・ポテンシャル・刻印）"
    },
    {
      "name": "RPGsystem_料理システム設計案.md",
      "sha256": "b56cfed2c325e4b7532f83539df01c8ed59841d35d8401081ea5f998989bfcae",
      "heading": "料理システム 設計案 — 食材一覧・効果プール・調理 UI\r"
    },
    {
      "name": "RPGsystem_料理仕様一覧.md",
      "sha256": "7ecb2008b64736feb7ce66a56ca59732e147dcca59f4c6cd1bce660f9da343bc",
      "heading": "RPGsystem 料理システム 詳細仕様一覧\r"
    },
    {
      "name": "RPGsystem_現行仕様リスト.md",
      "sha256": "ca6e7a0e8d8647f09cbde71409ccb37627f3ee25d905a2cd2fc640cf2a35e065",
      "heading": "RPGsystem 現行仕様リスト（1.0.1 時点・改修検討用）\r"
    },
    {
      "name": "RPGsystem_生産スキル一覧.md",
      "sha256": "108a5409045ef3c291ad3a8f1f3db3e854f77a5ed806c4694c831bd009e07a98",
      "heading": "RPGsystem 生産スキル 詳細仕様一覧\r"
    },
    {
      "name": "RPGsystem_表示ルール.md",
      "sha256": "476da5d2881d1928c796483aa1bbfc17699f45e17d953d989a1ce9cb376e0a48",
      "heading": "RPGsystem 表示ルール（1.16.1）\r"
    },
    {
      "name": "RPGsystem_表示文言と戦闘計算まとめ.md",
      "sha256": "6630717022c3351b77c22b5d8a0c5325f4de50e3b05d7564bc8566a255ef341a",
      "heading": "RPGsystem 表示文言と戦闘計算のまとめ（一新のための現状整理）\r"
    },
    {
      "name": "RPGsystem_装備製作スキル設計案.md",
      "sha256": "b2350d3affdebbffc1465d03d63d0a984e7de89921509a6099f2e419a86a85aa",
      "heading": "装備製作スキル（Lv10〜50）設計案 — 技術的可否と実装方式"
    },
    {
      "name": "RPGsystem_農業スキル設計案.md",
      "sha256": "71d1d757d98bd5837dd997df25ded269e719fbd3bebbd72ca458a8f561abade8",
      "heading": "農業スキル（Lv10〜50）設計案 — 技術的可否と実装方式\r"
    },
    {
      "name": "RPGsystem_釣り畜産料理設計案.md",
      "sha256": "0993f1405ce77e27a8678fa2c5c1385d8d4ca47659d03ce4d55c323d8c630710",
      "heading": "釣り・畜産スキル（Lv10〜50）と料理システム 設計案 — 技術的可否と実装方式\r"
    }
  ],
  "skillValues": {
    "leafSaplingChance": 5,
    "leafAppleChance": 0.5,
    "charcoalChance": 5,
    "axeDamageMultiplier": 1.1,
    "logXpChance": 50,
    "goldenAppleChance": 0.1,
    "enchantedGoldenAppleChance": 0.01,
    "saturationChance": 0.2,
    "saturationTicks": 72000,
    "nuggetChance": 5,
    "pickSpeedMultiplier": 1.2,
    "pickJumpAmplifier": 2,
    "oreGemChance": 1,
    "oreSenseRadius": 30,
    "oreSenseVertical": 30,
    "oreSenseCooldownTicks": 1200,
    "oreSenseMaxMarkers": 60,
    "oreSenseMarkersPerTick": 10,
    "fellMaxBlocks": 96,
    "fellMaxDepth": 24,
    "shearMaxBlocks": 256,
    "shearMaxDepth": 12,
    "shearDurabilityDivisor": 4,
    "veinMaxBlocks": 64,
    "veinMaxDepth": 16,
    "bulkPerTick": 8,
    "bulkPullRadius": 24,
    "effectTicks": 60,
    "effectIntervalTicks": 20,
    "craftedWeaponAttack": 1,
    "craftedArmorMultiplier": 0.9,
    "durabilitySaverChance": 30,
    "potentialFloor": 10,
    "valueRarityOffset": 1,
    "socketLuckChance": 20,
    "critPerPiece": 2.5,
    "enchantWeaponAttack": 1,
    "enchantDurabilityBonus": 50,
    "magnetRadius": 10,
    "magnetIntervalTicks": 10,
    "levelGuardLevel": 20,
    "levelGuardMultiplier": 0.9,
    "levelGuardAttack": 1,
    "fullRefundChance": 10,
    "levelCritLevel": 30,
    "levelCritBonus": 10,
    "transmuteLevel": 10,
    "transmuteSeconds": 10,
    "transmuteBooks": [
      [
        "protection",
        3
      ],
      [
        "sharpness",
        3
      ],
      [
        "mending",
        1
      ]
    ],
    "ascendBaseChance": 1,
    "ascendFullLevels": 50,
    "channelMoveLimit": 1.5,
    "tillRadius": 1,
    "hoeSpeedMultiplier": 1.3,
    "walkHarvestIntervalTicks": 5,
    "bulkHarvestRadius": 1,
    "bluePotatoTicks": 400,
    "bluePotatoEffects": [
      [
        "speed",
        1
      ],
      [
        "jump_boost",
        1
      ],
      [
        "strength",
        0
      ],
      [
        "resistance",
        0
      ]
    ],
    "instantGrowChance": 20,
    "foodQualities": [
      {
        "id": "supreme",
        "chance": 1,
        "label": "§6至高"
      },
      {
        "id": "mutant",
        "chance": 5,
        "label": "§d突然変異"
      },
      {
        "id": "nutritious",
        "chance": 20,
        "label": "§a栄養満点"
      }
    ],
    "qualitySkills": {
      "farming": {
        "supreme": "quality_supreme",
        "mutant": "quality_mutant",
        "nutritious": "quality_nutritious"
      },
      "fishing": {
        "supreme": "fish_supreme",
        "mutant": "fish_mutant",
        "nutritious": "fish_nutritious"
      },
      "ranching": {
        "supreme": "meat_supreme",
        "mutant": "meat_mutant",
        "nutritious": "meat_nutritious"
      }
    },
    "doubleFishChance": 30,
    "hookStunTicks": 40,
    "pufferRainChance": 20,
    "rareCatchChance": 2,
    "rareCatches": [
      [
        "minecraft:netherite_ingot",
        1
      ],
      [
        "minecraft:diamond",
        4
      ],
      [
        "minecraft:emerald",
        4
      ],
      [
        "minecraft:gold_ingot",
        6
      ],
      [
        "minecraft:iron_ingot",
        8
      ],
      [
        "minecraft:enchanted_golden_apple",
        1
      ]
    ],
    "gemCatchChance": 1,
    "orbCatchChance": 0.5,
    "orbCatchExcluded": [
      "rpg:orb_socket",
      "rpg:orb_ascend_unique",
      "rpg:essence_prime"
    ],
    "herdRadius": 10,
    "milkHeal": 10,
    "woolRegrowChance": 30,
    "goldenEggChance": 1,
    "xpBoostMs": 600000,
    "xpBoostMultiplier": 2,
    "twinsChance": 20,
    "eggIntervalMs": 300000,
    "eggCheckTicks": 100,
    "slaughterRadius": 10,
    "slaughterCollectRadius": 12,
    "slaughterCooldownTicks": 1200,
    "extend16Ticks": 19200,
    "level3Amplifier": 2,
    "level3FallbackTicks": 1800,
    "bottleReturnChance": 30,
    "dodgeBrewChance": 20,
    "doubleBrewChance": 10,
    "doubleBrewMultiplier": 2,
    "lastlifeChance": 5,
    "lastlifeMs": 600000,
    "lastlifeCooldownMs": 1800000,
    "lastlifeResistanceTicks": 60,
    "lastlifeResistanceAmplifier": 254,
    "dragonBreathRadius": 5,
    "dragonBreathTicks": 200,
    "dragonBreathKnockback": 3,
    "dragonBreathLift": 0.5,
    "dragonBreathCooldownTicks": 100,
    "throwHasteTicks": 200,
    "throwHasteAmplifier": 4,
    "heartyMultiplier": 1.2,
    "saveIngredientChance": 10,
    "simmerMinKinds": 4,
    "simmerTimeMultiplier": 1.2,
    "tamingAlloc": {
      "vit": 5,
      "spi": 5
    },
    "fullCourseSlots": 3,
    "recipeUses": 5,
    "recipeQualityMin": 10,
    "recipePenaltyPerEffect": 4,
    "recipePenaltyPerIngredient": 2,
    "recipePenaltyQuality": {
      "nutritious": 3,
      "mutant": 6,
      "supreme": 10
    },
    "recipePenaltyGeneration": 0.5,
    "grandDishMinEffects": 5,
    "grandDishTimeMultiplier": 1.25,
    "grandDishNutrition": 2,
    "tripleBoilDraws": 3,
    "supremePlateChancePer": 2,
    "miraclePlateChance": 10
  }
};
