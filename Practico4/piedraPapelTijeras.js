function obtenerJugadaComputadora() {
    let opciones={
        0: "piedra",
        1: "papel",
        2: "tijeras"
    }
    let numeroAleatorio=Math.floor(Math.random() * 3);
    return opciones[numeroAleatorio];
}


const readlineSync = require('readline-sync');
function obtenerJugadaUsuario() {
    let opcionUsuario=readlineSync.question('Ingresa que opcion elegis entre las siguientes: piedra, papel o tijeras: ');
    opcionUsuario=opcionUsuario.toLowerCase();
    if (opcionUsuario !=='piedra' && opcionUsuario !== 'papel' && opcionUsuario !== 'tijeras'){
    console.log("La opcion ingresada es incorrecta, por favor ingrese piedra, papel o tijeras");
    return obtenerJugadaUsuario();
}
return opcionUsuario;
}


function determinarGanador(jugadaComputadora, jugadaUsuario){
    if (jugadaComputadora===jugadaUsuario){
        return "Empate"
    } else if(
        (jugadaComputadora==="piedra" && jugadaUsuario==="tijeras") ||
        (jugadaComputadora==="tijeras" && jugadaUsuario==="papel") ||
        (jugadaComputadora==="papel" && jugadaUsuario==="piedra")
       )
    {
      return "Gana la Computadora"
    }
    else {
        return "Gana el Usuario"
    }
}

function duracionJuego() {
  let jugadas = parseInt(readlineSync.question('Ingresa la cantidad de veces que deseas jugar (1, 2 o 3): '));

  if (jugadas !== 1 && jugadas !== 2 && jugadas !== 3) {
    console.log("La cantidad de veces ingresada para jugar es inválida.");
    return duracionJuego();
  } else {
    return jugadas;
  }
}

let jugadas = duracionJuego();


function juegoPiedraPapelTijeras(){
  let puntosUsuario = 0;
  let puntosComputadora = 0;

  for (let i = 1; i <= jugadas; i++) {
    console.log(`Jugada ${i}:`);

    let jugadaComputadora=obtenerJugadaComputadora();
    let jugadaUsuario=obtenerJugadaUsuario();
    let resultadoJuego= determinarGanador(jugadaComputadora, jugadaUsuario);

    
    console.log('La computadora eligio: ' + jugadaComputadora);
    console.log("El usuario eligio: " + jugadaUsuario);
    console.log( "El resultado fue: " + resultadoJuego);


    if (resultadoJuego === "Gana la Computadora") {
    puntosComputadora++;
    } else if (resultadoJuego === "Gana el Usuario") {
    puntosUsuario++;
    }
  }
  console.log('');

if (puntosUsuario > puntosComputadora) {
  console.log(" El ganador del juego es el usuario");
} else if 
  (puntosComputadora > puntosUsuario) {
  console.log("La ganadora del juego es la computadora");
} else {
  console.log("Los jugadores han empatado el juego");
}
}

juegoPiedraPapelTijeras(jugadas);