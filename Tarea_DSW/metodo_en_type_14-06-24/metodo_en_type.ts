interface BasicPlayer {
  name: string,
  techniques: string[],
  usingRandomTechnique?: () => number
}


class Player implements BasicPlayer {
  name: string
  techniques: string[]
  constructor(name: string, techniques: string[]) {
    this.name = name,
    this.techniques = techniques
  }
  usingRandomTechnique() {
    let number = Math.random()
    return number
  }
}

class SonOfAPlayer extends Player {
  parents?: string[]
  constructor(name:string, techniques:string[], parents?:string[]){
    super(name, techniques)
    this.parents = parents
  }
}

function play({FirstPlayer, Challenger}: PlayersToFight): Player {
  let number = Math.random()
  if (number > 0.5) {
    return FirstPlayer
  } else {
    return Challenger
  }
}

//return `${FirstPlayer.name} uses ${FirstPlayer.techniques[number1]}`
//return `Neither ${FirstPlayer.name} nor ${Challenger.name} were unable to move!`

let player1: BasicPlayer = {
  name: 'Pepe',
  techniques: ['lvl=100', 'hp=775', 'mn=1000']
}

let player2 = new Player('Mauro', ['Study', 'Speedrun Test'])

let player3 = new SonOfAPlayer('Lucas', ['Hardcore Skill', 'Speedrun Game'], ['Marcelo', 'Belén'])

type PlayersToFight = {FirstPlayer: Player, Challenger: SonOfAPlayer}

const playersToFight: PlayersToFight = {FirstPlayer: player2, Challenger: player3}

let winner = play(playersToFight)

console.log(`${winner.name} is the winner!`)

//----------------------------------------------------------------------------------------------------------------------------

type OnePlayer = {
  name: string
  techniques: string[]
  age: number
  showAge: () => number  //Defino el método "showAge" dentro del tipo "OnePlayer", sin embargo no puedo implementar su comportamiento aún
}

let player4: OnePlayer = {
  name: 'Jorge',
  techniques: ['Surrender', 'Complain'],
  age: 32,
  // dentro de la variable "player4" de tipo "OnePlayer", implemento el comportamiento del método "showAge" previamente definido
  showAge() {
    return this.age
  }
}

console.log(`\nPlayer4's age is ${player4.showAge()}`)