/******** OBJECTS ***********/
const myCar = {
  marca: "Volkswagen",
  modelo: "Up",
  puertas: 5,
  detalleDelAuto : function() {
    console.log(`El auto ${this.modelo} es ${this.marca}`);
  }
}
// Para ver TODO mi objeto
console.log(myCar);
/*
{marca: 'Volkswagen', modelo: 'Up', puertas: 5}
marca: "Volkswagen"
modelo: "Up"
puertas: 5
[[Prototype]]: Object
*/
// Para acceder a un ATRIBUTO y su VALOR uso DOT NOTATION
console.log(myCar.marca);  // Volkswagen
// Para acceder a un METODO de mi object
console.log(myCar.detalleDelAuto());

