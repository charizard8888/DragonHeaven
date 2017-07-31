'use strict';

exports.BattlePokedex = {
/* For pokemon with two abilities use
	   abilities: {0: "Ability1Name", H: "Ability2Name"},
	   For a pokemon with three abilities use
	   abilities: {0: "Ability1Name", 1: "Ability2Name", H: "Ability3Name"}, */
grasshole: {
		num: 3001,
		species: "Grasshole",
		types: ["Grass"],
		baseStats: {hp: 56, atk: 60, def: 55, spa: 47, spd: 50, spe: 50},
		abilities: {0: "Overgrow"},
		evos: ["analgae"],
	},
  
  analgae: {
		num: 3002,
		species: "Analgae",
		types: ["Grass", "Ground"],
		baseStats: {hp: 55, atk: 85, def: 45, spa: 79, spd: 65, spe: 86},
		abilities: {0: "Overgrow"},
		evos: ["rectreem"],
		prevo: "grasshole",
	},
	
};
