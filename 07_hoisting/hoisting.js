console-log(miNombre);  // undefined porque hay hoisting primero mando a llamar una variable que todavia no la declare ni le asigne un valor
var miNombre = 'Mateo';

// ejemplo de hoisting con una funcion, como la invoco antes que declararla me subo la funcion arriba de donde la invoco, y se ejecuta siempre y cuando las varaibles eten declaradas e inicializadas antes de la función -> por eso en muy buena practica siempre primero declarar las variables.
hey();

function hey() {
  console.log(`Hola ${myName}`);
}

var myName = 'Martina';