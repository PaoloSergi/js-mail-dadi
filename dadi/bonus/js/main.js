const diceOne = '<i class="face1 fas fa-dice-one"></i>';
const diceTwo = '<i class="face2 fas fa-dice-two"></i>';
const diceThree = '<i class="face3 fas fa-dice-three"></i>';
const diceFour = '<i class="face4 fas fa-dice-four"></i>';
const diceFive = '<i class="face5 fas fa-dice-five"></i>';
const diceSix = '<i class="face6 fas fa-dice-six"></i>';

const dices = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];

for (let i=1; i<=6; i++){
    const playerBet = document.querySelector(`.bet .dice .face${i}`);

    playerBet.addEventListener ('click',
        function(){
            let playerDice = document.querySelector(`.you .dice`).innerHTML = dices[i - 1];

            let playerNumber = i;
            let cpuNumber;

            do {
                cpuNumber = Math.floor((Math.random()*10) + 1);
            } while (cpuNumber >=6);

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
}