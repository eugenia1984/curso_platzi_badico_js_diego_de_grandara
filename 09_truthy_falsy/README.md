# :book: Curso de Platzi: Basico de JavaScript con Diego De Granda

---

## :star: 09 - Truthy y Falsy

Usamos la función de JS que es Boolean() dentro del paréntesis ponemos el valor y nos dice si el mismo el False o True.

**Falsy**

```JavaScript
Boolean(0); //false , solo el numero 0 es false, si son positivos o negativos es true
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false
```

**Truthy**
```JavaScript
Boolean(1) —> true //cualquier numero que no sea igual a cero es true
Boolean(“a”) —> true
Boolean(" ") —> true // siendo un espacio el valor es true
Boolean([]) —> true // un array nos da un true
Boolean({}) —> true // un objeto nos da el valor de true
Boolean(function() {}) —> true //una funcion tambien es true
Boolean(true) —> true
```

---

Todo esto lo vamos a usar en condiciones esto valida si es verdadero o falso para ejecutar cierta acción.

---