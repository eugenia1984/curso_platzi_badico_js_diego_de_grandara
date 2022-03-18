/*************RECORRIDO DE ARRAYS **********/

// voy a tener el array articulos y sus elementos van a ser objetos
const articulos = [
  {nombre: "bicicleta", costo: 3000},
  {nombre: "television", costo: 2500},
  {nombre: "libro", costo: 320},
  {nombre: "celular", costo: 10000},
  {nombre: "laptop", costo: 2000},
  {nombre: "teclado", costo: 500},
  {nombre: "audifonos", costo: 1700}
]

/******* FILTER ******/

// VALIDA SI ALGO ES FALSE O TRUE, Y SI ES TRUE LO METE EN UN NUEVO ARRAR, O BUENO ES QUE NO AMOS A MODIFICAR EL ARRAY ORIGINAL DEL QUE VAMOS A FILTRAR LOS OBJETOS

// Voy a filtrar los artiulos que tengan un costo de 500 o menos
const articulosFiltrados = articulos.filter(function(articulo) {
  return articulo.costo <= 500;
});
console.log(articulosFiltrados);
/*
(2) [{…}, {…}]
0: {nombre: 'libro', costo: 320}
1: {nombre: 'teclado', costo: 500}
length: 2
[[Prototype]]: Array(0)
*/
console.log(articulos); // aca compruebo que no me modifico mi primer array
/*
(
*/

/************* MAP *********/

// ME AYUDA A MAPEAR CIERTOS ELEMENTOS DEL ARRAY.
// TAMBIEN ME GENERA UN NUEVO ARRAY Y NO ME MOIFICA EL ARRAY ORIGINAL

const nombreDeArticulos = articulos.map(function(articulo) {
  return articulo.nombre;
});
console.log(nombreDeArticulos);
/*
(7) ['bicicleta', 'television', 'libro', 'celular', 'laptop', 'teclado', 'audifonos']
0: "bicicleta"
1: "television"
2: "libro"
3: "celular"
4: "laptop"
5: "teclado"
6: "audifonos"
length: 7
[[Prototype]]: Array(0)
*/

/*********** FIND **********/