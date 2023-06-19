const readlineSync = require('readline-sync');

let numeroMes = parseInt(readlineSync.question("Ingrese un numero de mes del 1 al 12: "));

let meses={
    1:{Nombre:"Enero", Dias:31},
    2:{Nombre:"Febrero", Dias:28},
    3:{Nombre:"Marzo", Dias:31},
    4:{Nombre:"Abril", Dias:30},
    5:{Nombre:"Mayo", Dias:31},
    6:{Nombre:"Junio", Dias:30},
    7:{Nombre:"Julio", Dias:31},
    8:{Nombre:"Agosto",Dias:31},
    9:{Nombre:"Septiembre", Dias:30},
    10:{Nombre:"Octubre", Dias:31},
    11:{Nombre:"Noviembre", Dias:30},
    12:{Nombre:"Diciembre", Dias:31},
}

let mes=meses[numeroMes];

if (mes)
{
    console.log("La cantidad de días del mes de %s es %i", mes.Nombre, mes.Dias);

} else{
    console.log('El numero ingresado no corresponde a un mes valido');
} 