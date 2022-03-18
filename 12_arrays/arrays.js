const frutas = ['pera', 'manzana', 'banana', 'frutilla', 'arandanos'];
// Para ver todos los elementos, el array
console.log(frutas);
// Para saber cuantos elementos tiene -> length()
// hay que acordarse que siempre el indice de los elementos empieza desde 0, por eso siempre el length va a ser un numero más que el mayor índice de los elementos de mi array
console.log(frutas.length);
// Para imprimir un solo elemento
console.log(frutas[0]); // pera
// Para mutar mi array, si quiero agregar un elementos¡ al final -> push()
const masFrutas = frutas.push('kiwi');
console.log(frutas); // 'pera', 'manzana', 'banana', 'frutilla', 'arandanos', 'kiwi'
console.log(masFrutas);
// Si quiero eliminar el ultimo elemento
const sinLaUltima = frutas.pop();
console.log(frutas); // 'pera', 'manzana', 'banana', 'frutilla', 'arandanos'
console.log(sinLaUltima);  // kiwi
// Si quiero agregar un elemento al inicio de mi array -> unshift()
const nuevaFrutaAlInicio = frutas.unshift('uva');
console.log(frutas); //'uva', 'pera', 'manzana', 'banana', 'frutilla', 'arandanos'
// Si quiero agregar un elemento al final de my array -> shift
const eliminoLaPrimerFruta = frutas.shift();
console.log(frutas); // 'pera', 'manzana', 'banana', 'frutilla', 'arandanos'
//Si quiero saber la posición de un elemento dentro de mi array 
console.log(frutas.indexOf('frutilla'));