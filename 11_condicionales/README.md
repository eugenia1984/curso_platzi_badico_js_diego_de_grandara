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


### Reto hacer un juego de piedra, papel o tijera

En este curso todavia no se vio, pero luego se puede hacer más interactivo pidiendole al usuario que ingrese piedra, papel o tijera y ahi se compara con la opcion de la pc

```JavaScript
const jugador = 'papel';
const pc = 'papel';
let resultado;

function ganador (){

	if(jugador === pc){
		return resultado = 'empate';
	} else if( (jugador == 'piedra' && pc == 'papel') || (jugador == 'papel' && pc == 'tijera') || (jugador == 'tijera' && pc == 'piedra')){
		return resultado = 'Gana PC';
  } else if( (jugador == 'piedra' && pc == 'tijera') || (jugador == 'papel' && pc == 'piedra') || (jugador == 'tijera' && pc == 'papel')){
		return resultado = 'Gana Jugador';
  } else {
		return resultado = 'Ingrese valores correctos';
  }
}

console.log(ganador());
```

---

### switch


---



---