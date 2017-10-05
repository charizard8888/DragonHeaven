'use strict';

exports.BattlePokedex = {
lycanroc: {
		inherit: true,
		types: ["Rock", "Normal"],
		baseStats: {hp: 75, atk: 120, def: 60, spa: 55, spd: 60, spe: 117},
	},
	emboar: {
		inherit: true,
		types: ["Rock", "Fire"],
		baseStats: {hp: 95, atk: 138, def: 65, spa: 110, spd: 65, spe: 97},
		abilities: {0: "Reckless", 1: "Dazzling", H: "Magic Guard"},
	},
  };
