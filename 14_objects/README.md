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

## ¿ Cómo genero nuevos Objetos ?

Con una función constructora.

En la función constructora, los parametros de la misma son los atributos de la clase

```JavaScript
function nuevoAuto(marca, modelo, anio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = anio;
}
```

Creo un nuevo objeto, como instancia de mi función constructora

```JavaSCript
const nuevoAuto1 = new nuevoAuto("Tesla", "Model 3", 2020);
console.log(nuevoAuto1);  // nuevoAuto {marca: 'Tesla', modelo: 'Model 3', annio: 2020}
```

---

## Desafio, generar 2 nuevos autos

Ejemplo en codigo, con la funcion constructora:

```JavaScript
function auto(marca, modelo, anio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = anio;
}
```

Mi array para guardar los autos
```JavaScript
const autos = [];
```

Con  un for voy a ir pidiendo los valores de los atributos para cada instancia de mi nuevo auto
```JavaScript
for(let i = 0 ; i < 3 ; i++){
  var marca = prompt("Ingresa la marca del auto");
  var modelo = prompt("Ingresa el modelo del auto");
  var annio = prompt("Ingresa el año del auto");
  autos.push(new auto (marca, modelo, annio));
}
```

Con un for of los muestro
```JavaScript
for(auto of autos){
  console.log(auto);
}
```

---

[Ejercicios en JS de Objects](https://github.com/eugenia1984/curso_platzi_basico_js_diego_de_granda/tree/main/14_objects/objects.js)
