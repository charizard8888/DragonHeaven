'use strict'
exports.BattleItems = {

buzzasoarite: {
id:"buzzasoarite", 
name:"Buzzasoarite",
megaStone: "Buzzasoar-Mega", 
megaEvolves: "Buzzasoar",
onTakeItem: function (item, source) {
if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
return true;
},
gen: 6,
desc: "If holder is a Buzzasoar, this item allows it to Mega Evolve in battle.",
}, 
};
