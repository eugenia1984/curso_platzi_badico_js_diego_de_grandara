/************* LOOPS ***********/

const estudiantes = ['Maria', 'Sergio', 'Rosa', 'Daniel']
/****** FOR *****/
function saludarEstudiantes(estudiante) {
  console.log(`Hola ${estudiante}`);
}

for ( let i = 0; i < estudiantes.length; i++) {
  saludarEstudiantes(estudiantes[i]);
}
/********* FOR OF ***********/
const mascotas = ['perro', 'gato', 'hamster'];

for (let mascota of mascotas) {
  console.log(mascota);
}

/************ WHILE *************/
// usando el mismo array de estudiantes de antes y la funcion saludarEstudiantes()
while (estudiantes.length > 0) {
  // con shift en cada iteracion voy a ir sacando un estudiante y voy a saludar a ese estudiante sacado
  let estudiantesAchicados = estudiantes.shift();
  saludarEstudiantes(estudiantesAchicados);
}