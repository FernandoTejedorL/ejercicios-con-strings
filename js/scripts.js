/* 1. Crea una funcion que reciba una palabra, 
si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en minúsculas.*/

function wordToUpper(wordA) {
    if (wordA.length > 5) {
        console.log(wordA.toUpperCase());
    } else {
        console.log(wordA.toLowerCase());
    }
}

wordToUpper('cebolla');


function wordToUpper2(wordB) {
    (wordB.length > 5) ? console.log(wordB.toUpperCase()) : console.log(wordB.toLowerCase());
}

wordToUpper2('gama');

/* 2. Crea una función que reciba una palabra e imprime por consola una letra aleatoria de esa palabra.*/

function randomLetter(wordC) {
    console.log(wordC.charAt((Math.random() * (wordC.length) - 1)));
}

randomLetter('casa');

/* 3. Crea una función que reciba dos palabras y devuelva cuál de las dos es más larga.
Si ambas palabras tienen la misma longitud, deberá indicarlo.*/

function longerWord(wordD, wordE) {
    if (wordD.length > wordE.length) {
        return wordD;
    } else if (wordE.length > wordD.length) {
        return wordE
    } 

    return 'Son iguales';
}

const words1 = longerWord('cebolla', 'cantimplora');
const words2 = longerWord('perro', 'gato');
const words3 = longerWord('casa', 'saca');

console.log(words1);
console.log(words2);
console.log(words3);


/* 4. Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras
aleatorias de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona".*/

const generated1 = generateWord('cebolla', 'cantimplora', 'comino');
const generated2 = generateWord('perro', 'gato', 'comillas');
const generated3 = generateWord('casa', 'saca', 'asca');

function generateWord(wordF, wordG, wordH) {
    console.log(
        wordF.charAt((Math.random() * (wordF.length))-1) +
        wordF.charAt((Math.random() * (wordF.length))-1) +
        wordG.charAt((Math.random() * (wordG.length))-1) +
        wordG.charAt((Math.random() * (wordG.length))-1) +
        wordH.charAt((Math.random() * (wordH.length))-1) +
        wordH.charAt((Math.random() * (wordH.length))-1));
}

/* 5. Crea una función que reciba un email e imprima por separado el nombre y el dominio.
Por ejemplo, si recibe "dorian@gmail.com" deberá imprimir "El usuario es dorian" y por otro
lado "El dominio es gmail.com".*/

const email1 = nameDomain('fernandotejedorlopez@gmail.com');

function nameDomain(emailAddress) {
    console.log('El usuario es ' + emailAddress.substring(0, (emailAddress.indexOf('@'))));
    console.log('El dominio es ' + emailAddress.substring((emailAddress.indexOf('@'))));
}


/* 6. Crea una función que reciba una palabra de 5 letras y la devuelva intercalando mayúsculas
 y minúsculas, por ejemplo adios, sería aDiOs*/
 
 
 function intercalated(lowerWord) {
     return lowerWord.charAt(0).toLowerCase() +
         lowerWord.charAt(1).toUpperCase() +
         lowerWord.charAt(2).toLowerCase() +
         lowerWord.charAt(3).toUpperCase() +
         lowerWord.charAt(4).toLowerCase();
}

const toCheck = intercalated('pisos');
console.log(toCheck);

/* 7. Crea una función que reciba un nombre y un apellido, y devuelva un nombre de usuario compuesto
por la primera letra del nombre, el apellido completo, y un número aleatorio del 1 al 100. Por ejemplo, 
"Juan Perez" podría convertirse en "JPerez87". */

function userName(nameAndSurname) {
    return nameAndSurname.charAt(0) +
        nameAndSurname.substring((nameAndSurname.indexOf(' ') + 1)) +
        Math.round(Math.random() * 100);
}

const name1 = userName('Fernando Tejedor');
console.log(name1);


/* 8. Crea una función que reciba 2 verbos en infinitivo. La función debe imprimir a qué conjugación
pertenecen. Por ejemplo, si la función recibe "andar" y "correr" debe imprimir "El verbo andar es
de la primera conjugación y el verbo correr de la segunda conjugación".*/


function conjugation(verb) {
    if (verb.substring(verb.length-2) === 'ar') {
        return 'El verbo '+ verb +' es de la primera conjugación.'
    } else if (verb.substring(verb.length-2) === 'er') {
        return 'El verbo '+ verb +' es de la segunda conjugación.'
    } 

    return 'El verbo ' + verb + ' no es ni de la primera ni de la segunda conjugación.'
}

const verb1 = conjugation('vivir')
console.log(verb1)

/* 9. Crea una función que reciba una palabra de 4 letras y devuelva la palabra invertida.
Por ejemplo, si recibe "casa", deberá devolver "asac".*/

function reverseWord(toRevert) {
    return toRevert.charAt(3) +
        toRevert.charAt(2) +
        toRevert.charAt(1) +
        toRevert.charAt(0);
}

const reverted = reverseWord('gato')
console.log(reverted)


/* 10. Crea una función que reciba 3 palabras y calcule cuántos caracteres tienen en total. 
Por ejemplo, si recibe "Hola", "Mundo" y "Javascript", deberá imprimir 17.*/

const testing = totalChar('pisto','huevos','arroz')

function totalChar(wordI, wordJ, wordK) {
    console.log(wordI.length + wordJ.length + wordK.length)
}

