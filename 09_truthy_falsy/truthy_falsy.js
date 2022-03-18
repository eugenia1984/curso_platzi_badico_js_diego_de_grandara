Boolean();  // false
/******** FALSY *******/
Boolean(0);  // solo con el numero 0
Boolean(NaN);
Boolean(undefined);  // porque es un valor todavia no definido
Boolean(null);
Boolean(false);
Boolean(""); // String vacio
/******** TRUTHY **********/
Boolean(" ");  // el espacio
Boolean("a");  // un caracter
Boolean(2);  // un numero positivo, porque es distinto de cero
Boolean(-3);  // un numero negativo, proque es distinto de cero
Boolean([]);  // un array por mas que este vacio
Boolean({});  // un objeto, por mas que este vacio
Boolean(function(){});  // cualquier funcion es verdadera
Boolean(true);
