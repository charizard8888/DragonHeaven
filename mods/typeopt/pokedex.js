'use strict';

exports.BattlePokedex = {
    lycanroc: {
        inherit: true,
        types: ["Rock", "Normal"],
        baseStats: {
            hp: 75,
            atk: 120,
            def: 60,
            spa: 55,
            spd: 60,
            spe: 117
        },
    },
    emboar: {
        inherit: true,
        types: ["Rock", "Fire"],
        baseStats: {
            hp: 95,
            atk: 138,
            def: 65,
            spa: 110,
            spd: 65,
            spe: 97
        },
        abilities: {
            0: "Reckless",
            1: "Dazzling",
            H: "Magic Guard"
        },
    },
    bastiodon: {
        inherit: true,
        types: ["Rock"],
        baseStats: {
            hp: 60,
            atk: 50,
            def: 120,
            spa: 135,
            spd: 100,
            spe: 105
        },
        abilities: {
            0: "Sand Force",
            1: "Sand Rush",
            H: "Sand Stream"
        },
    },
    glaceon: {
        inherit: true,
        types: ["Ice"],
        baseStats: {
            hp: 65,
            atk: 95,
            def: 65,
            spa: 110,
            spd: 60,
            spe: 130
        },
        abilities: {
            0: "Adaptability",
            H: "Magic Guard"
        },
    },
    glalie: {
        inherit: true,
        types: ["Ice", "Rock"],
        baseStats: {
            hp: 60,
            atk: 160,
            def: 60,
            spa: 70,
            spd: 60,
            spe: 160
        },
        abilities: {
            0: "Sturdy",
            1: "Adaptability",
            H: "Magic Guard"
        },
    },
    froslass: {
        inherit: true,
        types: ["Ice", "Poison"],
        baseStats: {
            hp: 66,
            atk: 71,
            def: 66,
            spa: 142,
            spd: 106,
            spe: 116
        },
        abilities: {
            0: "Corrosion",
            1: "Snow Cloak",
            H: "Snow Warning"
        },
    },
    unfezant: {
        inherit: true,
        types: ["Flying"],
        baseStats: {
            hp: 80,
            atk: 115,
            def: 80,
            spa: 82,
            spd: 80,
            spe: 133
        },
        abilities: {
            0: "Big Pecks",
            1: "Technician",
            H: "Aerilate"
        },
    },
    cryogonal: {
        inherit: true,
        types: ["Ice", "Flying"],
        baseStats: {
            hp: 80,
            atk: 60,
            def: 70,
            spa: 105,
            spd: 125,
            spe: 130
        },
        abilities: {
            0: "Aerilate",
            1: "Intimidate",
            H: "Ice Body"
        },
    },
    farfetchd: {
        inherit: true,
        types: ["Flying", "Fighting"],
        baseStats: {
            hp: 52,
            atk: 100,
            def: 85,
            spa: 55,
            spd: 62,
            spe: 120
        },
        abilities: {
            0: "Sniper",
            1: "Aerilate",
            H: "Defiant"
        },
    },
    hariyama: {
        inherit: true,
        types: ["Fighting"],
        baseStats: {
            hp: 150,
            atk: 130,
            def: 100,
            spa: 20,
            spd: 100,
            spe: 70
        },
        abilities: {
            0: "Thick Fat",
            1: "Guts",
            H: "Unaware"
        },
    },
    beartic: {
        inherit: true,
        types: ["Ice", "Fighting"],
        baseStats: {
            hp: 115,
            atk: 145,
            def: 80,
            spa: 55,
            spd: 80,
            spe: 95
        },
        abilities: {
            0: "No Guard",
            1: "Refrigerate",
            H: "Swift Swim"
        },
    },
    primeape: {
        inherit: true,
        types: ["Fighting", "Electric"],
        baseStats: {
            hp: 90,
            atk: 135,
            def: 80,
            spa: 60,
            spd: 80,
            spe: 125
        },
        abilities: {
            0: "Reckless",
            1: "Motor Drive",
            H: "Defiant"
        },
    },
    kricketune: {
        inherit: true,
        types: ["Bug"],
        baseStats: {
            hp: 112,
            atk: 125,
            def: 99,
            spa: 55,
            spd: 99,
            spe: 80
        },
        abilities: {
            0: "Swarm",
            1: "Technician",
            H: "Prankster"
        },
    },
    crustle: {
        inherit: true,
        types: ["Bug", "Ground"],
        baseStats: {
            hp: 70,
            atk: 120,
            def: 125,
            spa: 65,
            spd: 75,
            spe: 75
        },
        abilities: {
            0: "Sturdy",
            1: "Sand Force",
            H: "Water Compaction"
        },
    },
    leafeon: {
        inherit: true,
        types: ["Grass"],
        baseStats: {
            hp: 95,
            atk: 130,
            def: 65,
            spa: 60,
            spd: 65,
            spe: 110
        },
        abilities: {
            0: "Chlorophyll",
            H: "Tough Claws"
        },
    },
    dedenne: {
        inherit: true,
        types: ["Grass", "Electric"],
        baseStats: {
            hp: 87,
            atk: 117,
            def: 77,
            spa: 81,
            spd: 87,
            spe: 121
        },
        abilities: {
            0: "Harvest",
            1: "Cheek Pouch",
            H: "Sap Sipper"
        },
    },
    bellossom: {
        inherit: true,
        types: ["Grass", "Fire"],
        baseStats: {
            hp: 100,
            atk: 70,
            def: 110,
            spa: 130,
            spd: 110,
            spe: 50
        },
        abilities: {
            0: "Chlorophyll",
            1: "Drought",
            H: "Natural Cure"
        },
    },
    electrode: {
        inherit: true,
        types: ["Electric"],
        baseStats: {
            hp: 70,
            atk: 50,
            def: 70,
            spa: 110,
            spd: 100,
            spe: 170
        },
        abilities: {
            0: "Aftermath",
            1: "Soundproof",
            H: "No Guard"
        },
    },
    luxray: {
        inherit: true,
        types: ["Ice", "Electric"],
        baseStats: {
            hp: 70,
            atk: 120,
            def: 70,
            spa: 120,
            spd: 70,
            spe: 120
        },
        abilities: {
            0: "Slush Rush",
            1: "Intimidate",
            H: "Guts"
        },
    },
    arbok: {
        inherit: true,
        types: ["Electric", "Poison"],
        baseStats: {
            hp: 80,
            atk: 125,
            def: 8,
            spa: 65,
            spd: 104,
            spe: 115
        },
        abilities: {
            0: "Intimidate",
            1: "Shed Skin",
            H: "Strong Jaw"
        },
    },
    arcanine: {
        inherit: true,
        types: ["Fire"],
        baseStats: {
            hp: 100,
            atk: 120,
            def: 80,
            spa: 75,
            spd: 90,
            spe: 105
        },
        abilities: {
            0: "Fur Coat",
            1: "Reckless",
            H: "Justified"
        },
    },
    magmortar: {
        inherit: true,
        types: ["Fire", "Dragon"],
        baseStats: {
            hp: 75,
            atk: 95,
            def: 67,
            spa: 125,
            spd: 95,
            spe: 93
        },
        abilities: {
            0: "Flame Body",
            H: "Mega Launcher"
        },
    },
    volcanion: {
        inherit: true,
        types: ["Fire", "Ice"],
        baseStats: {
            hp: 96,
            atk: 75,
            def: 108,
            spa: 135,
            spd: 72,
            spe: 84
        },
        abilities: {
            0: "No Guard"
        },
    },
    zoroark: {
        inherit: true,
        types: ["Dark"],
        baseStats: {
            hp: 70,
            atk: 105,
            def: 70,
            spa: 125,
            spd: 70,
            spe: 130
        },
        abilities: {
            0: "Illusion",
            1: "Dazzling",
            H: "Prankster"
        },
    },
    incineroar: {
        inherit: true,
        types: ["Dark", "Fire"],
        baseStats: {
            hp: 115,
            atk: 135,
            def: 100,
            spa: 60,
            spd: 110,
            spe: 60
        },
        abilities: {
            0: "Blaze",
            H: "Intimidate"
        },
    },
    accelgor: {
        inherit: true,
        types: ["Dark", "Bug"],
        baseStats: {
            hp: 55,
            atk: 111,
            def: 50,
            spa: 133,
            spd: 50,
            spe: 166
        },
        abilities: {
            0: "Sheer Force",
            1: "Technician",
            H: "Dazzling"
        },
    },
    kangaskhan: {
        inherit: true,
        types: ["Ground"],
        baseStats: {
            hp: 115,
            atk: 120,
            def: 95,
            spa: 40,
            spd: 95,
            spe: 105
        },
        abilities: {
            0: "Mold Breaker",
            1: "Defiant",
            H: "Friend Guard"
        },
    },
    rampardos: {
        inherit: true,
        types: ["Ground", "Rock"],
        baseStats: {
            hp: 97,
            atk: 165,
            def: 60,
            spa: 64,
            spd: 60,
            spe: 109
        },
    },
    lycanrocmidnight: {
        inherit: true,
        types: ["Ground", "Fighting"],
        baseStats: {
            hp: 95,
            atk: 130,
            def: 75,
            spa: 85,
            spd: 80,
            spe: 105
        },
        abilities: {
            0: "Technician",
            1: "Strong Jaw",
            H: "No Guard"
        },
    },
    cofagrigus: {
        inherit: true,
        types: ["Ghost"],
        baseStats: {
            hp: 100,
            atk: 50,
            def: 130,
            spa: 110,
            spd: 130,
            spe: 50
        },
        abilities: {
            0: "Mummy",
            H: "Magic Guard"
        },
    },
    girafarig: {
        inherit: true,
        types: ["Ghost", "Psychic"],
        baseStats: {
            hp: 95,
            atk: 130,
            def: 75,
            spa: 85,
            spd: 80,
            spe: 105
        },
        abilities: {
            0: "Simple",
            1: "Sheer Force",
            H: "Sap Sipper"
        },
    },
    chimecho: {
        inherit: true,
        types: ["Ghost", "Normal"],
        baseStats: {
            hp: 95,
            atk: 50,
            def: 90,
            spa: 95,
            spd: 140,
            spe: 100
        },
        abilities: {
            0: "Magic Guard",
            1: "Natural Care",
            H: "Triage"
        },
    },
    bronzong: {
        inherit: true,
        types: ["Steel"],
        baseStats: {
            hp: 80,
            atk: 80,
            def: 145,
            spa: 100,
            spd: 145,
            spe: 20
        },
        abilities: {
            0: "Filter",
            1: "Magnet Pull",
            H: "Berserk"
        },
    },
    armaldo: {
        inherit: true,
        types: ["Steel", "Rock"],
        baseStats: {
            hp: 75,
            atk: 135,
            def: 90,
            spa: 60,
            spd: 80,
            spe: 130
        },
        abilities: {
            0: "Rock Head",
            H: "Steelworker"
        },
    },
    garbodor: {
        inherit: true,
        types: ["Steel", "Poison"],
        baseStats: {
            hp: 100,
            atk: 130,
            def: 107,
            spa: 40,
            spd: 107,
            spe: 86
        },
        abilities: {
            0: "Levitate",
            1: "Oblivious",
            H: "Defiant"
        },
    },
    cresselia: {
        inherit: true,
        types: ["Fairy"],
        baseStats: {
            hp: 120,
            atk: 50,
            def: 140,
            spa: 95,
            spd: 105,
            spe: 60
        },
        abilities: {
            0: "Serene Grace"
        },
    },
    goodra: {
        inherit: true,
        types: ["Fairy", "Dragon"],
        baseStats: {
            hp: 76,
            atk: 38,
            def: 114,
            spa: 133,
            spd: 152,
            spe: 57
        },
        abilities: {
            0: "Gooey",
            1: "Tangling Hair",
            H: "Thick Fat"
        },
    },
    nidoqueen: {
        inherit: true,
        types: ["Fairy", "Ground"],
        baseStats: {
            hp: 110,
            atk: 65,
            def: 115,
            spa: 95,
            spd: 105,
            spe: 75
        },
        abilities: {
            0: "Mold Breaker",
            1: "Multiscale",
            H: "Sheer Force"
        },
    },
    nidoking: {
        inherit: true,
        types: ["Poison"],
        baseStats: {
            hp: 90,
            atk: 105,
            def: 80,
            spa: 105,
            spd: 80,
            spe: 105
        },
        abilities: {
            0: "Dazzling",
            1: "No Guard",
            H: "Sheer Force"
        },
    },
    mukalola: {
        inherit: true,
        types: ["Poison", "Dark"],
        baseStats: {
            hp: 105,
            atk: 125,
            def: 80,
            spa: 65,
            spd: 130,
            spe: 65
        },
        abilities: {
            0: "Poison Touch",
            1: "Moxie",
            H: "Power of Alchemy"
        },
    },
    musharna: {
        inherit: true,
        types: ["Poison", "Psychic"],
        baseStats: {
            hp: 130,
            atk: 50,
            def: 110,
            spa: 110,
            spd: 110,
            spe: 60
        },
        abilities: {
            0: "Levitate",
            1: "Unawate",
            H: "Regenerator"
        },
    },
    snorlax: {
        inherit: true,
        types: ["Normal"],
        baseStats: {
            hp: 160,
            atk: 130,
            def: 70,
            spa: 30,
            spd: 130,
            spe: 50
        },
        abilities: {
            0: "Poison Heal",
            1: "Thick Fat",
            H: "Sheer Force"
        },
    },
    heatmor: {
        inherit: true,
        types: ["Normal", "Fire"],
        baseStats: {
            hp: 80,
            atk: 125,
            def: 80,
            spa: 80,
            spd: 80,
            spe: 125
        },
        abilities: {
            0: "Flash Fire",
            1: "Moxie",
            H: "Skill Link"
        },
    },
    zangoose: {
        inherit: true,
        types: ["Normal", "Steel"],
        baseStats: {
            hp: 90,
            atk: 130,
            def: 80,
            spa: 60,
            spd: 80,
            spe: 130
        },
        abilities: {
            0: "Defiant",
            1: "Guts",
            H: "Tough Claws"
        },
    },
    druddigon: {
        inherit: true,
        types: ["Dragon"],
        baseStats: {
            hp: 107,
            atk: 125,
            def: 100,
            spa: 60,
            spd: 100,
            spe: 78
        },
        abilities: {
            0: "Rough Skin",
            1: "Sheer Force",
            H: "Mold Breaker"
        },
    },
    seviper: {
        inherit: true,
        types: ["Poison"],
        baseStats: {
            hp: 90,
            atk: 125,
            def: 100,
            spa: 60,
            spd: 100,
            spe: 95
        },
        abilities: {
            0: "Strong Jaw",
            1: "Shed Skin",
            H: "Infiltrator"
        },
    },
    lapras: {
        inherit: true,
        types: ["Dragon", "Ice"],
        baseStats: {
            hp: 130,
            atk: 105,
            def: 80,
            spa: 110,
            spd: 75,
            spe: 70
        },
        abilities: {
            0: "Slush Rush",
            1: "Multiscale",
            H: "Refrigerate"
        },
    },
    wishiwashi: {
        inherit: true,
        types: ["Water"],
        baseStats: {
            hp: 80,
            atk: 130,
            def: 100,
            spa: 140,
            spd: 100,
            spe: 20
        },
        abilities: {
            0: "Schooling"
        },
    },
    araquanid: {
        inherit: true,
        types: ["Water", "Bug"],
        baseStats: {
            hp: 100,
            atk: 90,
            def: 120,
            spa: 50,
            spd: 172,
            spe: 38
        },
        abilities: {
            0: "Water Bubble",
            1: "Drizzle",
            H: "Regenerator"
        },
    },
    clawitzer: {
        inherit: true,
        types: ["Water", "Fire"],
        baseStats: {
            hp: 81,
            atk: 73,
            def: 88,
            spa: 130,
            spd: 89,
            spe: 109
        },
        abilities: {
            0: "No Guard",
            1: "Sniper",
            H: "Dazzling"
        },
    },
	    flygon: {
        inherit: true,
        types: ["Bug", "Dragon"],
        baseStats: {
            hp: 101,
            atk: 67,
            def: 71,
            spa: 129,
            spd: 71,
            spe: 131
        },
        abilities: {
            0: "Sheer Force",
            1: "Sand Force",
            H: "Levitate"
        },
    },
		   scrafty: {
        inherit: true,
        types: ["Rock", "Fighting"],
        baseStats: {
            hp: 80,
            atk: 130,
            def: 105,
            spa: 40,
            spd: 105,
            spe: 110
        },
        abilities: {
            0: "Intimidate",
            1: "Moxie",
            H: "Rock Head"
        },
    },
		    torterra: {
        inherit: true,
        types: ["Rock", "Grass"],
        baseStats: {
            hp: 95,
            atk: 135,
            def: 125,
            spa: 55,
            spd: 105,
            spe: 55
        },
        abilities: {
            0: "Overgrow",
            H: "Rock Head"
        },
    },
		    lunatone: {
        inherit: true,
        types: ["Rock", "Psychic"],
        baseStats: {
            hp: 90,
            atk: 55,
            def: 75,
            spa: 125,
            spd: 95,
            spe: 130
        },
        abilities: {
            0: "Levitate",
            1: "Technician",
            H: "Magic Bounce"
        },
    },
	mew: {
		inherit: true,
		 		baseStats: {
				hp: 100,
            atk: 70,
            def: 100,
            spa: 100,
            spd: 100,
            spe: 100
        },
	abilities: {0: "Magic Bounce", 1: "Sheer Force", H: "Prankster"},
},
	lilligant: {
		inherit: true,
		types: ["Psychic", "Grass"],
		baseStats: {
			hp: 60,
			atk: 50,
			def: 50,
			spa: 145,
			spd: 135,
			spe: 105
		},
		abilities: {0: "Queenly Majesty", 1: "Tinted Lens", H: "Magic Bounce"},
	},
	ariados: {
		inherit: true,
		types: ["Psychic", "Bug"],
		baseStats: {
			hp: 80,
			atk: 110,
			def: 90,
			spa: 60,
			spd: 90,
			spe: 140
		},
		abilities: {0: "Strong Jaw", 1: "Intimidate", H: "Mold Breaker"},
	},
vanilluxe: {
		inherit: true,
		types: ["Ice", "Normal"],
		baseStats: { 
			hp: 81,
			atk: 90,
			def: 80,
			spa: 130,
			spd: 85,
			spe: 104
		},
		abilities: {0: "No Guard", 1: "Snow Warning", H: "Tinted Lens"},
	},
mightyena: {
		inherit: true,
		types: ["Ice", "Dark"],
		baseStats: { 
			hp: 100,
			atk: 135,
			def: 90,
			spa: 40,
			spd: 90,
			spe: 115
		},
		abilities: {0: "Strong Jaw", 1: "Guts", H: "Moxie"},
	},
};
