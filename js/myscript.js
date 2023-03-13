// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.



const mailList = ["pincopanco@gmail.com" , "boolean-boy@gmail.com" , "afakemail@fake.com"];

const send = document.getElementById("send-email");
send.addEventListener("click" , checkMail);
const emailCheck = document.getElementById("emailCheck");
emailCheck.classList.remove("d-none");

function checkMail()
{
    let mail = document.getElementById("input-email").value.toLowerCase();

    if (mailList.includes(mail))
    {
        emailCheck.innerHTML= `Mail accettata, benvenuto`;

    }
    else
    {
        emailCheck.innerHTML = `Accesso rifiutato`;
    }
}

const diceButton = document.getElementById("diceButton");
diceButton.addEventListener("click" , diceGame);

function diceGame()
{
    let playerDice = Math.floor(Math.random() * 6 + 1);
    let computerDice = Math.floor(Math.random() * 6 + 1);
    const diceGame = document.getElementById("diceGame");
    diceGame.classList.remove("d-none");

    if(playerDice == computerDice)
    {
        diceGame.innerHTML = `<div class="card my-5"> Hai ottenuto ${playerDice} <br> Il computer ha ottenuto ${computerDice} <br> <h4> Pareggio! :/ </h4> </div>`
    }
    else
    {
        if(playerDice > computerDice)
        {
            diceGame.innerHTML = `<div class="card my-5"> Hai ottenuto ${playerDice} <br> Il computer ha ottenuto ${computerDice} <br> <h4> Hai vinto! :D </h4> </div>`
        }
        else
        {
            diceGame.innerHTML = `<div class="card my-5"> Hai ottenuto ${playerDice} <br> Il computer ha ottenuto ${computerDice} <br> <h4> Hai perso :( </h4> </div>`
        }
    }
}