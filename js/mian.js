console.log('ciao');

// prima fase: preparazione
let price;
let age;
let km;

// seconda face: raccolta dati
const priceNumber = Number(window.prompt("Prezzo al kilometro", ""));
console.log(priceNumber);

const ageNumber = Number(window.prompt("Età", ""));
console.log(ageNumber);

const kmNumber = Number(window.prompt("Kilometri"));
console.log(kmNumber);

// terza fase: elaborazione dati
if (ageNumber > 18 && ageNumber < 65) {
    console.log(priceNumber * kmNumber);
} else if (ageNumber.toFixed(2) < 18) {
    console.log((priceNumber * kmNumber) * 20 / 100);
} else if (ageNumber.toFixed(2) > 65) {
    console.log((priceNumber * kmNumber) * 40 / 100);
}