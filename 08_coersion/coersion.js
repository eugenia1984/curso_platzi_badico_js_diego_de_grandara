/**** Coersion implicita****/
console.log(4 + "7"); // 47 porque el 4 lo parsea de Number a String y entonces con el + me lo concatena

console.log(4 * "7");  // 28 aca hay COERSIN¿ON EXPLICITA, JS nos ajuda y nos pasa de String a Number y me hace la multiplicacion

let a = 4 + "7";
typeof a; // String -> partio de Number + String

let b = 4 * "5";
typeof b; // Number -> partio de Number * String

/**** Coersion explicita****/

let c = 20;
let d = c + "";
typeof d; // String
// Si quiero castear la variable c a String
c = String(c);
typeof c; // String

let e = "80";
//Si quiero castear la variable e a un Number
e = Number(e);
typeof e; // Number