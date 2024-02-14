function cachuipunUser() {
  const userValue = prompt("ingrese piedra, papel o tijera");
  let asignacion;
  switch (true) {
    case userValue === "tijera":
      asignacion = 2;
      document.write("<h2> Ingresaste: TIJERA</h2>");
      break;
    case userValue === "papel":
      asignacion = 1;
      document.write("<h2> Ingresaste: PAPEL</h2>");
      break;
    case userValue === "piedra":
      asignacion = 0;
      document.write("<h2>Ingresaste: PIEDRA</h2>");
      break;
  }

  return asignacion;
}
function maquina() {
  const result = Math.floor(Math.random() * 3);
  switch (true) {
    case result === 2:
      document.write("<h2>Maquina: TIJERA</h1>");
      break;
    case result === 1:
      document.write("<h2> Maquina: PAPEL</h2>");
      break;
    case result === 0:
      document.write("<h2> Maquina: PIEDRA</h1>");
      break;
  }
  return result;
}
function numeroJugadas() {
  let user = 0;
  let machine = 0;

  const numberPlays = document.getElementById("numberOfPlays").value;

  for (let i = 1; i <= numberPlays; i++) {
    document.write(`<h2>jugada número ${i}</h2>`);
    const jugador1 = cachuipunUser();
    const jugadorMaquina = maquina();
    switch (true) {
      case jugador1 === jugadorMaquina:
        document.write(
          `<h1  style='color:blue'>Resultado jugada n°${i}: Empate</h1>`
        );
        machine++;
        user++;
        break;
      case jugador1 === 2 && jugadorMaquina === 1:
      case jugador1 === 1 && jugadorMaquina === 0:
      case jugador1 === 0 && jugadorMaquina === 2:
        document.write(
          `<h1  style='color:green'>Resultado jugada n°${i}: Ganaste</h1>`
        );
        user++;
        break;
      default:
        document.write(
          `<h1 style='color:red'>Resultado jugada n°${i} : Perdiste</h1>`
        );
        machine++;
    }
  }
  if (user > machine) {
    document.write(
      "<h1 style='color:green'>FELICITACIONES GANASTE LA PARTIDA</h1> "
    );
  } else if (user < machine) {
    document.write(
      "<h1 style='color:red'>PERDISTE LA PARTIDA INTENTALO NUEVAMENTE</h1>"
    );
  } else if (user != 0 && machine != 0) {
    document.write(
      "<h1 style='color:blue'> HAZ EMPATADO CONTRA LA MAQUINA</h1>"
    );
  }
}

numeroJugadas();
