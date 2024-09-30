console.log('ciao');

// prima fase: preparazione
let price;
let age;
let km;

// seconda face: raccolta dati
const priceNumber = Number(window.prompt("Prezzo al kilometro"));
console.log(priceNumber);

const ageNumber = Number(window.prompt("Età"));
console.log(ageNumber);

const kmNumber = Number(window.prompt("Kilometri"));
console.log(kmNumber);

// terza fase: elaborazione dati
if (ageNumber > 18 && ageNumber < 65) {
    let price = priceNumber * kmNumber;
    console.log(price.toFixed(2));
} else if (ageNumber < 18) {
    let price = (priceNumber * kmNumber) * 20 / 100;
    console.log(price.toFixed(2));   
} else if (ageNumber > 65) {
    let price = (priceNumber * kmNumber) * 40 / 100
    console.log(price.toFixed(2));
    
}