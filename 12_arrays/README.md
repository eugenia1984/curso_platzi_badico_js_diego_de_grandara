# :book: Curso de Platzi: Basico de JavaScript con Diego De Granda

---

## :star: 12 - Arrays

Un Array es un tipo de estructura de datos, objeto. 

Puede guardar datos distintos dentro, guarda los datos en forma de lista.

Van entre **corchetes** y sus elementos separados por **comas**.

---

[Arrays con ejemplos en JS](https://github.com/eugenia1984/curso_platzi_basico_js_diego_de_granda/tree/main/12_arrays/arrays.js) 

```JavaScript
const frutas = ['pera', 'manzana', 'banana', 'frutilla', 'arandanos'];
```

Para ver todos los elementos, el array

```JavaScript
console.log(frutas);
```

Para saber cuantos elementos tiene -> **length()**

Hay que acordarse que siempre el indice de los elementos empieza desde 0, por eso siempre el length va a ser un numero más que el mayor índice de los elementos de mi array

```JavaScript
console.log(frutas.length);
```

Para ingresar a los elementos del array:

```JavaScript
console.log(frutas[0]); // pera
```

Si quiero **mutar** el array tengo algunos métodos:

**.push()** -> agrego un elemento al final de mi array, lo que modifica mi array.

```JavaScript
const masFrutaas = frutas.push('kiwi');
console.log(masFrutas);
```

**.pop()** -> para eliminar el último elemento del array, lo que modifica mi array.

**.unshift()** -> si quiero agregar un elemento al inicio de mi array

**.shift()** -> si quiero agregar un elemento al final de my array

Si quiero saber la posición de un elemento dentro de mi array -> **indexOf()**

---