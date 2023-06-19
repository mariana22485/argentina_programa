
const readlineSync = require('readline-sync');
let valorNumerico = parseInt(readlineSync.question("Ingrese un Numero, por favor: "));


if (valorNumerico > 0) {
  console.log("El número es positivo");
} else if (valorNumerico === 0) {
  console.log("El número es cero");
} else {
  console.log("El número es negativo");
}
