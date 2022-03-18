# :book: Curso de Platzi: Basico de JavaScript con Diego De Granda

---

## :star: 11 - Condicionales

---

### if

```
if( condicionAEvaluar) {
  //bloque de codigo a ejecutar si la condicion se cumple
}
```

Si lo que esta dentro de los parentesis es false -> nunca se ejecuta el bloque de codigo de adentro

---

### if-else

```
if( condicionAEvaluar) {
  //bloque de codigo a ejecutar si la condicion se cumple
} else {
  // bloque de codigo a ejecutar si la condicion no se cumple
}
```
---

### if- else if - else

Si hay alguna condición que tiene más de dos, entonces necesito un **if - else if - else**:

```
if (condition1) {
  // bloque a ejecutar si se cumple la condition1
} else if(condition2) {
  // bloque a ejecutar si se cumple la condition2
} else {
  // bloque a ejecutar si no se cumplen ninguna de las anteriores condiciones
}
```

Pueden haber más else if anidados entre medio

---

### Operador ternario

Es como tener un if - else en una sola linea, su sintaxis:

```(condicionAEvaluar)? accionPorTrue : accionPorFalse; ```

---
### switch

Su sintaxis:

```
switch (true) {
  case valor1:
    // bloque de codigo a ejecutar si cumple con el valor1
    break;
  case valor2:
  case valor3
    // bloque de codigo a ejecutar si cumple con el valor2 o el valor3
    break;
  default:
    // si no cumple con ninguno de los anteriores entra aca
}
```

Con el **break** cuando encuentra el case que se cumple se *rompe* y sale del loop del switch, por lo que no sigue evaluando los casos que le siguen.

También como esta en la sintaxis, puedo considerar más de un caso, por eso tengo valor2 y valor3 con el mismo bloque de codigo a ejecutar


---

### Reto hacer un juego de piedra, papel o tijera

En este curso todavia no se vio, pero luego se puede hacer más interactivo pidiendole al usuario que ingrese piedra, papel o tijera y ahi se compara con la opcion de la pc.

Asi que utilizo el prompt, lo que si no hago validaciones de lo que ingresa el usuario, confiamos en que ingrese bien las palabras :) .

```JavaScript
const pregunta = prompt("Ingresa tu opción: piedra, papel o tijera: "); 
const user = pregunta.toLowerCase();
const options = ["piedra", "papel", "tijera"];
// para que sea random lo que elije la computadora utilizo el metodo .random() de Marth asi accedo a uno de los valores del arreglo de las opciones
const machine = options[Math.floor(Math.random() * 3)];

//con true los casos van a pasar 
switch (true) {
    case (user === machine):
        alert('Es un empate');
        break;
    case (machine === 'piedra' && user === 'papel'):
        alert('Ganaste')
        break;
    case (machine === 'papel'  && user === 'tijera'):
        alert('Ganaste')
        break;
    case (machine === 'tijera' && user === 'piedra'):
        alert('Ganaste')
        break;
    default:
        alert('¡Perdiste!');       
}
```

---

:star: [Practica en JS de condicionales: if, if-else, if-else if - else, ternario, switch](https://github.com/eugenia1984/curso_platzi_basico_js_diego_de_granda/tree/main/11_condicionales/condicionales.js) 

---