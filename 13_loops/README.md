# :book: Curso de Platzi: Basico de JavaScript con Diego De Granda

---

## :star: 13 - Loops

Los bucles pueden ejecutar un bloque de código varias veces. JavaScript admite diferentes tipos de bucles:

- **for** - recorre un bloque de código varias veces

Voy a necesitar saber la longitud de mi array.

Y lo voy a ir recorrienod elemento por elemento, por la variable **i** (se la nombra asi por convensión i -> index del array), la cuál se va a ir modificando en cada iteración sino estoy en un loop infinito (por eso el **i++**), y también tengo una **condición a evaluar** que en un momento deja de ser true, para que se corte el loop

```
for ( let i = 0 ; i < miArray.length; i++) {
  //Bloque de codigo a ejecutar por cada iteracion del array
}
```

- **for/in** - recorre las propiedades de un objeto


- **for/of** - recorre los valores de un objeto iterable

Voy a ir recorriendo cada elemento del array desde el primero hasta el ultimo y no necesito saber la longitud de mi arra.

Sintaxis:

```
for (let elemento of listaDeElementos) {
  // bloque que voy a ejecutar por cada elemento del array
}

```

- **while** - recorre un bloque de código mientras se cumple una condición específica


Usando el mismo array de estudiantes de antes y la funcion saludarEstudiantes()

```JavaScript
while (estudiantes.length > 0) {
  // con shift en cada iteracion voy a ir sacando un estudiante y voy a saludar a ese estudiante sacado
  let estudiantesAchicados = estudiantes.shift();
  saludarEstudiantes(estudiantesAchicados);
}
```

- **do/while** - también recorre un bloque de código mientras se cumple una condición específica

---

[Ejercicios de JS con loops](https://github.com/eugenia1984/curso_platzi_basico_js_diego_de_granda/tree/main/13_loops/loops.js)

FOR:

```JavaScript
const estudiantes = ['Maria', 'Sergio', 'Rosa', 'Daniel']

function saludarEstudiantes(estudiante) {
  console.log(`Hola ${estudiante}`);
}

for ( let i = 0; i < estudiantes.length; i++) {
  saludarEstudiantes(estudiantes[i]);
}
```

FOR OF
```JavaScript
const mascotas = ['perro', 'gato', 'hamster'];

for (let mascota of mascotas) {
  console.log(mascota);
}
```


---