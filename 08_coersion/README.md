# :book: Curso de Platzi: Basico de JavaScript con Diego De Granda

---

## :star: 08 - Xoersion

**Coerción** es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:

**Coerción implícita** = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.

**Coerción explicita** = es cuando obligamos a que cambie el tipo de valor.

---

[Coersion con ejemplo de JS](https://github.com/eugenia1984/curso_platzi_basico_js_diego_de_granda/tree/main/08_coersion/coersion.js)

Coersion implicita

```JavaScript
console.log(4 + "7"); // 47 porque el 4 lo parsea de Number a String y entonces con el + me lo concatena

console.log(4 * "7");  // 28 aca hay COERSIN¿ON EXPLICITA, JS nos ajuda y nos pasa de String a Number y me hace la multiplicacion
```

Coersion explicita

Para pasar de Number a String:

```JavaScript
let c = 20;
let d = c + "";
typeof d; // String
// Si quiero castear la variable c a String
c = String(c);
typeof c; // String
```

Para pasar de String a Number
```JavaScript
let e = "80";
//Si quiero castear la variable e a un Number
e = Number(e);
typeof e; // Number
```

En el diseño web al ingresar datos en los **input** entran siempre como String por lo que si necesito numeros y realizar operaciones matematicas debo casearlos con **Number()**.


---