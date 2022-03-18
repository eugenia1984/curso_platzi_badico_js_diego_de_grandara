/****** IF *****/
if (true) {
  console.log("Hola");
}

/************ IF ELSE************/
// le dejo con false para poder ejecutar el bloque de codigo que este en el else
if (false) {
  console.log("Hola");
} else {
  console.log("Chau")
}

/************ IF - ELSE IF - ELSE ************/
let a = 5;  // a es menor o igual a 6
// a = 20;
if ( a <= 2) {
  console.log('a es menor o igual a 2');
} else if(a <= 6) {
  console.log('a es menor o igual a 6');
} else {
  console.log('a es mayor a 6');
}

let edad = 18;

if(edad === 18) {
  console.log('Felicitaciones va a ser tu primera votación!')
} else if (edad > 18) {
  console.log('Puedes votar nuevamente')
} else {  // la edad es menor a 18
  console.log('Todavía no podés votar')
}

/*********** TERNARIO *********/
let edad2 = 5;
(edad2 > 10)? console.log('Tienes más de 10 años') : console.log('Tienes menos de 10 años');   // Tienen menos de 10 años


/****** SWITCH ******/
// Dependiendo la edad del/de la niño/a digo a que sala va en un jardin de infantes
// de 0 a 2 (2 sin cumplir) -> sala roja
// de 2 a 3 (3 sin cumplir) -> sala naranja
// de 3 a 4 (4 sin cumplir) -> sala amarilla
// de 4 a 5 (5 incluidos) -> sala azul
let edadDelAlumno = 4;

switch (edadDelAlumno) {
  case 0:
  case 1:  
    console.log('Va a sala roja');
    break;
  case 2:
    console.log('Va a sala naranja');
    break;
  case 3:
    console.log('Va a sala amarilla');
    break;
  case 4:
  case 5:
    console.log('Va a sala azul');
    break;
  default:
    console.log('Por la edad ya no viene al jardin');
    break;
}
/********* RETO DE PIEDRA, PAPEL, TIJERA **********/
// En este curso todavia no se vio, pero luego se puede hacer más interactivo pidiendole al usuario que ingrese piedra, papel o tijera y ahi se compara con la opcion de la pc.

// Asi que utilizo el prompt, lo que si no hago validaciones de lo que ingresa el usuario, confiamos en que ingrese bien las palabras :) .

const pregunta = prompt("Ingresa tu opción: piedra, papel o tijera: "); 
const user = pregunta.toLowerCase();
const options = ["piedra", "papel", "tijera"];
// para que sea random lo que elije la computadora utilizo el metodo .random() de Marth asi accedo a uno de los valores del arreglo de las opciones
const machine = options[Math.floor(Math.random() * 3)];

switch (true) { //con true los casos van a pasar 
    case (user === machine):
        alert('Es un empate');
        break;
    case (machine === 'piedra' && user === 'papel'):
        alert('Ganaste')
        break;
    case (machine === 'papel'  && user === 'tijera'):
        alert('Ganaste')
        break;
    case (machine === 'tijera' && user === 'piedra'):
        alert('Ganaste')
        break;
    default:
        alert('¡Perdiste!');       
}

