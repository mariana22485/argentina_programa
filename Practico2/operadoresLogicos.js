const readlineSync = require('readline-sync');

let numeroEntero = parseInt(readlineSync.question("Ingrese un numero entero por favor: "));

if (numeroEntero>0 && numeroEntero %2===0)
{ 
    console.log("El numero es positivo y par");
}
else if 
        (numeroEntero>0 && numeroEntero %2!==0)
        {
            console.log("El numero es positivo e impar");
        }
        else if
              (numeroEntero<0)
        {
            console.log("El numero es negativo");
        }
        else if 
              (numeroEntero===0)
        {
         console.log("El numero es cero");
        }
