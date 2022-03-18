/*********** Operador de asignacion ***********/
let nombre = 'Mariela';
/********** Operadores de comparacion ************/
console.log(1 == '1');  // true porque uso el operador de comparacion que NO compara el tipo de datos
console.log(1 === '1');  // false porque uso el operador de comparacion estricto y me compara el tipo de dato
/********** Operadores aritmeticos **********/
console.log(3+20); // 23     porque utilizo la suma
console.log(50-10);  // 40     porque utilizo la resta
console.log(2*3);  // 6     porque utilizo la multiplicacion
console.log(20 / 2);  // 10   porque utilizo la division

// + para concatenar Strings
console.log("hola y "+"chau");  // hola y chau

/************ Operadores logicos ************/

console.log(5 < 3);  // false porque 5 no es MENOR que 3
console.log( 5 > 3);   // true porque 5 es MAYOR que 3
console.log(5 <= 5);  // true porque 5 es IGUAL a 5, como tengo MENOR O IGUAL evalua las dos condiciones, y si cumple con alguna es true

console.log((5=5) && (4>2));  // true porque con el Y ambas condiciones deben ser true

console.log((5=5) || (4<2));  // true porque con que al menos una de las condiciones sea true -> true

console.log(!false);  // true porque utilizo la negacion

// Para incrementar el valor de una variable en 1
let edad = 10;
edad++;
console.log(edad);   // 11
// Si quiero incrementar el valor de la variable en 2 o en más
edad += 2;
console.log(edad); // 13
//Para derementar utilizo -- ó -=