"use strict";
class Player {
    constructor(name, techniques) {
        this.name = name,
            this.techniques = techniques;
    }
    usingRandomTechnique() {
        let number = Math.random();
        return number;
    }
}
class SonOfAPlayer extends Player {
    constructor(name, techniques, parents) {
        super(name, techniques);
        this.parents = parents;
    }
}
function play({ FirstPlayer, Challenger }) {
    let number = Math.random();
    if (number > 0.5) {
        return FirstPlayer;
    }
    else {
        return Challenger;
    }
}
//return `${FirstPlayer.name} uses ${FirstPlayer.techniques[number1]}`
//return `Neither ${FirstPlayer.name} nor ${Challenger.name} were unable to move!`
let player1 = {
    name: 'Pepe',
    techniques: ['lvl=100', 'hp=775', 'mn=1000']
};
let player2 = new Player('Mauro', ['Study', 'Speedrun Test']);
let player3 = new SonOfAPlayer('Lucas', ['Hardcore Skill', 'Speedrun Game'], ['Marcelo', 'Belén']);
const playersToFight = { FirstPlayer: player2, Challenger: player3 };
let winner = play(playersToFight);
console.log(`${winner.name} is the winner!`);
let player4 = {
    name: 'Jorge',
    techniques: ['Surrender', 'Complain'],
    age: 32,
    // dentro de la variable "player4" de tipo "OnePlayer", implemento el comportamiento del método "showAge" previamente definido
    showAge() {
        return this.age;
    }
};
console.log(`\nPlayer4's age is ${player4.showAge()}`);
//# sourceMappingURL=metodo_en_type.js.map