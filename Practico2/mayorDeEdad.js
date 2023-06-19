const readlineSync = require('readline-sync');
let Edad = readlineSync.question("Ingrese su Edad por favor  ");

if (Edad<0)
{
    console.log("Edad ingresada invalida");
}
else if (Edad>=18) { 

console.log("Eres mayor de edad");
}
else
{ console.log("Eres menor de edad");
}