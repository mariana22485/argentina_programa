let personas= ['Jose', 'Maria', 'Juan', 'Andres', 'Lionel', 'Sofia', 'Leandro','Emilia'];
let rechazados=[];
let admitidos=[];


let i=0;
let nombre;

while (i<personas.length){
    nombre=personas[i];
    
    if (nombre==='Jose' || nombre==="Sofia"){
        rechazados.push(nombre);
    }
    else {
        admitidos.push(nombre);
    }
    i++;
}
console.log('La lista de invitados admitidos es');
let a=0;
while (a<admitidos.length){
    console.log(admitidos[a]);
    a++;
}
console.log('La lista de invitados rechazados es');
let r=0;
while(r<rechazados.length){
    console.log(rechazados[r]);
    r++;
}
    //Aca hago el ejercicio extra//

    admitidos.sort();
    
    console.log("La lista ordenada de invitados admitidos es:");
    let admOr=0;
    while (admOr<admitidos.length){
        console.log(admitidos[admOr]);
        admOr++;
    }
    
    rechazados.sort();
    
    console.log("La lista ordenada de invitados rechazados es:");
    let recOrd=0
    while(recOrd<rechazados.length){
        console.log(rechazados[recOrd]);
        recOrd++;
    }


