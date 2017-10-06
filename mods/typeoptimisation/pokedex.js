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
	bastiodon: {
		inherit: true,
		types: ["Rock"],
		baseStats: {hp: 60, atk: 50, def: 120, spa: 135, spd: 100, spe: 105},
		abilities: {0: "Sand Force", 1: "Sand Rush", H: "Sand Stream"},
	},
	glaceon: {
		inherit: true, 
		types: ["Ice"],
		baseStats: {hp: 65, atk: 95, def: 65, spa: 110, spd: 60, spe: 130},
		abilities: {0: "Adatability", H: "Magic Guard"},
	},
	glalie: {
		inherit: true,
		types: ["Ice", "Rock"],
		baseStats: {hp: 60, atk: 160, def: 60, spa: 70, spd: 60, spe: 160},
		abilities: {0: "Sturdy", 1: "Adaptability", H: "Magic Guard"},
	},
	froslass: {
		inherit: true,
		types: ["Ice", "Poison"],
		baseStats: {hp: 66, atk: 71, def: 66, spa: 142, spd: 106, spe: 116},
		abilities: {0: "Corrosion", 1: "Snow Cloak", H: "Snow Warning"},
	},
	
	
	unfezant: {
		inherit: true,
		types: ["Flying"],
		baseStats: {hp: 80, atk: 115, def: 80, spa: 82, spd: 80, spe: 133},
		abilities: {0: "Big Pecks", 1: "Technician", H: "Aerilate"},
	},
	cryogonal: {
		inherit: true,
		types: ["Ice", "Flying"],
		baseStats: {hp: 80, atk: 60, def: 70, spa: 105, spd: 125, spe: 130},
		abilities: {0: "Aerialte", 1: "Intimidate", H: "Ice Body"},
	},
	farfetchd: {
		inherit: true,
		types: ["Flying", "Fighting"],
		baseStats: {hp: 52, atk: 100, def: 85, spa: 55, spd: 62, spe: 120},
		abilities: {0: "Sniper", 1: "Aerilate", H: "Defiant"},
	},
	hariyama: {
		inherit: true,
		types: ["Fighting"],
		baseStats: {hp: 150, atk: 130, def: 100, spa: 20, spd: 100, spe: 70},
		abilities: {0: "Thick Fat", 1: "Guts", H: "Unaware"},
	},
	beartic: {
		inherit: true,
		types: ["Ice", "Fighting"],
		baseStats: {hp: 115, atk: 145, def: 80, spa: 55, spd: 80, spe: 95},
		abilities: {0: "No Guard", 1: "Refrigerate", H: "Swift Swim"},
	},
	primeape: {
		inherit: true,
		types: ["Fighting", "Electric"],
		baseStats: {hp: 90, atk: 135, def: 80, spa: 60, spd: 80, spe: 125},
		abilities: {0: "Reckless", 1: "Motor Drive", H: "Defiant"},
	},
	kriketurne: {
		inherit: true,
		types: ["Bug"],
		baseStats: {hp: 112, atk: 125, def: 99, spa: 55, spd: 99, spe: 80},
		abilities: {0: "Swarm", 1: "Technician", H: "Prankster"},
	},
	crustle: {
		inherit: true,
		types: ["Bug", "Ground"],
		baseStats: {hp: 70, atk: 120, def: 125, spa: 65, spd: 75, spe: 75},
		abilities: {0: "Sturdy", 1: "Sand Force", H: "Water Compaction"},
	},
	flygon: {
		inherit: true,
		types: ["Bug", "Dragon"],
		baseStats: {hp: 101, atk: 67, def: 71, spa: 129, spd: 71, spe: 131},
		abilities: {0: "Sheer Force", 1: "Sand Force", H: "Levitate"},
	},
	/*froslass: {
		inherit: true,
		types: ["Ice", "Poison"],
		baseStats: {hp: 66, atk: 71, def: 66, spa: 142, spd: 106, spe: 116},
		abilities: {0: "Corrosion", 1: "Snow Cloak", H: "Snow Warning"},
	},
	froslass: {
		inherit: true,
		types: ["Ice", "Poison"],
		baseStats: {hp: 66, atk: 71, def: 66, spa: 142, spd: 106, spe: 116},
		abilities: {0: "Corrosion", 1: "Snow Cloak", H: "Snow Warning"},
	},*/
	
  };
