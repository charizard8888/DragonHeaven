'use strict';

exports.BattleAbilities = {

/* 
Ethereal Fist	Punch Moves become Special and gain 1.2x damage (Same Moves effected as Iron Fist).
Disperal	Boosts Bullet Seed, Seed Bomb, and Seed Flare by 1.2x power, and Leech Seed deals 20% more damage and heals 30% more HP each turn.
Housekeeping	Removes hazards upon switch-in.
Mind Trick	Stat changes are received by the opposing pokemon and vice versa
Flare Boost	Doubles user's SpA when burned
Knight's Blade	Boosts the power of sword, cut, slash, and blade moves by 1.5x (List: Psycho Cut, Cut, Slash, Night Slash, Solar Blade, Leaf Blade, X-Scissor, Cross Poison, Air Slash, Air Cutter, Fury Cutter, Sacred Sword, Secret Sword, Razor Shell)
Forecast	If this Pokémon is holding a Weather Rock, its secondary typing becomes Water/Fire/Rock/Ice (depending on the rock) and summon the corresponding weather upon entering the field. Under Strong Winds, this mon gains the added Flying type. These items cannot be removed
Time Warp	Sets Trick Room upon entry
Corrosion	This Pokemon can poison any Pokemon, and attack any Pokemon with Poison moves, regardless of immunities.
Air Stream	Summons the new weather Air Current for 5 turns. In this weather, Flying-Types take 0.75* damage from Electric, Rock, and Ice-Type moves (kinda like Solid Rock), and the move Hurricane has perfect accuracy. Weather Ball doubles in power and becomes Flying-Type.
Guard Up	Upon switch-in, this Pokemon's Defense or Special Defense goes up by 1 stage depending on the opponent's higher attacking stat (Download clone).
Scrappy	Ignores every type inmunity when attacking.
Technician	This Pokemon's moves of 75 power or less have 1.5x power. Includes Struggle. 
Obstinacy	User gains a boost in it's moves the lower it's HP gets. Formula:  (1.0 - [Current percentage of HP in decimal form]) + 1.0
Overgrow	Boosts the power of Grass-type moves by 1.5x.
Blaze	Boosts the power of Fire-type moves by 1.5x.
Torrent	Boosts the power of Water-type moves by 1.5x.
Swarm	Boosts the power of Bug-type moves by 1.5x.
*/

	"magichealing": {
		id: "magichealing",
		name: "Magic Healing",
		spritenum: 242,
		onResidualOrder: 5,
		onResidualSubOrder: 2,
		onResidual: function (pokemon) {
			if (this.isTerrain('grassyterrain')) return;
			this.heal(pokemon.maxhp / 16);
		},
		onTerrain: function (pokemon) {
			if (!this.isTerrain('grassyterrain')) return;
			this.heal(pokemon.maxhp / 16);
		},
		desc: "At the end of every turn, the Pokemon restores 1/16 of its max HP.",
	},
	/*"etherealfist": {
		desc: "This Pokemon's punch-based attacks have their power multiplied by 1.2 and become Special.",
		shortDesc: "This Pokemon's punch-based attacks have 1.2x power and become Special. Sucker Punch is not boosted.",
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (move.flags['punch']) {
				this.debug('Iron Fist boost');
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		id: "etherealfist",
		name: "Ethereal Fist",
		rating: 3,
		num: 89,
	},*/
	"swarm": {
		desc: "When this Pokemon has 1/2 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Bug-type attack.",
		shortDesc: "This Pokemon's attacking stat is 1.5x with Bug attacks.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Bug') {
				this.debug('Swarm boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Bug') {
				this.debug('Swarm boost');
				return this.chainModify(1.5);
			}
		},
		id: "swarm",
		name: "Swarm",
		rating: 2,
		num: 68,
	},
	"blaze": {
		desc: "When this Pokemon has 1/2 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Fire-type attack.",
		shortDesc: "This Pokemon's attacking stat is 1.5x with Fire attacks.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Blaze boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Blaze boost');
				return this.chainModify(1.5);
			}
		},
		id: "blaze",
		name: "Blaze",
		rating: 2,
		num: 66,
	},
	"torrent": {
		desc: "When this Pokemon has 1/2 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Water-type attack.",
		shortDesc: "This Pokemon's attacking stat is 1.5x with Water attacks.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Water') {
				this.debug('Torrent boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Water') {
				this.debug('Torrent boost');
				return this.chainModify(1.5);
			}
		},
		id: "torrent",
		name: "Torrent",
		rating: 2,
		num: 67,
	},
	"overgrow": {
		desc: "When this Pokemon has 1/2 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Grass-type attack.",
		shortDesc: "This Pokemon's attacking stat is 1.5x with Grass attacks.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Grass') {
				this.debug('Overgrow boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Grass') {
				this.debug('Overgrow boost');
				return this.chainModify(1.5);
			}
		},
		id: "overgrow",
		name: "Overgrow",
		rating: 2,
		num: 65,
	},
	"technician": {
		desc: "This Pokemon's moves of 60 power or less have their power multiplied by 1.5. Does affect Struggle.",
		shortDesc: "This Pokemon's moves of 60 power or less have 1.5x power. Includes Struggle.",
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (basePower <= 75) {
				this.debug('Technician boost');
				return this.chainModify(1.5);
			}
		},
		id: "technician",
		name: "Technician",
		rating: 4,
		num: 101,
	},
	"megalauncher": {
		desc: "This Pokemon's pulse, ball and bomb moves have their power multiplied by 1.5. Heal Pulse restores 3/4 of a target's maximum HP, rounded half down.",
		shortDesc: "This Pokemon's pulse, ball and bomb moves have 1.5x power. Heal Pulse heals 3/4 target's max HP.",
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (move.flags['pulse' || 'bullet']) {
				return this.chainModify(1.5);
			}
		},
		id: "megalauncher",
		name: "Mega Launcher",
		rating: 3.5,
		num: 178,
	},
	
};
