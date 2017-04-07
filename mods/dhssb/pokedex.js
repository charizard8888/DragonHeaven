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
	scraftymega: {
		num: 560,
		species: "Scrafty-Mega",
		forme: "Mega",
		formeLetter: "M",
		types: ["Fighting", "Dark"],
		baseStats: {hp:65, atk:140, def:140, spa:20, spd:140, spe:83},
		abilities:{0:"Adaptibility"},
	},
};
