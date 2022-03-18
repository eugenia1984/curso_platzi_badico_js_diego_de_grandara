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