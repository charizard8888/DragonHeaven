'use strict';

exports.BattlePokedex = {
	/* For pokemon with two abilities use
	   abilities: {0: "Ability1Name", H: "Ability2Name"},
	   For a pokemon with three abilities use
	   abilities: {0: "Ability1Name", 1: "Ability2Name", H: "Ability3Name"}, */
	
  gumshoosub: {
		num: 735,
		species: "Gumshoos-Ultra Beast",
		baseSpecies: "Gumshoos",
		forme: "Ultra Beast",
		formeLetter: "UB",
		types: ["Normal"],
		baseStats: {hp: 211, atk: 107, def: 97, spa: 17, spd: 67, spe: 71},
		abilities: {0: "Beast Boost", H:"Stakeout"},
	},
  raticateub: {
		num: 20,
		species: "Raticate-Ultra Beast",
		baseSpecies: "Raticate",
		forme: "Ultra Beast",
		formeLetter: "UB",
		types: ["Normal", "Dragon"],
		baseStats: {hp: 181, atk: 97, def: 83, spa: 87, spd: 83, spe: 39},
		abilities: {0: "Hustle", 1: "Strong Jaw", H: "Thick Fat"},
	},
/*	wishiwashiub: {
		num: 746,
		species: "Wishiwashi-Ultra Beast",
		baseSpecies: "Wishiwashi",
		forme: "Ultra Beast",
		formeLetter: "UB",
		types: ["Psychic", "Bug"],
		baseStats: {hp: 45, atk: 140, def: 130, spa: 140, spd: 135, spe: 30},
		abilities: {0: "Schooling", H:"Telepathy"},Stardust Cluster (Wishishashi will be in its Cluster Forme when it is above 1/4 HP and will go back to Star Forme when it is at or below 1/4 HP. Basically Schooling.)  New Stats: Star Forme: 31 / 13 / 19 / 97 / 61 / 149 [BST 370] Cluster Forme: 151 / 61 / 109 / 139 / 103 / 7 [BST 570] */
	
	salazzleub: {
		num: 758,
		species: "Salazzle-Ultra Beast",
		baseSpecies: "Salazzle",
		forme: "Ultra Beast",
		formeLetter: "UB",
		types: ["Ice"],
		baseStats: {hp: 97, atk: 89, def: 43, spa: 101, spd: 137, spe: 89},
		abilities: {0: "Corrosion"}, /*Ability:Type Invert (Inverts type matchups while the Pokemon is on the field) */
	},  

};
