# :book: Curso de Platzi: Basico de JavaScript con Diego De Granda

---

## :star: 14 - Objects 


JavaScript se puede utilizar con muchos paradigmas, por eso se doce que es **multiparadigma**, y uno de ellos es el **POO**.


Los objetos van entre **llaves**.

Ejemplo de Objeto:

```JavaScript
const miAuto = {
marca: "Toyota",
modelo: "Corolla",
año: 2020
}
```

Tengo a mi objeto **miAtuto** que tiene las **propiedades**: marca, modelo, año; cada propiedad es una key que tiene su respectivo value.

Para acceder a una propiedad del objeto:

```JavaScript
miAuto.marca  // "Toyota"
```

Se pueden agregar **metodos** que van a ser las funciones,  el comportamiento, las acciones de mi objeto.

```JavaScript
var miAuto = {
marca: "Toyota",
modelo: "Corolla",
año: 2020, 
detallesDelAuto: function () {
	console.log(`Auto ${this.modelo} ${this.año}`);
}

console.log(miAuto.detallesDelAuto());  //Auto Corolla 2020
```

###  ¿Quién es this?

Es una variable que hace referencia al objeto. 

This hace referencia al objeto global.

Pero en otros contexto puede tener otros valores distintos.

En este caso: ```this = miAuto```.

---

[Ejercicios en JS de Objects](https://github.com/eugenia1984/curso_platzi_basico_js_diego_de_granda/tree/main/13_objects/objects.js)
