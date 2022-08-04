class Player {
    constructor(name) {
        this.name = name;
    }

    hitDice() {
        return (Math.floor(Math.random()*6) +1)
    }
}
console.log(Math.floor(Math.random() *6)+1);

class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.counter = 1;
    }

    start() {
        const playerNumber1  = player1.hitDice() + player1.hitDice();
        const playerNumber2 = player2.hitDice() + player2.hitDice();
        if(playerNumber1 > playerNumber2) {
            console.log(`${player1.name} has won with number ${playerNumber1}`);
        } else {
            console.log(`${player2.name} has won with number ${playerNumber2}`);

        }
    }

    startRounds(number) {
        let number1 = 0;
        let number2 = 0;
        for(let i =0;i< number;i++){
            number1+= player1.hitDice();
            number2+= player2.hitDice();
        }
        if(number1 > number2) {
            console.log(`${player1.name} has won with number ${number1}`);
        } else {
            console.log(`${player2.name} has won with number ${number2}`);

        }
    }

   startAnother(number) {
        const playerNumber1  = player1.hitDice() + player1.hitDice();
        const playerNumber2 = player2.hitDice() + player2.hitDice();
        this.counter++
        if(playerNumber1 > playerNumber2) {
            console.log(`${player1.name} has won with number ${playerNumber1}`);
        } else {
            console.log(`${player2.name} has won with number ${playerNumber2}`);

        }

        if(this.counter <= number){
            this.startAnother(number)
        }
    }




}

const player1 = new Player('Jack');
const player2 = new Player('Chack');
const game = new Game(player1, player2);
//game.start();
//game.startRounds(16);
game.startAnother(1);