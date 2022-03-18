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

/****** FUNCION CONSTRUCTORA **********/
function nuevoAuto(marca, modelo, anio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = anio;
}

const nuevoAuto1 = new nuevoAuto("Tesla", "Model 3", 2020);
console.log(nuevoAuto1);  // nuevoAuto {marca: 'Tesla', modelo: 'Model 3', annio: 2020}
const nuevoAuto2 = new nuevoAuto("Tesla", "Model x", 2021);
console.log(nuevoAuto2);  // nuevoAuto {marca: 'Tesla', modelo: 'Model x', annio: 2021}

/*******  Desafio, generar dos nuevos autos ************/
// la funcion constructora
function auto(marca, modelo, anio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = anio;
}

// mi array para guardar los autos
const autos = [];

// Con  un for voy a ir pidiendo los valores de los atributos para cada instancia de mi nuevo auto
for(let i = 0 ; i < 3 ; i++){
  var marca = prompt("Ingresa la marca del auto");
  var modelo = prompt("Ingresa el modelo del auto");
  var annio = prompt("Ingresa el año del auto");
  autos.push(new auto (marca, modelo, annio));
}

// con un for of los muestro
for(auto of autos){
  console.log(auto);
}