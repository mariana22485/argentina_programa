

let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";

/* calculo el largo de cita*/
let tamañoDeCita = cita.length;
console.log("El tamaño de la cita es: " + tamañoDeCita);

/* Busco el indice donde empieza el substring*/

let indice = cita.indexOf(substring);
console.log("El índice del substring es: " + indice);

/* corto cita para mostrar el mensaje pedido*/

let citaRevisada=cita.slice(0,indice + substring.length);
console.log(citaRevisada);
