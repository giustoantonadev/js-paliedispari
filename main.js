console.log('it works');
/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/
// chiedi all'utente di inserire una parola
const user_word = prompt('Type a word!!!')
// funzione per leggere la parola al contrario
function itsPalindrome(word) {
    // creiamo una variabile per la parola al contrario    
    let reversed_word = ''
    // facciamo un ciclo for per leggere la parola
    for (let i = word.length - 1; i >= 0; i--) {
        // prende il carattere alla posizione index(i) della variabile word
        const char = word[i]
        // aggiunge quel carattere alla fine della variabile reversed_word
        reversed_word += char
    }
    // confronta la parola(word) iniziale e vede se è identica alla parola al contrario (reversed_word)
    // esattamente come fare un IF con valore booleano
    return word === reversed_word;
}
// stampa la parola inserita dall'utente
console.log(user_word);
// variabile con il risultato della funzione ItsPalindrome, valore booleano
const itsPalindromeWord = itsPalindrome(user_word);
console.log(itsPalindromeWord);

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// chiedi all'utente di scegliere fra pari(even) e dispari(odd)
const even_or_odd_choice = prompt('CHOOSE! Even or Odd?').toLowerCase(); //added tolowercase so the result wont be ruined 'cause case sensitive
// chiedi all'utente di inserire un numero compreso fra 1 e 5
const user_number = Number(prompt("type a number from 1 to 5!"));
// log il numero scelto dall'utente
console.log(user_number);
// funzione per generare un numero casuale compreso fra 1 e 5
function getRandomPcNum(num) {
    return Math.floor(Math.random() * 5) + 1;
}
// crea variabile con il risultato della funzione getRandomPcNum
const pc_number = getRandomPcNum()
// e lo stampa
console.log(pc_number);
// costante totalNumber, cioè somma user_number(numero scelto dall'utente) 
// e pc_number(numero casuale generato dalla funzione precedente)
const totalNumber = user_number + pc_number;
// e lo stampa
console.log(totalNumber);

//funzione per controllare se il numero è pari(even) o dispari(odd)
function isEven(numb) {
    //NOTA: si potrebbe fare anche con * return numb % 2 === 0 *
    if (numb % 2 === 0) {
        //SE il numero diviso per due da resto di 0 è pari
        return true
    } else {
        //ALTRIMENTI è dispari
        return false
    }
}
//variabile con il risultato della funzione isEven, booleano
const evenOrOdd = isEven(totalNumber)
console.log(evenOrOdd);
//funzione per decretare il vincitore 
function whoWins(user_choice, totalNumber) {
    //SE il numero totale è pari(even) E la scelta dell'utente è even(pari), l'utente vince
    if (isEven(totalNumber) && user_choice === "even") {
        return "USER WINS!"
    } else if (!isEven(totalNumber) && user_choice === "odd") {
        //ALTRIMENTI SE il numero totale è dispari(odd) E la scelta dell'utente è odd(dispari), l'utente vince 
        return "USER WINS!"
    } else {
        //ALTRIMENTI il pc vince
        return "PC WINSS!"
    }
}
//variabile con il risultato della funzione whoWins, valore booleano
const winner = whoWins(even_or_odd_choice, totalNumber);
console.log(winner);
