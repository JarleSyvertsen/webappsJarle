// TODO: Bruk getElementById til å hente HTML-elementene med #id
const numbersList = document.getElementById("numbers");
const userGuess = document.getElementById("guess");
const main = document.getElementById("main");

// TODO: Bruk querySelector til å hente knappen
const button = document.querySelector('button');
// TODO: Lag en liste med tallene som skal sorteres
function generateNumbers(min, max, amount) {
    let numbers = [];

    for(let i = 0; i < amount; i++) {
        numbers.push(Math.floor(Math.random() * (max-min) + min));
    }
    return numbers;
}
// TODO: Lag en funksjon for å skrive ut tallene som skal sorteres
function populateUl(listToPopulate, numbersArray) {
    for(number of numbersArray) {
        let listValue= document.createElement("li");
        listValue.innerText = number;
        listToPopulate.appendChild(listValue);
    }
}
// TODO: Lag en funksjon for å skrive ut input felter bruker kan skrive tallene i
function populateGuessField(listToPopulate, length) {
    for(let i = 0; i < length; i++) {
        const liElement = document.createElement("li");
        liElement.appendChild(document.createElement("input"));
        listToPopulate.appendChild(liElement);
    }
}
// TODO: Lag en funksjon for å hente ut det brukeren har skrevet inn
function getInputValues(listToIterate) {
    const listElements = Array.from(listToIterate.children);
    const intValues = [];

    for(li of listElements) {
        intValues.push(parseInt(li.firstChild.value));
    }
    return intValues;
}
// TODO: Lag en funksjon for å sjekke om tallene er sortert riktig av bruker
function compareGuess(unsortedNumbers, guesses) {
    if(unsortedNumbers.length !== guesses.length) {
        return false;
    }

    unsortedNumbers.sort(function(a, b) {return a - b;});

    for(let i = 0; i < unsortedNumbers.length; i++) {
        if(unsortedNumbers[i] !== guesses[i]) {
            return false;
        }
    }
    return true;
}
// TODO: Lag en funksjon som "lager UI" -- Ikke helt nødvendig, men praktisk å ha
// Usikker på "lager UI", kunne rebygd main som et eksempel, men når jeg er både usikker
// og det har ingen effekt, hopper jeg for øyeblikket over det.

// Kunne nok enkelere simplifiseres ved å allerede ha en h1 tilgjengelig, så bare oppdateres
// den i stedet for å måtte sjekke om en må lages.
function addSuccessStatus(booleanSucceeded) {
    const statusText = booleanSucceeded ? "Riktig sortert!" : "Ikke helt.";

    if(document.getElementById("status")) {
        document.getElementById("status").innerText = statusText;
    }
    else {
        const statusH1 = document.createElement("h1");
        statusH1.id = "status";
        statusH1.innerText = statusText;
        main.appendChild(statusH1);
    }

}
// TODO: Lytt til 'click'-event og trigg funksjonen som sjekker om man har gjort riktig ved klikk
const unsortedNumbers = generateNumbers(0,10,5);

populateUl(numbersList, unsortedNumbers);
populateGuessField(userGuess, unsortedNumbers.length);

button.addEventListener("click", () => {
    addSuccessStatus(compareGuess(unsortedNumbers, getInputValues(userGuess)));
});