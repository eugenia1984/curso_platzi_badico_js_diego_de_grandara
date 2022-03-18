/******** Declarativas ********/ 
/*
Con la palabra reserva FUNCTION
*/
function myFunction() {
  return 3;
}
//invoco a mi funcion declarativa
myFunction();

// otro ejemplo, aca a el parametro estudiante le doy un valor por defecto de Desconocido, por que si no se ingresa nada en vez de tener undefined, voy a tener desconocido

function saludarEstudiantes(estudiante='Desconocido'){
  console.log(estudiante);
}

saludarEstudiantes('Maria');

// otro ejemplo
function despedirEstudiantes (estudiante='desconocido') {
  console.log(`Chau ${estudiante}`);
}

despedirEstudiantes('Lois');  // Chau Lois
despedirEstudiantes();  // chau desconocido


// Ejemplo de funcion con return, para que la funcion me de un resultado y yo lo pueda utilizar
function restar(a, b) {
  return a + b;
}

restar(6,4);  // 2
/****************Expresion o funcion anonima ****************/ 
/*
En este caso la funcion recibe 2 PARAMETROS
*/
const miFuncion = function(a,b) {
  return a + b;
}

miFuncion(3,4);