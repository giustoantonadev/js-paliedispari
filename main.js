console.log('it works');
/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/
//chiedi all'utente di inserire una parola
const user_word = prompt('Type a word here!')
//funzione per leggere la parola al contrario
function itsPalindrome(word) {
    //creiamo una variabile per la parola al contrario    
    let reversed_word = ''
    //facciamo un ciclo for per leggere la parola
    for (let i = word.length - 1; i >= 0; i--) {
        //prende il carattere alla posizione index(i) della variabile word
        const char = word[i]
        //aggiunge quel carattere alla fine della variabile reversed_word
        reversed_word += char
    }
    //confronta la parola(word) iniziale e vede se è identica alla parola al contrario (reversed_word)
    //esattamente come fare un IF con valore booleano
    return word === reversed_word;
}
//stampa la parola inserita dall'utente
console.log(user_word);
//variabile con il risultato della funzione ItsPalindrome, valore booleano
const itsPalindromeWord = itsPalindrome(user_word)
console.log(itsPalindromeWord);


