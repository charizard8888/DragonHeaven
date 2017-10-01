'use strict';

exports.BattleMovedex = {
	"acrobatics": {
		inherit: true,
		basePowerCallback: function (pokemon, target, move) {
			if (!pokemon.item && !pokemon.ability) {
				this.debug("Power doubled for no item");
				return move.basePower * 2;
			}
			return move.basePower;
		},
	},
	"entrainment": {
		inherit: true,
		onTryHit: function (target, source) {
			return false;
		},
	},
	"gastroacid": {
		inherit: true,
		onTryHit: function (target, source) {
			return false;
		},
	},
	"incinerate": {
		inherit: true,
		onHit: function (pokemon, source) {
			let item = pokemon.getItem(), item2 = pokemon.getAbility();
			if ((item.isBerry || item.isGem) && pokemon.takeItem(source)) {
				this.add('-enditem', pokemon, item.name, '[from] move: Incinerate');
			}
			if ((item2.isBerry || item2.isGem) && pokemon.takeItem(source)) {
				this.add('-enditem', pokemon, item2.name, '[from] move: Incinerate');
			}
		},
	},
	"judgment": {
		inherit: true,
		onModifyMove: function (move, pokemon) {
			const item = pokemon.getItem(), item2 = pokemon.getAbility();
			if (item.id && item.onPlate && !item.zMove) {
				move.type = item.onPlate;
			} else if (item2.id && item2.onPlate && !item2.zMove) {
				move.type = item2.onPlate;
			}
		},
	},
	"recycle": {
		inherit: true,
		onHit: function (pokemon) {
			if ((pokemon.item || !pokemon.lastItem) && (pokemon.ability || !pokemon.lastItem2)) return false;
			pokemon.setItem(pokemon.lastItem);
			this.add('-item', pokemon, pokemon.getItem(), '[from] move: Recycle');
			pokemon.setItem(pokemon.lastItem2, pokemon, {item2: true});
			this.add('-item', pokemon, pokemon.getAbility(), '[from] move: Recycle');
		},
	},
	"roleplay": {
		inherit: true,
		onTryHit: function (target, source) {
			return false;
		},
	},
	"simplebeam": {
		inherit: true,
		onTryHit: function (target, source) {
			return false;
		},
	},
	"skillswap": {
		inherit: true,
		onTryHit: function (target, source) {
			return false;
		},
	},
	"worryseed": {
		inherit: true,
		onTryHit: function (pokemon) {
			return false;
		},
	},
};