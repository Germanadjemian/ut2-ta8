const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
    {
        name: "German",
        yearOfBirth: 1900,
        yearOfDeath: 1999,
    }
];

// Función que encuentra a la persona más antigua
function findTheOldest(people) {
    return people.reduce((oldest, person) => {
        const oldestAge = (oldest.yearOfDeath - oldest.yearOfBirth);
        const personAge = (person.yearOfDeath - person.yearOfBirth);
        return personAge > oldestAge ? person : oldest;
        /*Explicación del Operador Ternario
        El operador ternario es una forma concisa de escribir una sentencia if-else. Su sintaxis es:
        condición ? expresión1 : expresión2; - Funciona de la siguiente manera:
        Primero se evalua la condición. Si es true, se ejecuta expresión1. Si es false, se ejecuta expresión2. */
        //En resumen es una manera MUY abreviada de de escribir una sentencia if-else.
    });
}

// Función para imprimir en la consola la persona más antigua
function printOldest() {
    const oldestPerson = findTheOldest(people);
    console.log(`La persona más antigua es: ${oldestPerson.name} con ${oldestPerson.yearOfDeath - oldestPerson.yearOfBirth} años`);
    /*Para esto mostramos el nombre de la persona en cuestión y el calculo de su edad, pues
    el "objeto" tiene muchos mas datos pero es información inncesaria de visualizar*/
}

document.getElementById("findOldestButton").addEventListener("click", printOldest);

/*
let oldest = people[0]; // Empieza con la primera persona por eso luego no la incluye en el bucle

for (let i = 1; i < people.length; i++) {
    let person = people[i];
    let oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    let personAge = person.yearOfDeath - person.yearOfBirth;

    if (personAge > oldestAge) {
        oldest = person; // Si la edad de person es mayor, actualiza oldest
    }
    // Si no, no cambia
}

return oldest; //
*/ 