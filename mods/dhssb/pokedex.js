'use strict';

exports.BattlePokedex = {
	//%Elcrest
	dragonite: {
		inherit: true,
		basespecies: "Pidgey",
		forme: "Mega",
		formeLetter: "M",
		abilities:{0:"Multiscale"},
	},
        gyarados: {
		inherit: true,
		basespecies: "Pidgey",
		forme: "Rainy",
		formeLetter: "R",
		abilities:{0:"Water Change"},
	},
	dratini: {
		inherit: true,
		otherForms: ["dragonite", "gyarados"],
	},
	zapmasterpineapple: {
    num: 560,
    species: "Zapmaster-Pineapple",
    baseSpecies: "Scrafty",
    forme: "Pineapple",
    formeLetter: "P",
    types: ["Fighting", "Dark"],
    baseStats: {
        hp: 80,
        atk: 110,
        def: 180,
        spa: 60,
        spd: 180,
        spe: 73
    },
    abilities: {
        0: "Punishment Prize"
    },
    weightkg: 30,
},
};
