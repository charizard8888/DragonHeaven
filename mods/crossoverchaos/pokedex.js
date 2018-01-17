'use strict';

exports.BattlePokedex = {
	/* For pokemon with two abilities use
	   abilities: {0: "Ability1Name", H: "Ability2Name"},
	   For a pokemon with three abilities use
	   abilities: {0: "Ability1Name", 1: "Ability2Name", H: "Ability3Name"}, */
     
   /* mario: {
		num: 6000001,
		species: "Salandit",
		types: [],
		baseStats: {hp: 48, atk: 44, def: 40, spa: 71, spd: 40, spe: 77},
		abilities: {0: "Corrosion", H: "Oblivious"},
	}, First three*/

kirby: {
		num: 6000004,
		species: "Kirby",
		types: ["Fairy"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Run Away"}, /* Copy Ability - This Pokemon copies the ability of the Pokemon that lands a move on it and gains a secondary typing that matches  */
	},
  
     };
