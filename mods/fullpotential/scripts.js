'use strict';

exports.BattleScripts = {
<<<<<<< HEAD
	getDamage : function (pokemon, target, move, suppressMessages) {
=======
	getDamage: function (pokemon, target, move, suppressMessages) {
>>>>>>> 3cd34bc8e0b676cc6c5476bce93fc1500a588d26
		if (typeof move === 'string') move = this.getMove(move);

		if (typeof move === 'number') {
			move = {
<<<<<<< HEAD
				id: 'confused',
				basePower: move,
				type: '???',
				category: 'Physical',
				willCrit: false,
=======
				basePower: move,
				type: '???',
				category: 'Physical',
>>>>>>> 3cd34bc8e0b676cc6c5476bce93fc1500a588d26
				flags: {},
			};
		}

		if (!move.ignoreImmunity || (move.ignoreImmunity !== true && !move.ignoreImmunity[move.type])) {
			if (!target.runImmunity(move.type, !suppressMessages)) {
				return false;
			}
		}

<<<<<<< HEAD
		if (move.ohko) return target.maxhp;

		if (move.damageCallback) return move.damageCallback.call(this, pokemon, target);
		if (move.damage === 'level') return pokemon.level;
		if (move.damage) return move.damage;

		if (!move) move = {};
		if (!move.type) move.type = '???';
		let type = move.type;
=======
		if (move.ohko) {
			return target.maxhp;
		}

		if (move.damageCallback) {
			return move.damageCallback.call(this, pokemon, target);
		}
		if (move.damage === 'level') {
			return pokemon.level;
		}
		if (move.damage) {
			return move.damage;
		}

		if (!move) {
			move = {};
		}
		if (!move.type) move.type = '???';
		let type = move.type;
		// '???' is typeless damage: used for Struggle and Confusion etc
>>>>>>> 3cd34bc8e0b676cc6c5476bce93fc1500a588d26
		let category = this.getCategory(move);
		let defensiveCategory = move.defensiveCategory || category;

		let basePower = move.basePower;
<<<<<<< HEAD
		if (move.basePowerCallback) basePower = move.basePowerCallback.call(this, pokemon, target, move);
		if (!basePower) {
			if (basePower === 0) return;
=======
		if (move.basePowerCallback) {
			basePower = move.basePowerCallback.call(this, pokemon, target, move);
		}
		if (!basePower) {
			if (basePower === 0) return; // returning undefined means not dealing damage
>>>>>>> 3cd34bc8e0b676cc6c5476bce93fc1500a588d26
			return basePower;
		}
		basePower = this.clampIntRange(basePower, 1);

		let critMult;
		let critRatio = this.runEvent('ModifyCritRatio', pokemon, target, move, move.critRatio || 0);
<<<<<<< HEAD
		critRatio = this.clampIntRange(critRatio, 0, 4);
		critMult = [0, 16, 8, 2, 1];

		move.crit = move.willCrit || false;
		if (move.willCrit === undefined && critRatio) move.crit = (this.random(critMult[critRatio]) === 0);

		if (move.crit) move.crit = this.runEvent('CriticalHit', target, null, move);

=======
		if (this.gen <= 5) {
			critRatio = this.clampIntRange(critRatio, 0, 5);
			critMult = [0, 16, 8, 4, 3, 2];
		} else {
			critRatio = this.clampIntRange(critRatio, 0, 4);
			critMult = [0, 16, 8, 2, 1];
		}

		move.crit = move.willCrit || false;
		if (move.willCrit === undefined) {
			if (critRatio) {
				move.crit = (this.random(critMult[critRatio]) === 0);
			}
		}

		if (move.crit) {
			move.crit = this.runEvent('CriticalHit', target, null, move);
		}

		// happens after crit calculation
>>>>>>> 3cd34bc8e0b676cc6c5476bce93fc1500a588d26
		basePower = this.runEvent('BasePower', pokemon, target, move, basePower, true);

		if (!basePower) return 0;
		basePower = this.clampIntRange(basePower, 1);

		let level = pokemon.level;

		let attacker = pokemon;
		let defender = target;
<<<<<<< HEAD
		let statTable = {atk:'Atk', def:'Def', spa:'SpA', spd:'SpD', spe:'Spe'};
		let attackStat, highestStat = 0;
		let defenseStat = defensiveCategory === 'Physical' ? 'def' : 'spd';
		for (let i in statTable) {
			let stat = attacker.calculateStat(i, attacker.boosts[i]);
			stat = this.runEvent('Modify' + statTable[i], attacker, defender, move, stat);
			if (stat > highestStat) {
				attackStat = i;
				highestStat = stat;
			}
		}
		if (move.useTargetOffensive) {
			attackStat = category === 'Physical' ? 'atk' : 'spa';
		}
		if (move.id === 'confused') {
			attackStat = 'atk';
		}
		let attack;
		let defense;

		let atkBoosts = move.useTargetOffensive ? defender.boosts[attackStat] : attacker.boosts[attackStat];
=======
		let defenseStat = defensiveCategory === 'Physical' ? 'def' : 'spd';
		let statTable = {atk:'Atk', def:'Def', spa:'SpA', spd:'SpD', spe:'Spe'};
		let maxAttack = 0;
		let attack;
		let defense;

>>>>>>> 3cd34bc8e0b676cc6c5476bce93fc1500a588d26
		let defBoosts = move.useSourceDefensive ? attacker.boosts[defenseStat] : defender.boosts[defenseStat];

		let ignoreNegativeOffensive = !!move.ignoreNegativeOffensive;
		let ignorePositiveDefensive = !!move.ignorePositiveDefensive;

		if (move.crit) {
			ignoreNegativeOffensive = true;
			ignorePositiveDefensive = true;
		}
<<<<<<< HEAD
		let ignoreOffensive = !!(move.ignoreOffensive || (ignoreNegativeOffensive && atkBoosts < 0));
		let ignoreDefensive = !!(move.ignoreDefensive || (ignorePositiveDefensive && defBoosts > 0));

		if (ignoreOffensive) atkBoosts = 0;
		if (ignoreDefensive) defBoosts = 0;

		if (move.useTargetOffensive) {
			attack = defender.calculateStat(attackStat, atkBoosts);
		} else {
			attack = attacker.calculateStat(attackStat, atkBoosts);
=======
		let ignoreDefensive = !!(move.ignoreDefensive || (ignorePositiveDefensive && defBoosts > 0));

		if (ignoreDefensive) {
			this.debug('Negating (sp)def boost/penalty.');
			defBoosts = 0;
		}

		for (let attackStat in statTable) {
			let atkBoosts = move.useTargetOffensive ? defender.boosts[attackStat] : attacker.boosts[attackStat];
			let ignoreOffensive = !!(move.ignoreOffensive || (ignoreNegativeOffensive && atkBoosts < 0));
			if (ignoreOffensive) {
				this.debug('Negating (sp)atk boost/penalty.');
				atkBoosts = 0;
			}
			if (move.useTargetOffensive) {
				attack = defender.calculateStat(attackStat, atkBoosts);
			} else {
				attack = attacker.calculateStat(attackStat, atkBoosts);
			}
			attack = this.runEvent('Modify' + statTable[attackStat], attacker, defender, move, attack);
			if (attack > maxAttack) maxAttack = attack;
>>>>>>> 3cd34bc8e0b676cc6c5476bce93fc1500a588d26
		}

		if (move.useSourceDefensive) {
			defense = attacker.calculateStat(defenseStat, defBoosts);
		} else {
			defense = defender.calculateStat(defenseStat, defBoosts);
		}

<<<<<<< HEAD
		attack = this.runEvent('Modify' + statTable[attackStat], attacker, defender, move, attack);
		defense = this.runEvent('Modify' + statTable[defenseStat], defender, attacker, move, defense);

		let baseDamage = Math.floor(Math.floor(Math.floor(2 * level / 5 + 2) * basePower * attack / defense) / 50) + 2;

		baseDamage = this.runEvent('WeatherModifyDamage', pokemon, target, move, baseDamage);

		if (move.crit) baseDamage = this.modify(baseDamage, move.critModifier || (this.gen >= 6 ? 1.5 : 2));

		baseDamage = this.randomizer(baseDamage);

		if (move.hasSTAB || pokemon.hasType(type)) baseDamage = this.modify(baseDamage, move.stab || 1.5);
=======
		// Apply Stat Modifiers
		defense = this.runEvent('Modify' + statTable[defenseStat], defender, attacker, move, defense);

		//int(int(int(2 * L / 5 + 2) * A * P / D) / 50);
		let baseDamage = Math.floor(Math.floor(Math.floor(2 * level / 5 + 2) * basePower * maxAttack / defense) / 50) + 2;

		// multi-target modifier (doubles only)
		if (move.spreadHit) {
			let spreadModifier = move.spreadModifier || 0.75;
			this.debug('Spread modifier: ' + spreadModifier);
			baseDamage = this.modify(baseDamage, spreadModifier);
		}

		// weather modifier
		baseDamage = this.runEvent('WeatherModifyDamage', pokemon, target, move, baseDamage);

		// crit
		if (move.crit) {
			baseDamage = this.modify(baseDamage, move.critModifier || (this.gen >= 6 ? 1.5 : 2));
		}

		// this is not a modifier
		baseDamage = this.randomizer(baseDamage);

		// STAB
		if (move.hasSTAB || type !== '???' && pokemon.hasType(type)) {
			// The "???" type never gets STAB
			// Not even if you Roost in Gen 4 and somehow manage to use
			// Struggle in the same turn.
			// (On second thought, it might be easier to get a Missingno.)
			baseDamage = this.modify(baseDamage, move.stab || 1.5);
		}
		// types
>>>>>>> 3cd34bc8e0b676cc6c5476bce93fc1500a588d26
		move.typeMod = target.runEffectiveness(move);

		move.typeMod = this.clampIntRange(move.typeMod, -6, 6);
		if (move.typeMod > 0) {
			if (!suppressMessages) this.add('-supereffective', target);

			for (let i = 0; i < move.typeMod; i++) {
				baseDamage *= 2;
			}
		}
		if (move.typeMod < 0) {
			if (!suppressMessages) this.add('-resisted', target);

			for (let i = 0; i > move.typeMod; i--) {
				baseDamage = Math.floor(baseDamage / 2);
			}
		}

		if (move.crit && !suppressMessages) this.add('-crit', target);

<<<<<<< HEAD
		if (pokemon.status === 'brn' && basePower && move.category === 'Physical' && move.id !== 'facade' && !pokemon.hasAbility('guts')) {
			baseDamage = this.modify(baseDamage, 0.5);
		}

		baseDamage = this.runEvent('ModifyDamage', pokemon, target, move, baseDamage);

		if (basePower && !Math.floor(baseDamage)) return 1;
=======
		if (pokemon.status === 'brn' && basePower && move.category === 'Physical' && !pokemon.hasAbility('guts')) {
			if (this.gen < 6 || move.id !== 'facade') {
				baseDamage = this.modify(baseDamage, 0.5);
			}
		}

		// Generation 5 sets damage to 1 before the final damage modifiers only
		if (this.gen === 5 && basePower && !Math.floor(baseDamage)) {
			baseDamage = 1;
		}

		// Final modifier. Modifiers that modify damage after min damage check, such as Life Orb.
		baseDamage = this.runEvent('ModifyDamage', pokemon, target, move, baseDamage);

		if (this.gen !== 5 && basePower && !Math.floor(baseDamage)) {
			return 1;
		}
>>>>>>> 3cd34bc8e0b676cc6c5476bce93fc1500a588d26

		return Math.floor(baseDamage);
	},
};
