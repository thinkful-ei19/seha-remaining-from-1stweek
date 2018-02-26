'use strict'
//Factory Functions with LOTR
function createCharacter(name, options) {
    return {
        name: name,
        options: nickname, race, origin, attack, defense,
        describe: function (){
            console.log(`${name} is a ${race} from ${origin}.`);

        },

        evaluateFight(character) {
            let x = 0;
            let y = 0;
            if (this.attack > character.defense) {
                x = this.attack - character.defense;
            }
            if (this.defense < character.attack) {
                y = character.attack - this.defense;
            }
            console.log(`Your opponent takes ${x} damage and you receive ${y} damage`);
        }
    }
};

const characters = [
    createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
    createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
    createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
    createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
];
characters.push(createCharacter('Arwen Undomie', 'arwenius', 'half-elf', 'latin', 8, 6));


characters.find(character => character.nickname === 'aragorn').describe();

let onlyHobbits = character.filter(character => character.race === 'Hobbit');
console.log(onlyHobbits);

let attackValue = characters.filter(character => character.attack > 5);
console.log(attackValue);
