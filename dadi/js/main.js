const diceOne = '<i class="fas fa-dice-one"></i>';
const diceTwo = '<i class="fas fa-dice-two"></i>';
const diceThree = '<i class="fas fa-dice-three"></i>';
const diceFour = '<i class="fas fa-dice-four"></i>';
const diceFive = '<i class="fas fa-dice-five"></i>';
const diceSix = '<i class="fas fa-dice-six"></i>';

const dices = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];

const playerBet = document.querySelector(`.bet .dice .play`);

playerBet.addEventListener ('click',
    function(){

        let playerNumber;
        let cpuNumber;
        
        do {
            playerNumber = Math.floor((Math.random()*10) + 1);
        } while (playerNumber > 6);

        do {
            cpuNumber = Math.floor((Math.random()*10) + 1);
        } while (cpuNumber > 6);

        let playerDice = document.querySelector(`.you .dice`).innerHTML = dices[playerNumber - 1];
        let cpuDice = document.querySelector(`.cpu .dice`).innerHTML = dices[cpuNumber - 1];

        if (playerNumber>cpuNumber){

            document.querySelector('.you .dice i').style.transform = "scale(1.5)";
            document.querySelector('header h1').innerHTML = "You WIN";

        } else if (playerNumber<cpuNumber){

            document.querySelector('.cpu .dice i').style.transform = "scale(1.5)";
            document.querySelector('header h1').innerHTML = "You LOSE";

        } else {

            document.querySelector('.you .dice i').style.transform = "scale(1.5)";
            document.querySelector('.cpu .dice i').style.transform = "scale(1.5)";

            document.querySelector('header h1').innerHTML = "EVEN";
        }
    }
)