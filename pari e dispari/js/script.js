// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

const evenOdd = prompt('scegli tra pari o dispari');
const number = parseInt(prompt('scegli un numero'));
console.log(number);
// Generiamo un numero random(sempre da 1 a 5) per il computer

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomPc = getRndInteger(1, 5);
console.log(randomPc);

// Sommiamo i due numeri

const sum = number + randomPc;

// Stabiliamo se la somma dei due numeri è pari o dispari

function evenOrOdd(somma) {
    let find = false;
    if (somma % 2 == 0) {
        find = true
    } 
    console.log(find);
    return find;
}

// let find = false;
// if (sum % 2 == 0) {
//     find = true
// } 

// if (find == true) {
//     console.log('pari');
// } else {
//     console.log('dispari');
// }

// Dichiariamo chi ha vinto

if (evenOrOdd(sum) == true && evenOdd == 'pari' || evenOrOdd(sum) == false && evenOdd == 'dispari') {
    console.log('vincitore e l utente');
} else {
    console.log('il vincitore e il pc');
}