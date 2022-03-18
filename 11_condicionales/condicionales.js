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

/********* RETO DE PIEDRA, PAPEL, TIJERA **********/
// En este curso todavia no se vio, pero luego se puede hacer más interactivo pidiendole al usuario que ingrese piedra, papel o tijera y ahi se compara con la opcion de la pc
const jugador = 'papel';
const pc = 'papel';
let resultado;

function ganador (){

	if(jugador === pc){
		return resultado = 'empate';
	} else if( (jugador == 'piedra' && pc == 'papel') || (jugador == 'papel' && pc == 'tijera') || (jugador == 'tijera' && pc == 'piedra')){
		return resultado = 'Gana PC';
  } else if( (jugador == 'piedra' && pc == 'tijera') || (jugador == 'papel' && pc == 'piedra') || (jugador == 'tijera' && pc == 'papel')){
		return resultado = 'Gana Jugador';
  } else {
		return resultado = 'Ingrese valores correctos';
  }
}

console.log(ganador());