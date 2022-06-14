// Consegna
// L'utente indica un livello di difficoltà (con un prompt) in base al quale decidiamo il range di numeri possibili del gioco:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito attraverso dei prompt l'utente inserisce un numero alla volta finche il gioco non è finito:
// se il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomba, il gioco finisce con un messaggio di errore
// Altrimenti il gioco va avanti a meno di aver raggiunto il numero massimo di tentativi possibili. In questo caso il gioco finisce con un messaggio di vittoria.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha scelto un numero che non era una bomba.

//Cosa devo svolgere:
//Chiedo il livello di difficoltà
const level = parseInt(prompt('Inserisci il livello di difficoltà (1-2-3):'));

//Stabilisco il range massimo di numeri possibili in base alla difficoltà
let maxRangeNumber;

//Numero Random

//Ad ogni livello assegno un range massimo
switch(level){
    case 1:
        maxRangeNumber = 100;
        break;
    case 2:
        maxRangeNumber = 81;
        break;
    case 3:
        maxRangeNumber = 49;
        break;
    
}

//Variabile bombe
const bombs = generateBombs (16 , 1 , maxRangeNumber);

//Devo generare 16 numeri casuali e inserirli in un array e non ci devo essere numeri uguali

function generateBombs(numberElements,rangeMin,rangeMax){
    const randomarray = [];

    while(randomarray.length < numberElements){
        const random = getRndInteger(rangeMin,rangeMax)
        if(!randomarray.includes(random) ){
            randomarray.push(random);
        }
    }
    console.log(randomarray)
}

//Funzione per i numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
