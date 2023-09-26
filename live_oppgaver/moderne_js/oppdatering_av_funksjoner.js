/**
 *
 * Challenge : Bruk for-of
 *
 */

const list = [
    { id: 1, name: "Marius" },
    { id: 2, name: "Marte" }
];


for (listItem of list) {
    console.log(listItem);
}


/**
 *
 * Challenge : Bruk array.map()
 *
 */

var numbers = [1, 2, 3, 4];
var doubles = [];

numbers.map((number) => doubles.push(number* 2))

console.log(doubles);

/**
 *
 * Challenge : Map (data-typen)
 *
 */


const map = new Map();
map.set(1, "Marius")
map.set(2, "Marte");

/**
 *
 * Challenge : deconstruct
 *
 */

for (const [key, value] of map.entries()) {
    // Deconstruct (hent ut) name fra value
    // Her er value en string grunnet flytting til map, så destruct blir jo ikke relevant.
    console.log(`Navnet er ${value}`); // Navnet er Marius, Navnet er Marte
}

/**
 *
 * Challenge : Gjør om til arrow function
 *
 */

const calculate = (x, y) => {
    return x + y;
}

console.log(calculate(2, 3)); // Skal gi 5

/**
 *
 * Challenge : bruk default verdi 1 så denne ikke feiler (NAN)
 *
 */

function defaultValue(x, y = 1) {
    return x / y;
}

console.log(defaultValue(3)); // Skal gi 3

// Hva skal gjøres her?
const students = ["Lars", "Tiril", "Finn"];
const selectedStudents = [];

for (let index = 0; index < students.length; index++) {
    console.log(students[index].length);
    if (students[index].length > 4) {
        selectedStudents.push(students[index]);
    }
}

console.log(selectedStudents); // Tiril

/**
 *
 * Challenge : forEach og decunstruct age direkte i funksjonen sin parameter
 *
 */

const studentsWithAge = [
    { name: "Omar", age: 22 },
    { name: "Ali", age: 44 },
    { name: "Susanne", age: 18 }
];

let sum = 0;

// Deconstruct age
function sumStudentAge(student) {
    const {age} = student;
    sum += age;
}

// Bruk forEach
studentsWithAge.forEach((student) => sumStudentAge(student))

console.log(sum); // Skal gi 84

/**
 *
 * Challenge : Operators
 *
 */

function Test(statement) {
    const { ageOne, ageTwo, value } = statement;
    switch (value) {
        case "&&": {
            // Bruk && til å sjekke at ageOne og ageTwo er større enn 10
            const message = ageOne > 10 && ageTwo > 10;
            console.log("&&", message); // Skal gi: && true
            break;
        }
        case "??": {
            // Bruk ?? til å sjekke om ageOne har verdi. Hvis ikke gi ageTwo sin.
            const message = ageOne ?? ageTwo;
            console.log("??", message); // Skal gi: ?? 25
            break;
        }
        case "?": {
            // Bruk ? til å gi tilbake rett beskjed
            // Hvis ageOne er større enn 22 skal vi få tilbake "Allowed"
            // Hvis ikke skal vi få Not allowed
            const message = ageOne > 22 ? "Allowed" : "Not allowed";
            console.log("?", message); // Skal gi: ?? 25
            break;
        }
        case "?.": {
            // Ta bort "" rundt message
            // Bruk ?. til å unngå at denne feiler
            const message = statement.ageOne?.length;
            console.log("?.", message); // Skal gi:  ?. undefined
            break;
        }
        case "||": {
            // Bruk || til å gi tilbake ageTwo sin verdi
            const message = ageOne || ageTwo;
            console.log("||", message); // Skal gi:  || 25
            break;
        }
        default:
            break;
    }
}

const statements = [
    {
        ageOne: 22,
        ageTwo: 25,
        value: "&&"
    },
    {
        ageOne: null,
        ageTwo: 25,
        value: "??"
    },
    {
        ageOne: 23,
        ageTwo: 25,
        value: "?"
    },
    {
        ageOne: null,
        ageTwo: 25,
        value: "?."
    },
    {
        ageOne: 0,
        ageTwo: 25,
        value: "||"
    }
];

statements.forEach((statement) => Test(statement));
