'use strict';

exports.BattleMovedex = {
  "scorchingwater": {
          accuracy: 100,
          basePower: 70,
          category: "Special",
	        shortDesc: "10% chance to OHKO Grass, Bug, Steel, Ice, Rock",
          id: "scorchingwater",
          isViable: true,
	        name: "Scorching Water",
          pp: 15,
          priority: 0,
          flags: {protect: 1, mirror: 1},
          thawsTarget: true,
          onEffectiveness: function (typeMod, type) {
			    if (type === 'Water') return 1;
		      },
          secondary: {
                    chance: 30,
	                  status: 'brn',
          },
	        onPrepareHit: function (target, source) {
			    this.attrLastMove('[still]');
			    this.add('-anim', source, "Scald", target);
	      	},
          target: "normal",
          type: "Warer,
  },
        /* Learned By: Gyarotic
        Name: Boiling Point (Brine + Scald)
        New Type: Water
        Classification: Special
        Base Power: 80
        Accuracy: 100
        Power Points: 10 [MAX 16]
        Effect: Has double power against burned Pokémon.
        Target: 1 Target 
        Probably not very useful over Scald, but if you combo it with Scald you can potentially destroy anything in your path. Against anything that's burned you get a 150 BP STAB move, which is outrageous.
        ___Learned By: Azuninja
Name: Shuriken Jet (Aqua Jet + Water Shuriken)
New Type: Water
Classification: Physical
Base Power: 40
Accuracy: 100
Power Points: 10
Effect: +1 Priority. Hits 2-5 times in one turn.
Target: Single opponent
More consistent power of Aqua Jet times 2-5.

Learned By: Azuninja
Name: Thermal Slam (Scald + Feint Attack)
New Type: Water
Classification: Physical
Base Power: 75
Accuracy: 100%
Power Points: 15 [MAX: 24]
Effect: 20% chance to burn the opponent.
Target: Single Opponent
Basically a physical, albeit weaker, Scald.

Name: Toy Shurikens (Play Rough and Water Shuriken)
Type: Water
Classification: Physical
Base power: 10
Accuracy- 85%
PP: 24
Effect/Description- Hits the foes with a volley of shruikens (2-5 times). Each shot has a 30% chance to lower the foes attack
Target: 1 Opponent

Azuninja now has the ability to force switches, giving it many more opportunities to set up. Also the name seemed cool


Learned By: Azuninja
Name: Scheming Stream (Aqua Jet + Taunt)
New Type: Water
Classification: Physical
Base Power: 40
Accuracy: 100
Power Points: 10 [MAX 16]
Effect: +1 Priority. During the next turn, the target can only use damaging moves.
Target: 1 Target

A mini-taunt with priority. Of course, to not completely break it the Taunt effect applies the next turn, meaning that you don't completely shut down status moves. It's also overall better than Aqua Jet, only really missing out on some PP which isn't a big deal.
        
Learned By: Chandeform
Name: Body Blast (Body Slam + Fire Blast)
New Type: Normal
Classification: Special
Base Power: 100
Accuracy: 90
Power Points: 10
Effect: 30% chance to paralyze target.
Target: 1 adjacent Pokemon
A special body slam with more power and less accuracy. Could help patch up Chandeform's unimpressive speed.

Learned By: Mismatross
Name: Possession (Phantom Force + Thunder)
New Type: Ghost
Classification: Physical
Base Power: 100
Accuracy: 75%
Power Points: 15 [MAX: 24]
Effect: 30% chance to paralyze target.
Target: Single Opponent
Gives Mismatross a solid physical Ghost STAB to work with. It is really nice when paired with Coil as that 75% accuracy is otherwise abysmal. The paralysis chance is also really nice.


Learned by: Haxardos
Name: Rockfall (Dual Chop + Rock Tomb)
New Type: Rock
Classification: Physical
Base Power: 55
Accuracy: 90
Power Points: 15 [MAX: 24]
Effect: 50% chance to lower the target's Speed by 1. Hit 2 times.
Target: 1 Pokemon

A nice way to lower the opponent's Speed and hit them through Substitutes, stopping sweepers a lot easier. Gives a decent Rock-type STAB that doesn't rely on recoil as well.
 Learned By: Haxardos
Name: Frenetic Crush (Rock Tomb + Dragon Dance)
New Type: Rock
Classification: Physical (non-contact)
Base Power: 60
Accuracy: 100%
Power Points: 15 (max 24)
Effect: 100% chance to increase the user's Speed by 1 stage; 50% chance to increase the user's Attack by 1 stage.
Target: 1 adjacent Pokémon
Essentially, a Rock-type Flame Charge with more power and a secondary special effect, but less PP. Its second effect to increase Attack allows it to replace Dragon Dance entirely if you're feeling lucky.*/
};
