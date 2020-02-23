/*
SCOPO DEL GIOCO: Fizz Buzz test:
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz”
al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli
di 3 che di 5 stampi FizzBuzz.

*/


for (var i = 1; i <= 100; i++) {    // ripeto il codice 100 volte
    if ((i % 15) == 0) {            // se il numero [i] diviso 15 da' resto 0 allora stampo in console 'FizzBuzz'
        console.log('FizzBuzz');
    } else if ((i % 3) == 0) {     // altrimenti se il numero [i] diviso 3 da' resto 0, stampo in console 'Fizz'
        console.log('Fizz');
    } else if ((i % 5) == 0) {    // altrimenti se il numero [i] diviso 5 da' resto 0, stampo in console 'Buzz'
        console.log('Buzz');
    } else {                        // altrimenti stampo il numero [i]
        console.log(i);
    }
}
