# :book: Curso de Platzi: Basico de JavaScript con Diego De Granda

---

## :star: 5 - Funciones

Las funciones son las tareas que va a llevar a cabo el navegador. 

Existen 2 tipos de funciones

1) **Declarativas** (function declaration / function statement)

En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:

```JavaScript
function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}

saludar('Diego');
```

2) **De expresión** (function expression / funciones anónimas)

En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima.

```JavaScript
var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}

nombre(‘Diego’);
```

---

Ambas pueden llevar **parámetros**, que son los datos que necesitan para ejecutarse. Cada parámetro va separado por una coma.

Cada instrucción que tenga la función debe terminar con ; .

---

Si queremos que una función nos dé un numero o dato tenemos que usar la siguiente sintaxis:

```return el_dato_que_queremos_que_nos_de;```


---

Las **funciones declarativas** tienen la siguiente sintaxis:

```JavaSCript
function Nombre de la función (Parámetros de la función) {Instrucciones}
```

Un ejemplo de una función puede ser una suma:

```
function suma (a,b) {
  return a+b;
};
```

---


Las **funciones de expresión son aquella**s que guardamos en una variable, por lo tanto, no es necesario nombrarlas y tienen la siguiente sintaxis:

```JavaScript
var nombreDeLaVariable = function(Parametros){Instrucciones};
```


Un ejemplo de una función de expresión sería:

```JavaScript
var suma = function(a,b){return a+b;};
```

---

Para ejecutar (**invocar**, mandar a llamar) las funciones debemos usar la siguiente sintaxis:

```JavaScript
nombreDeLaFuncion(Parametros función); 
```

Si la función no tiene ningún parámetro, únicamente se escribe:

```JavaScript
nombreDeLaFunción();
```

---

### Diferencias:

A las funciones declarativas se les aplica **hoisting**, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.

---

[Aca se puede ver en codigo JavaScript](https://github.com/eugenia1984/curso_platzi_basico_js_diego_de_granda/tree/main/05_funciones/funciones.js)