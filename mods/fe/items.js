'use strict';

exports.BattleItems = {
    "swampamarite": {
        id: "swampamarite",
        name: "gyaroticite",
        spritenum: 594,

        megaStone: "swampamar-Mega",
        megaEvolves: "swampamar",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a swampamar, this item allows it to Mega Evolve in battle.",
    },
    "gyaroticite": {
        id: "gyaroticite",
        name: "gyaroticite",
        spritenum: 594,

        megaStone: "gyarotic-Mega",
        megaEvolves: "gyarotic",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a gyarotic, this item allows it to Mega Evolve in battle.",
    },
    "pangleyeite": {
        id: "pangleyeite",
        name: "pangleyeite",
        spritenum: 594,

        megaStone: "pangleye-Mega",
        megaEvolves: "pangleye",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a pangleye, this item allows it to Mega Evolve in battle.",
    },
    "garchadosyite": {
        id: "garchadosyite",
        name: "garchadosyite",
        spritenum: 594,

        megaStone: "garchadosy-Mega",
        megaEvolves: "garchadosy",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a garchadosy, this item allows it to Mega Evolve in battle.",
    },
    "garchadoscite": {
        id: "garchadoscite",
        name: "garchadoscite",
        spritenum: 595,

        megaStone: "garchadosc-Mega",
        megaEvolves: "garchadosc",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a garchadosc, this item allows it to Mega Evolve in battle.",
    },
    "gargatrite": {
        id: "gargatrite",
        name: "gargatrite",
        spritenum: 696,

        megaStone: "gargatr-Mega",
        megaEvolves: "gargatr",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a gargatr, this item allows it to Mega Evolve in battle.",
    },
    "cofagreelixite": {
        id: "cofagreelixite",
        name: "cofagreelixite",
        megaStone: "cofagreelix-Mega",
        megaEvolves: "cofagreelix",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a cofagreelix, this item allows it to Mega Evolve in battle.",
    },
    "archedactylite": {
        id: "archedactylite",
        name: "archedactylite",
        megaStone: "archedactyl-Mega",
        megaEvolves: "archedactyl",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a archedactyl, this item allows it to Mega Evolve in battle.",
    },
    "weasolite": {
        id: "weasolite",
        name: "weasolite",
        megaStone: "weasol-Mega",
        megaEvolves: "weasol",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a weasol, this item allows it to Mega Evolve in battle.",
    },
    "tyranichomptite": {
        id: "tyranichomptite",
        name: "tyranichomptite",
        megaStone: "tyranichompt-Mega",
        megaEvolves: "tyranichompt",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a tyranichompt, this item allows it to Mega Evolve in battle.",
    },
    "tyranichompgite": {
        id: "tyranichompgite",
        name: "tyranichompgite",
        megaStone: "tyranichompg-Mega",
        megaEvolves: "tyranichompg",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a tyranichompg, this item allows it to Mega Evolve in battle.",
    },
    "railieite": {
        id: "railieite",
        name: "railieite",
        megaStone: "railie-Mega",
        megaEvolves: "railie",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a railie, this item allows it to Mega Evolve in battle.",
    },
    "charatosyite": {
        id: "charatosyite",
        name: "charatosyite",
        megaStone: "charatosy-Mega",
        megaEvolves: "charatosy",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a charatosy, this item allows it to Mega Evolve in battle.",
    },
    "charatosxite": {
        id: "charatosxite",
        name: "charatosxite",
        megaStone: "charatosx-Mega",
        megaEvolves: "charatosx",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a charatosx, this item allows it to Mega Evolve in battle.",
    },
    "charatosgite": {
        id: "charatosgite",
        name: "charatosgite",
        megaStone: "charatosg-Mega",
        megaEvolves: "charatosg",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a charatosg, this item allows it to Mega Evolve in battle.",
    },
    "aggrosaurvite": {
        id: "aggrosaurvite",
        name: "aggrosaurvite",
        megaStone: "aggrosaurv-Mega",
        megaEvolves: "aggrosaurv",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a aggrosaurv, this item allows it to Mega Evolve in battle.",
    },
    "aggrosauraite": {
        id: "aggrosauraite",
        name: "aggrosauraite",
        megaStone: "aggrosaura-Mega",
        megaEvolves: "aggrosaura",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a aggrosaura, this item allows it to Mega Evolve in battle.",
    },
    "blastinjaite": {
        id: "blastinjaite",
        name: "blastinjaite",
        megaStone: "blastinja-Mega",
        megaEvolves: "blastinja",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a blastinja, this item allows it to Mega Evolve in battle.",
    },
    "skariaite": {
        id: "skariaite",
        name: "skariaite",
        megaStone: "skaria-Mega",
        megaEvolves: "skaria",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a skaria, this item allows it to Mega Evolve in battle.",
    },
    "magmozamite": {
        id: "magmozamite",
        name: "magmozamite",
        megaStone: "magmozam-Mega",
        megaEvolves: "magmozam",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a magmozam, this item allows it to Mega Evolve in battle.",
    },
    "glakissite": {
        id: "glakissite",
        name: "glakissite",
        megaStone: "glakiss-Mega",
        megaEvolves: "glakiss",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a glakiss, this item allows it to Mega Evolve in battle.",
    },
    "sharpedossite": {
        id: "sharpedossite",
        name: "sharpedossite",
        megaStone: "sharpedoss-Mega",
        megaEvolves: "sharpedoss",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a sharpedoss, this item allows it to Mega Evolve in battle.",
    },
    "sharpedosgite": {
        id: "sharpedosgite",
        name: "sharpedosgite",
        megaStone: "sharpedosg-Mega",
        megaEvolves: "sharpedosg",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a sharpedosg, this item allows it to Mega Evolve in battle.",
    },
    "pidgetotite": {
        id: "pidgetotite",
        name: "pidgetotite",
        megaStone: "pidgetot-Mega",
        megaEvolves: "pidgetot",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a pidgetot, this item allows it to Mega Evolve in battle.",
    },
    "klazorite": {
        id: "klazorite",
        name: "klazorite",
        megaStone: "klazor-Mega",
        megaEvolves: "klazor",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a klazor, this item allows it to Mega Evolve in battle.",
    },
    "pidgemieite": {
        id: "pidgemieite",
        name: "pidgemieite",
        megaStone: "pidgemie-Mega",
        megaEvolves: "pidgemie",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a pidgemie, this item allows it to Mega Evolve in battle.",
    },
    "shaymizardxite": {
        id: "shaymizardxite",
        name: "shaymizardxite",
        megaStone: "shaymizardx-Mega",
        megaEvolves: "shaymizardx",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a shaymizardx, this item allows it to Mega Evolve in battle.",
    },
    "shaymizardyite": {
        id: "shaymizardyite",
        name: "shaymizardyite",
        megaStone: "shaymizardy-Mega",
        megaEvolves: "shaymizardy",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a shaymizardy, this item allows it to Mega Evolve in battle.",
    },
    "hazardxite": {
        id: "hazardxite",
        name: "hazardxite",
        megaStone: "hazardx-Mega",
        megaEvolves: "hazardx",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a hazardx, this item allows it to Mega Evolve in battle.",
    },
    "hazardyite": {
        id: "hazardyite",
        name: "hazardyite",
        megaStone: "hazardy-Mega",
        megaEvolves: "hazardy",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a hazardy, this item allows it to Mega Evolve in battle.",
    },
    "jellivoirite": {
        id: "jellivoirite",
        name: "metabatite",
        spritenum: 594,

        megaStone: "jellivoir-Mega",
        megaEvolves: "jellivoir",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a jellivoir, this item allows it to Mega Evolve in battle.",
    },
    "metabatite": {
        id: "metabatite",
        name: "metabatite",
        spritenum: 594,

        megaStone: "metabat-Mega",
        megaEvolves: "metabat",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a metabat, this item allows it to Mega Evolve in battle.",
    },
    "dartiosite": {
        id: "dartiosite",
        name: "dartiosite",
        spritenum: 594,

        megaStone: "dartios-Mega",
        megaEvolves: "dartios",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a dartios, this item allows it to Mega Evolve in battle.",
    },
    "banegrossxite": {
        id: "banegrossxite",
        name: "banegrossxite",
        spritenum: 594,

        megaStone: "banegrossx-Mega",
        megaEvolves: "banegrossx",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a banegrossx, this item allows it to Mega Evolve in battle.",
    },
    "banegrossyite": {
        id: "banegrossyite",
        name: "banegrossyite",
        spritenum: 595,

        megaStone: "banegrossy-Mega",
        megaEvolves: "banegrossy",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a banegrossy, this item allows it to Mega Evolve in battle.",
    },
    "herasirhite": {
        id: "herasirhite",
        name: "herasirhite",
        spritenum: 696,

        megaStone: "herasirh-Mega",
        megaEvolves: "herasirh",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a herasirh, this item allows it to Mega Evolve in battle.",
    },
    "herasirpite": {
        id: "herasirpite",
        name: "herasirpite",
        megaStone: "herasirp-Mega",
        megaEvolves: "herasirp",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a herasirp, this item allows it to Mega Evolve in battle.",
    },
    "mismagivoirite": {
        id: "mismagivoirite",
        name: "mismagivoirite",
        megaStone: "mismagivoir-Mega",
        megaEvolves: "mismagivoir",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a mismagivoir, this item allows it to Mega Evolve in battle.",
    },
    "manaite": {
        id: "manaite",
        name: "manaite",
        megaStone: "mana-Mega",
        megaEvolves: "mana",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a mana, this item allows it to Mega Evolve in battle.",
    },
    "swankite": {
        id: "swankite",
        name: "swankite",
        megaStone: "swank-Mega",
        megaEvolves: "swank",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a swank, this item allows it to Mega Evolve in battle.",
    },
    "sablemimezite": {
        id: "sablemimezite",
        name: "sablemimezite",
        megaStone: "sablemimez-Mega",
        megaEvolves: "sablemimez",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a sablemimez, this item allows it to Mega Evolve in battle.",
    },
    "houndlionite": {
        id: "houndlionite",
        name: "houndlionite",
        megaStone: "houndlion-Mega",
        megaEvolves: "houndlion",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a houndlion, this item allows it to Mega Evolve in battle.",
    },
    "loppeyexite": {
        id: "loppeyexite",
        name: "loppeyexite",
        megaStone: "loppeyex-Mega",
        megaEvolves: "loppeyex",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a loppeyex, this item allows it to Mega Evolve in battle.",
    },
    "loppeyeyite": {
        id: "loppeyeyite",
        name: "loppeyeyite",
        megaStone: "loppeyey-Mega",
        megaEvolves: "loppeyey",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a loppeyey, this item allows it to Mega Evolve in battle.",
    },
    "peatranite": {
        id: "peatranite",
        name: "peatranite",
        megaStone: "peatran-Mega",
        megaEvolves: "peatran",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a peatran, this item allows it to Mega Evolve in battle.",
    },
    "manatarite": {
        id: "manatarite",
        name: "manatarite",
        megaStone: "manatar-Mega",
        megaEvolves: "manatar",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a manatar, this item allows it to Mega Evolve in battle.",
    },
    "aurotoiseite": {
        id: "aurotoiseite",
        name: "aurotoiseite",
        megaStone: "aurotoise-Mega",
        megaEvolves: "aurotoise",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a aurotoise, this item allows it to Mega Evolve in battle.",
    },
    "metsirmite": {
        id: "metsirmite",
        name: "metsirmite",
        megaStone: "metsirm-Mega",
        megaEvolves: "metsirm",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a metsirm, this item allows it to Mega Evolve in battle.",
    },
    "metsirpite": {
        id: "metsirpite",
        name: "metsirpite",
        megaStone: "metsirp-Mega",
        megaEvolves: "metsirp",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a metsirp, this item allows it to Mega Evolve in battle.",
    },
    "houdiniite": {
        id: "houdiniite",
        name: "houdiniite",
        megaStone: "houdini-Mega",
        megaEvolves: "houdini",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a houdini, this item allows it to Mega Evolve in battle.",
    },
    "shotite": {
        id: "shotite",
        name: "shotite",
        megaStone: "shot-Mega",
        megaEvolves: "shot",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a shot, this item allows it to Mega Evolve in battle.",
    },
    "mampharosmite": {
        id: "mampharosmite",
        name: "mampharosmite",
        megaStone: "mampharosm-Mega",
        megaEvolves: "mampharosm",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a mampharosm, this item allows it to Mega Evolve in battle.",
    },
    "mampharosaite": {
        id: "mampharosaite",
        name: "mampharosaite",
        megaStone: "mampharosa-Mega",
        megaEvolves: "mampharosa",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a mampharosa, this item allows it to Mega Evolve in battle.",
    },
    "entariaite": {
        id: "entariaite",
        name: "entariaite",
        megaStone: "entaria-Mega",
        megaEvolves: "entaria",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a entaria, this item allows it to Mega Evolve in battle.",
    },
    "blasterainite": {
        id: "blasterainite",
        name: "blasterainite",
        megaStone: "blasterain-Mega",
        megaEvolves: "blasterain",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a blasterain, this item allows it to Mega Evolve in battle.",
    },
    "dianbroite": {
        id: "dianbroite",
        name: "dianbroite",
        megaStone: "dianbro-Mega",
        megaEvolves: "dianbro",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a dianbro, this item allows it to Mega Evolve in battle.",
    },
    "lagiite": {
        id: "lagiite",
        name: "lagiite",
        megaStone: "lagi-Mega",
        megaEvolves: "lagi",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a lagi, this item allows it to Mega Evolve in battle.",
    },
    "lopunniniite": {
        id: "lopunniniite",
        name: "lopunniniite",
        megaStone: "lopunnini-Mega",
        megaEvolves: "lopunnini",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a lopunnini, this item allows it to Mega Evolve in battle.",
    },
    "aeroraptorite": {
        id: "aeroraptorite",
        name: "aeroraptorite",
        megaStone: "aeroraptor-Mega",
        megaEvolves: "aeroraptor",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a aeroraptor, this item allows it to Mega Evolve in battle.",
    },
    "lucasollite": {
        id: "lucasollite",
        name: "lucasollite",
        megaStone: "lucasoll-Mega",
        megaEvolves: "lucasoll",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a lucasoll, this item allows it to Mega Evolve in battle.",
    },
    "lucasolaite": {
        id: "lucasolaite",
        name: "sceptilusaurxite",
        spritenum: 594,

        megaStone: "lucasola-Mega",
        megaEvolves: "lucasola",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a lucasola, this item allows it to Mega Evolve in battle.",
    },
    "sceptilusaurxite": {
        id: "sceptilusaurxite",
        name: "sceptilusaurxite",
        spritenum: 594,

        megaStone: "sceptilusaurx-Mega",
        megaEvolves: "sceptilusaurx",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a sceptilusaurx, this item allows it to Mega Evolve in battle.",
    },
    "sceptilusauryite": {
        id: "sceptilusauryite",
        name: "sceptilusauryite",
        spritenum: 594,

        megaStone: "sceptilusaury-Mega",
        megaEvolves: "sceptilusaury",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a sceptilusaury, this item allows it to Mega Evolve in battle.",
    },
    "houndectricmite": {
        id: "houndectricmite",
        name: "houndectricmite",
        spritenum: 594,

        megaStone: "houndectricm-Mega",
        megaEvolves: "houndectricm",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a houndectricm, this item allows it to Mega Evolve in battle.",
    },
    "houndectrichite": {
        id: "houndectrichite",
        name: "houndectrichite",
        spritenum: 595,

        megaStone: "houndectrich-Mega",
        megaEvolves: "houndectrich",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a houndectrich, this item allows it to Mega Evolve in battle.",
    },
    "exdoomite": {
        id: "exdoomite",
        name: "exdoomite",
        spritenum: 696,

        megaStone: "exdoom-Mega",
        megaEvolves: "exdoom",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a exdoom, this item allows it to Mega Evolve in battle.",
    },
    "gyaramencesite": {
        id: "gyaramencesite",
        name: "gyaramencesite",
        megaStone: "gyaramences-Mega",
        megaEvolves: "gyaramences",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a gyaramences, this item allows it to Mega Evolve in battle.",
    },
    "gyaramencegite": {
        id: "gyaramencegite",
        name: "gyaramencegite",
        megaStone: "gyaramenceg-Mega",
        megaEvolves: "gyaramenceg",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a gyaramenceg, this item allows it to Mega Evolve in battle.",
    },
    "thunderblastite": {
        id: "thunderblastite",
        name: "thunderblastite",
        megaStone: "thunderblast-Mega",
        megaEvolves: "thunderblast",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a thunderblast, this item allows it to Mega Evolve in battle.",
    },
    "zaggronite": {
        id: "zaggronite",
        name: "zaggronite",
        megaStone: "zaggron-Mega",
        megaEvolves: "zaggron",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a zaggron, this item allows it to Mega Evolve in battle.",
    },
    "eruptionite": {
        id: "eruptionite",
        name: "eruptionite",
        megaStone: "eruption-Mega",
        megaEvolves: "eruption",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a eruption, this item allows it to Mega Evolve in battle.",
    },
    "sickleite": {
        id: "sickleite",
        name: "sickleite",
        megaStone: "sickle-Mega",
        megaEvolves: "sickle",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a sickle, this item allows it to Mega Evolve in battle.",
    },
    "darkchompite": {
        id: "darkchompite",
        name: "darkchompite",
        megaStone: "darkchomp-Mega",
        megaEvolves: "darkchomp",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a darkchomp, this item allows it to Mega Evolve in battle.",
    },
    "crustlecrossite": {
        id: "crustlecrossite",
        name: "crustlecrossite",
        megaStone: "crustlecross-Mega",
        megaEvolves: "crustlecross",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a crustlecross, this item allows it to Mega Evolve in battle.",
    },
    "avaizardxite": {
        id: "avaizardxite",
        name: "avaizardxite",
        megaStone: "avaizardx-Mega",
        megaEvolves: "avaizardx",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a avaizardx, this item allows it to Mega Evolve in battle.",
    },
    "avaizardyite": {
        id: "avaizardyite",
        name: "avaizardyite",
        megaStone: "avaizardy-Mega",
        megaEvolves: "avaizardy",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a avaizardy, this item allows it to Mega Evolve in battle.",
    },
    "alakariolite": {
        id: "alakariolite",
        name: "alakariolite",
        megaStone: "alakariol-Mega",
        megaEvolves: "alakariol",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a alakariol, this item allows it to Mega Evolve in battle.",
    },
    "alakarioaite": {
        id: "alakarioaite",
        name: "alakarioaite",
        megaStone: "alakarioa-Mega",
        megaEvolves: "alakarioa",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a alakarioa, this item allows it to Mega Evolve in battle.",
    },
    "cazantorite": {
        id: "cazantorite",
        name: "cazantorite",
        megaStone: "cazantor-Mega",
        megaEvolves: "cazantor",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a cazantor, this item allows it to Mega Evolve in battle.",
    },
    "galletegite": {
        id: "galletegite",
        name: "galletegite",
        megaStone: "galleteg-Mega",
        megaEvolves: "galleteg",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a galleteg, this item allows it to Mega Evolve in battle.",
    },
    "galletebite": {
        id: "galletebite",
        name: "galletebite",
        megaStone: "galleteb-Mega",
        megaEvolves: "galleteb",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a galleteb, this item allows it to Mega Evolve in battle.",
    },
    "steelthornite": {
        id: "steelthornite",
        name: "steelthornite",
        megaStone: "steelthorn-Mega",
        megaEvolves: "steelthorn",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a steelthorn, this item allows it to Mega Evolve in battle.",
    },
    "scraftiaite": {
        id: "scraftiaite",
        name: "scraftiaite",
        megaStone: "scraftia-Mega",
        megaEvolves: "scraftia",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a scraftia, this item allows it to Mega Evolve in battle.",
    },
    "thundersaurusite": {
        id: "thundersaurusite",
        name: "thundersaurusite",
        megaStone: "thundersaurus-Mega",
        megaEvolves: "thundersaurus",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a thundersaurus, this item allows it to Mega Evolve in battle.",
    },
    "lopunneite": {
        id: "lopunneite",
        name: "lopunneite",
        megaStone: "lopunne-Mega",
        megaEvolves: "lopunne",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a lopunne, this item allows it to Mega Evolve in battle.",
    },
    "hootoiseite": {
        id: "hootoiseite",
        name: "hootoiseite",
        megaStone: "hootoise-Mega",
        megaEvolves: "hootoise",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a hootoise, this item allows it to Mega Evolve in battle.",
    },
    "metanleeite": {
        id: "metanleeite",
        name: "metanleeite",
        megaStone: "metanlee-Mega",
        megaEvolves: "metanlee",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a metanlee, this item allows it to Mega Evolve in battle.",
    },
    "heebleyeite": {
        id: "heebleyeite",
        name: "heebleyeite",
        megaStone: "heebleye-Mega",
        megaEvolves: "heebleye",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a heebleye, this item allows it to Mega Evolve in battle.",
    },
    "draegaradosite": {
        id: "draegaradosite",
        name: "draegaradosite",
        megaStone: "draegarados-Mega",
        megaEvolves: "draegarados",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a draegarados, this item allows it to Mega Evolve in battle.",
    },
    "babuffeite": {
        id: "babuffeite",
        name: "babuffeite",
        megaStone: "babuffe-Mega",
        megaEvolves: "babuffe",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a babuffe, this item allows it to Mega Evolve in battle.",
    },
    "glalionzite": {
        id: "glalionzite",
        name: "gallatrossite",
        spritenum: 594,

        megaStone: "glalionz-Mega",
        megaEvolves: "glalionz",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a glalionz, this item allows it to Mega Evolve in battle.",
    },
    "gallatrossite": {
        id: "gallatrossite",
        name: "gallatrossite",
        spritenum: 594,

        megaStone: "gallatross-Mega",
        megaEvolves: "gallatross",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a gallatross, this item allows it to Mega Evolve in battle.",
    },
    "landiaite": {
        id: "landiaite",
        name: "landiaite",
        spritenum: 594,

        megaStone: "landia-Mega",
        megaEvolves: "landia",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a landia, this item allows it to Mega Evolve in battle.",
    },
    "sceptetteeternalite": {
        id: "sceptetteeternalite",
        name: "sceptetteeternalite",
        spritenum: 594,

        megaStone: "sceptetteeternal-Mega",
        megaEvolves: "sceptetteeternal",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a sceptetteeternal, this item allows it to Mega Evolve in battle.",
    },
    "baelite": {
        id: "baelite",
        name: "baelite",
        spritenum: 595,

        megaStone: "bael-Mega",
        megaEvolves: "bael",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a bael, this item allows it to Mega Evolve in battle.",
    },
    "tyrankingite": {
        id: "tyrankingite",
        name: "tyrankingite",
        spritenum: 696,

        megaStone: "tyranking-Mega",
        megaEvolves: "tyranking",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a tyranking, this item allows it to Mega Evolve in battle.",
    },
    "mentorite": {
        id: "mentorite",
        name: "mentorite",
        megaStone: "mentor-Mega",
        megaEvolves: "mentor",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a mentor, this item allows it to Mega Evolve in battle.",
    },
    "elektraite": {
        id: "elektraite",
        name: "elektraite",
        megaStone: "elektra-Mega",
        megaEvolves: "elektra",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a elektra, this item allows it to Mega Evolve in battle.",
    },
    "probsite": {
        id: "probsite",
        name: "probsite",
        megaStone: "probs-Mega",
        megaEvolves: "probs",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a probs, this item allows it to Mega Evolve in battle.",
    },
    "lucashadowite": {
        id: "lucashadowite",
        name: "lucashadowite",
        megaStone: "lucashadow-Mega",
        megaEvolves: "lucashadow",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a lucashadow, this item allows it to Mega Evolve in battle.",
    },
    "kyrauremite": {
        id: "kyrauremite",
        name: "kyrauremite",
        megaStone: "kyraurem-Mega",
        megaEvolves: "kyraurem",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a kyraurem, this item allows it to Mega Evolve in battle.",
    },
    "xurkivoirite": {
        id: "xurkivoirite",
        name: "xurkivoirite",
        megaStone: "xurkivoir-Mega",
        megaEvolves: "xurkivoir",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a xurkivoir, this item allows it to Mega Evolve in battle.",
    },
    "scrapunnyite": {
        id: "scrapunnyite",
        name: "scrapunnyite",
        megaStone: "scrapunny-Mega",
        megaEvolves: "scrapunny",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a scrapunny, this item allows it to Mega Evolve in battle.",
    },
    "crematoriaxite": {
        id: "crematoriaxite",
        name: "crematoriaxite",
        megaStone: "crematoriax-Mega",
        megaEvolves: "crematoriax",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a crematoriax, this item allows it to Mega Evolve in battle.",
    },
    "crematoriayite": {
        id: "crematoriayite",
        name: "crematoriayite",
        megaStone: "crematoriay-Mega",
        megaEvolves: "crematoriay",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a crematoriay, this item allows it to Mega Evolve in battle.",
    },
    "crematoriasemataryxite": {
        id: "crematoriasemataryxite",
        name: "crematoriasemataryxite",
        megaStone: "crematoriasemataryx-Mega",
        megaEvolves: "crematoriasemataryx",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a crematoriasemataryx, this item allows it to Mega Evolve in battle.",
    },
    "crematoriasemataryyite": {
        id: "crematoriasemataryyite",
        name: "crematoriasemataryyite",
        megaStone: "crematoriasemataryy-Mega",
        megaEvolves: "crematoriasemataryy",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a crematoriasemataryy, this item allows it to Mega Evolve in battle.",
    },
    "slampaite": {
        id: "slampaite",
        name: "slampaite",
        megaStone: "slampa-Mega",
        megaEvolves: "slampa",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a slampa, this item allows it to Mega Evolve in battle.",
    },
    "decedactylite": {
        id: "decedactylite",
        name: "decedactylite",
        megaStone: "decedactyl-Mega",
        megaEvolves: "decedactyl",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a decedactyl, this item allows it to Mega Evolve in battle.",
    },
    "aero dakoite": {
        id: "aero dakoite",
        name: "aero dakoite",
        megaStone: "aero dako-Mega",
        megaEvolves: "aero dako",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a aero dako, this item allows it to Mega Evolve in battle.",
    },
    "venustoisegreenite": {
        id: "venustoisegreenite",
        name: "venustoisegreenite",
        megaStone: "venustoisegreen-Mega",
        megaEvolves: "venustoisegreen",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a venustoisegreen, this item allows it to Mega Evolve in battle.",
    },
    "venustoiseblueite": {
        id: "venustoiseblueite",
        name: "venustoiseblueite",
        megaStone: "venustoiseblue-Mega",
        megaEvolves: "venustoiseblue",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a venustoiseblue, this item allows it to Mega Evolve in battle.",
    },
    "pheraliescipodite": {
        id: "pheraliescipodite",
        name: "pheraliescipodite",
        megaStone: "pheraliescipod-Mega",
        megaEvolves: "pheraliescipod",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a pheraliescipod, this item allows it to Mega Evolve in battle.",
    },
    "necrozmeruptite": {
        id: "necrozmeruptite",
        name: "necrozmeruptite",
        megaStone: "necrozmerupt-Mega",
        megaEvolves: "necrozmerupt",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a necrozmerupt, this item allows it to Mega Evolve in battle.",
    },
    "banekyuite": {
        id: "banekyuite",
        name: "banekyuite",
        megaStone: "banekyu-Mega",
        megaEvolves: "banekyu",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a banekyu, this item allows it to Mega Evolve in battle.",
    },
    "heratanaite": {
        id: "heratanaite",
        name: "heratanaite",
        megaStone: "heratana-Mega",
        megaEvolves: "heratana",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a heratana, this item allows it to Mega Evolve in battle.",
    },
    "axatreeite": {
        id: "axatreeite",
        name: "axatreeite",
        megaStone: "axatree-Mega",
        megaEvolves: "axatree",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a axatree, this item allows it to Mega Evolve in battle.",
    },
    "altellowite": {
        id: "altellowite",
        name: "altellowite",
        megaStone: "altellow-Mega",
        megaEvolves: "altellow",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a altellow, this item allows it to Mega Evolve in battle.",
    },
    "sablegigasite": {
        id: "sablegigasite",
        name: "sablegigasite",
        megaStone: "sablegigas-Mega",
        megaEvolves: "sablegigas",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a Sablegigas, this item allows it to Mega Evolve in battle.",
    },
    "abomasorusite": {
        id: "abomasorusite",
        name: "abomasorusite",
        megaStone: "abomasorus-Mega",
        megaEvolves: "abomasorus",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a abomasorus, this item allows it to Mega Evolve in battle.",
    },
    "toxicarioite": {
        id: "toxicarioite",
        name: "blampaite",
        spritenum: 594,

        megaStone: "toxicario-Mega",
        megaEvolves: "toxicario",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a toxicario, this item allows it to Mega Evolve in battle.",
    },
    "blampaite": {
        id: "blampaite",
        name: "blampaite",
        spritenum: 594,

        megaStone: "blampa-Mega",
        megaEvolves: "blampa",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a blampa, this item allows it to Mega Evolve in battle.",
    },
    "entirite": {
        id: "entirite",
        name: "entirite",
        spritenum: 594,

        megaStone: "entir-Mega",
        megaEvolves: "entir",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a entir, this item allows it to Mega Evolve in battle.",
    },
    "gardelegoite": {
        id: "gardelegoite",
        name: "gardelegoite",
        spritenum: 594,

        megaStone: "gardelego-Mega",
        megaEvolves: "gardelego",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a gardelego, this item allows it to Mega Evolve in battle.",
    },
    "maltarioneite": {
        id: "maltarioneite",
        name: "maltarioneite",
        spritenum: 595,

        megaStone: "maltarione-Mega",
        megaEvolves: "maltarione",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a maltarione, this item allows it to Mega Evolve in battle.",
    },
    "guzzbroite": {
        id: "guzzbroite",
        name: "guzzbroite",
        spritenum: 696,

        megaStone: "guzzbro-Mega",
        megaEvolves: "guzzbro",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a guzzbro, this item allows it to Mega Evolve in battle.",
    },
    "peridotite": {
        id: "peridotite",
        name: "peridotite",
        megaStone: "peridot-Mega",
        megaEvolves: "peridot",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a peridot, this item allows it to Mega Evolve in battle.",
    },
    "alohaite": {
        id: "alohaite",
        name: "alohaite",
        megaStone: "aloha-Mega",
        megaEvolves: "aloha",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a aloha, this item allows it to Mega Evolve in battle.",
    },
    "kyupedoite": {
        id: "kyupedoite",
        name: "kyupedoite",
        megaStone: "kyupedo-Mega",
        megaEvolves: "kyupedo",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a kyupedo, this item allows it to Mega Evolve in battle.",
    },
    "luauite": {
        id: "luauite",
        name: "luauite",
        megaStone: "luau-Mega",
        megaEvolves: "luau",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a luau, this item allows it to Mega Evolve in battle.",
    },
    "swampterraite": {
        id: "swampterraite",
        name: "swampterraite",
        megaStone: "swampterra-Mega",
        megaEvolves: "swampterra",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a swampterra, this item allows it to Mega Evolve in battle.",
    },
    "alteyerite": {
        id: "alteyerite",
        name: "alteyerite",
        megaStone: "alteyer-Mega",
        megaEvolves: "alteyer",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a alteyer, this item allows it to Mega Evolve in battle.",
    },
    "notite": {
        id: "notite",
        name: "notite",
        megaStone: "not-Mega",
        megaEvolves: "not",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a not, this item allows it to Mega Evolve in battle.",
    },
    "joltsolite": {
        id: "joltsolite",
        name: "joltsolite",
        megaStone: "joltsol-Mega",
        megaEvolves: "joltsol",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a joltsol, this item allows it to Mega Evolve in battle.",
    },
    "altearniaite": {
        id: "altearniaite",
        name: "altearniaite",
        megaStone: "altearnia-Mega",
        megaEvolves: "altearnia",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a altearnia, this item allows it to Mega Evolve in battle.",
    },
    "regigotite": {
        id: "regigotite",
        name: "regigotite",
        megaStone: "regigot-Mega",
        megaEvolves: "regigot",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a regigot, this item allows it to Mega Evolve in battle.",
    },
    "sakamakiite": {
        id: "sakamakiite",
        name: "sakamakiite",
        megaStone: "sakamaki-Mega",
        megaEvolves: "sakamaki",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a sakamaki, this item allows it to Mega Evolve in battle.",
    },
    "sylviasite": {
        id: "sylviasite",
        name: "sylviasite",
        megaStone: "sylvias-Mega",
        megaEvolves: "sylvias",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a sylvias, this item allows it to Mega Evolve in battle.",
    },
    "celesirite": {
        id: "celesirite",
        name: "celesirite",
        megaStone: "celesir-Mega",
        megaEvolves: "celesir",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a celesir, this item allows it to Mega Evolve in battle.",
    },
    "absokoite": {
        id: "absokoite",
        name: "absokoite",
        megaStone: "absoko-Mega",
        megaEvolves: "absoko",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a absoko, this item allows it to Mega Evolve in battle.",
    },
    "giradinoite": {
        id: "giradinoite",
        name: "giradinoite",
        megaStone: "giradino-Mega",
        megaEvolves: "giradino",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a giradino, this item allows it to Mega Evolve in battle.",
    },
    "xurkizardxite": {
        id: "xurkizardxite",
        name: "xurkizardxite",
        megaStone: "xurkizardx-Mega",
        megaEvolves: "xurkizardx",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a xurkizardx, this item allows it to Mega Evolve in battle.",
    },
    "xurkizardyite": {
        id: "xurkizardyite",
        name: "xurkizardyite",
        megaStone: "xurkizardy-Mega",
        megaEvolves: "xurkizardy",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a xurkizardy, this item allows it to Mega Evolve in battle.",
    },
    "dramasnowite": {
        id: "dramasnowite",
        name: "dramasnowite",
        megaStone: "dramasnow-Mega",
        megaEvolves: "dramasnow",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a dramasnow, this item allows it to Mega Evolve in battle.",
    },
    "slowmarinaite": {
        id: "slowmarinaite",
        name: "slowmarinaite",
        megaStone: "slowmarina-Mega",
        megaEvolves: "slowmarina",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a slowmarina, this item allows it to Mega Evolve in battle.",
    },
    "kartariaite": {
        id: "kartariaite",
        name: "kartariaite",
        megaStone: "kartaria-Mega",
        megaEvolves: "kartaria",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a kartaria, this item allows it to Mega Evolve in battle.",
    },
    "altarbatite": {
        id: "altarbatite",
        name: "altarbatite",
        megaStone: "altarbat-Mega",
        megaEvolves: "altarbat",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a altarbat, this item allows it to Mega Evolve in battle.",
    },
    "heatariaite": {
        id: "heatariaite",
        name: "heatariaite",
        megaStone: "heataria-Mega",
        megaEvolves: "heataria",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a heataria, this item allows it to Mega Evolve in battle.",
    },
    "gardecunoite": {
        id: "gardecunoite",
        name: "gardecunoite",
        megaStone: "gardecuno-Mega",
        megaEvolves: "gardecuno",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a gardecuno, this item allows it to Mega Evolve in battle.",
    },
    "audalaite": {
        id: "audalaite",
        name: "audalaite",
        megaStone: "audala-Mega",
        megaEvolves: "audala",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a audala, this item allows it to Mega Evolve in battle.",
    },
    "triagonalite": {
        id: "triagonalite",
        name: "tyrazmaite",
        spritenum: 594,

        megaStone: "triagonal-Mega",
        megaEvolves: "triagonal",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a triagonal, this item allows it to Mega Evolve in battle.",
    },
    "tyrazmaite": {
        id: "tyrazmaite",
        name: "tyrazmaite",
        spritenum: 594,

        megaStone: "tyrazma-Mega",
        megaEvolves: "tyrazma",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a tyrazma, this item allows it to Mega Evolve in battle.",
    },
    "nintwoxite": {
        id: "nintwoxite",
        name: "nintwoxite",
        spritenum: 594,

        megaStone: "nintwox-Mega",
        megaEvolves: "nintwox",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a nintwox, this item allows it to Mega Evolve in battle.",
    },
    "nintwoyite": {
        id: "nintwoyite",
        name: "nintwoyite",
        spritenum: 594,

        megaStone: "nintwoy-Mega",
        megaEvolves: "nintwoy",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a nintwoy, this item allows it to Mega Evolve in battle.",
    },
    "kyzorite": {
        id: "kyzorite",
        name: "kyzorite",
        spritenum: 595,

        megaStone: "kyzor-Mega",
        megaEvolves: "kyzor",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a kyzor, this item allows it to Mega Evolve in battle.",
    },
    "xurkinoite": {
        id: "xurkinoite",
        name: "xurkinoite",
        spritenum: 696,

        megaStone: "xurkino-Mega",
        megaEvolves: "xurkino",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a xurkino, this item allows it to Mega Evolve in battle.",
    },
    "altarigardeite": {
        id: "altarigardeite",
        name: "altarigardeite",
        megaStone: "altarigarde-Mega",
        megaEvolves: "altarigarde",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a altarigarde, this item allows it to Mega Evolve in battle.",
    },
    "garzoneite": {
        id: "garzoneite",
        name: "garzoneite",
        megaStone: "garzone-Mega",
        megaEvolves: "garzone",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a garzone, this item allows it to Mega Evolve in battle.",
    },
    "trampolineite": {
        id: "trampolineite",
        name: "trampolineite",
        megaStone: "trampoline-Mega",
        megaEvolves: "trampoline",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a trampoline, this item allows it to Mega Evolve in battle.",
    },
    "stakeyeite": {
        id: "stakeyeite",
        name: "stakeyeite",
        megaStone: "stakeye-Mega",
        megaEvolves: "stakeye",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a stakeye, this item allows it to Mega Evolve in battle.",
    },
    "auroritarite": {
        id: "auroritarite",
        name: "auroritarite",
        megaStone: "auroritar-Mega",
        megaEvolves: "auroritar",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a auroritar, this item allows it to Mega Evolve in battle.",
    },
    "gameraxite": {
        id: "gameraxite",
        name: "gameraxite",
        megaStone: "gamerax-Mega",
        megaEvolves: "gamerax",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a gamerax, this item allows it to Mega Evolve in battle.",
    },
    "gamerayite": {
        id: "gamerayite",
        name: "gamerayite",
        megaStone: "gameray-Mega",
        megaEvolves: "gameray",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a gameray, this item allows it to Mega Evolve in battle.",
    },
    "tyrannosaurusxite": {
        id: "tyrannosaurusxite",
        name: "tyrannosaurusxite",
        megaStone: "tyrannosaurusx-Mega",
        megaEvolves: "tyrannosaurusx",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a tyrannosaurusx, this item allows it to Mega Evolve in battle.",
    },
    "tyrannosaurusyite": {
        id: "tyrannosaurusyite",
        name: "tyrannosaurusyite",
        megaStone: "tyrannosaurusy-Mega",
        megaEvolves: "tyrannosaurusy",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a tyrannosaurusy, this item allows it to Mega Evolve in battle.",
    },
    "scizionite": {
        id: "scizionite",
        name: "scizionite",
        megaStone: "scizion-Mega",
        megaEvolves: "scizion",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a scizion, this item allows it to Mega Evolve in battle.",
    },
    "fluorineite": {
        id: "fluorineite",
        name: "fluorineite",
        megaStone: "fluorine-Mega",
        megaEvolves: "fluorine",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a fluorine, this item allows it to Mega Evolve in battle.",
    },
    "noivianite": {
        id: "noivianite",
        name: "noivianite",
        megaStone: "noivian-Mega",
        megaEvolves: "noivian",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a noivian, this item allows it to Mega Evolve in battle.",
    },
    "blazelite": {
        id: "blazelite",
        name: "blazelite",
        megaStone: "blazel-Mega",
        megaEvolves: "blazel",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a blazel, this item allows it to Mega Evolve in battle.",
    },
    "claytarite": {
        id: "claytarite",
        name: "claytarite",
        megaStone: "claytar-Mega",
        megaEvolves: "claytar",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a claytar, this item allows it to Mega Evolve in battle.",
    },
    "theyeite": {
        id: "theyeite",
        name: "theyeite",
        megaStone: "theye-Mega",
        megaEvolves: "theye",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a theye, this item allows it to Mega Evolve in battle.",
    },
    "masterpieceite": {
        id: "masterpieceite",
        name: "masterpieceite",
        megaStone: "masterpiece-Mega",
        megaEvolves: "masterpiece",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a masterpiece, this item allows it to Mega Evolve in battle.",
    },
    "celemenceite": {
        id: "celemenceite",
        name: "celemenceite",
        megaStone: "celemence-Mega",
        megaEvolves: "celemence",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a celemence, this item allows it to Mega Evolve in battle.",
    },
    "saldreigonceite": {
        id: "saldreigonceite",
        name: "saldreigonceite",
        megaStone: "saldreigonce-Mega",
        megaEvolves: "saldreigonce",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a saldreigonce, this item allows it to Mega Evolve in battle.",
    },
    "salasaurite": {
        id: "salasaurite",
        name: "salasaurite",
        megaStone: "salasaur-Mega",
        megaEvolves: "salasaur",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a salasaur, this item allows it to Mega Evolve in battle.",
    },
    "centenarianite": {
        id: "centenarianite",
        name: "centenarianite",
        megaStone: "centenarian-Mega",
        megaEvolves: "centenarian",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a centenarian, this item allows it to Mega Evolve in battle.",
    },
    "amdremayreite": {
        id: "amdremayreite",
        name: "amdremayreite",
        megaStone: "amdremayre-Mega",
        megaEvolves: "amdremayre",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a amdremayre, this item allows it to Mega Evolve in battle.",
    },
};
