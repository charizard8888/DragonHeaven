'use strict';

exports.BattleItems = {
        "roomextender": {
		            id: "roomextender",
		            name: "Room Extender",
		            fling: {
		           	        basePower: 60,
		            },
            		desc: "Holder's use of Electric/Grassy/Misty/Psychic Terrain lasts 8 turns instead of 5.",
       	},
        "assaultshield": {
	             	id: "assaultshieldt",
		            name: "Assault Shield",
            		spritenum: 581,
	            	fling: {
                   			basePower: 80,
            		},
            		onModifySpDPriority: 1,
            		onModifySpD: function (def) {
                  			return this.chainModify(1.5);
             		},
            		onDisableMove: function (pokemon) {
                   			let moves = pokemon.moveset;
                   			for (let i = 0; i < moves.length; i++) {
                        				if (this.getMove(moves[i].move).category === 'Status') {
	                              				pokemon.disableMove(moves[i].id);
	                        			}
                   			}
            		},
             		desc: "Holder's Def is 1.5x, but it can only select damaging moves.",
       	},
	"eviolith": {
		id: "eviolith",
		name: "Eviolith",
		spritenum: 130,
		fling: {
			basePower: 40,
		},
		onModifyAtkPriority: 2,
		onModifyAtk: function (atk, pokemon) {
			if (pokemon.baseTemplate.nfe) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 2,
		onModifySpA: function (spa, pokemon) {
			if (pokemon.baseTemplate.nfe) {
				return this.chainModify(1.5);
			}
		},
		gen: 5,
		desc: "If holder's species can evolve, its Atk and Sp. Atk are 1.5x.",
	},
		"trickyseed": {
		id: "trickyseed",
		name: "Tricky Seed",
		spritenum: 664,
		fling: {
			basePower: 10,
		},
		onUpdate: function (pokemon) {
			if (this.isTerrain('trickroom') && pokemon.useItem()) {
				this.boost({spe: -1});
			}
		},
		gen: 7,
		desc: "If the terrain is Trick Room, lowers holder's Speed by 1 stage. Single use.",
	},
		"stunorb": {
		id: "stunorb",
		name: "Stun Orb",
		spritenum: 515,
		fling: {
			basePower: 30,
			status: 'par',
		},
		onResidualOrder: 26,
		onResidualSubOrder: 2,
		onResidual: function (pokemon) {
			pokemon.trySetStatus('par', pokemon);
		},
		gen: 4,
		desc: "At the end of every turn, this item attempts to paralyze the holder.",
	},
		"shellbell": {
		id: "shellbell",
		name: "Shell Bell",
		spritenum: 438,
		fling: {
			basePower: 30,
		},
		onAfterMoveSecondarySelfPriority: -1,
		onAfterMoveSecondarySelf: function (pokemon, target, move) {
			if (move.category !== 'Status') {
				this.heal(pokemon.lastDamage / 4, pokemon);
			}
		},
		num: 253,
		gen: 3,
		desc: "After an attack, holder gains 1/4 of the damage in HP dealt to other Pokemon.",
	},
	/* Adrenaline Orb
Agony Boots
Home-Run Bat
Relic Charm
Photocopier
Reverse Core
Breeze Rock
Weather Warrior's Crystal
Serenity Brace*/
};
