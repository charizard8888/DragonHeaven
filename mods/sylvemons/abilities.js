'use strict';

exports.BattleAbilities = {

/* Magic Healing	This Pokemon heals 6% of their HP every turn.
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
Technician	This Pokemon's moves of 75 power or less have 1.5x power. Includes Struggle. */
'slowchat': {
		shortDesc: "Uses Defog, Sticky Web then Stealth Rock on switch in",
		onSwitchOut: function (source) {
			this.useMove('Future Sight', source);
		},
		id: "slowchat",
		name: "Slowchat",
	},
};
