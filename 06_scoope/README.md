# :book: Curso de Platzi: Basico de JavaScript con Diego De Granda

---

## :star: 6 - Scoope

**Scoope** es el alcance de una variable

**Global** -> Universo , seria como el todo , las variables son accesibles desde cualquier parte del código.

**Local** -> Cada Planeta , un mundo distinto , las variables son accesibles en ese mundo , no es visible para los demás mundos.

Entonces lo que es global se puede acceder desde cualquier parte de tu código , y lo pueden acceder cada mundo , lo que es local solo lo puede acceder cada mundo.

---

## Ejemplo en codigo

En este caso la varible NOMBRE al ser declarada con **var** tien un scoope global, por lo que también puedo acceder a ella desde mi scoope local dentro de la función (como lo hago con el return y el template literal).

Todo lo que tengo entre {} dentro de mi función es de scoope local.


```JavaScript
var nombre = 'Maria';

function fun() {
  var apellido = 'Costa';
  return ` ${nombre} ${apellido}`;
}

fun();  // Maria Costa
```

Desde **scoope local** puedo acceder a **scoope local**, pero desde el global no puedo acceder al local (es desde adentro -local- hacia afuera -global-; pero no al reves).


Por eso en este caso desde el scoope global no puedo acceder a mi scoope local.

```JavaScript
console.log(apellido);//  apellido is not defined
```

---

[Ejemplo en codigo de Scoope](https://github.com/eugenia1984/curso_platzi_basico_js_diego_de_granda/tree/main/06_scoope/scope.js)