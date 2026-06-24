function sumaDigitos(n) {

// TODO: Implementar el Caso Base
//Si n es 0, no hay mas digitos y debe devolver 0
if (n === 0) return 0; 

//TODO: Implementar el Caso Recursivo
//El ultimo dijito + suma del resto 
return (n % 10) + sumaDigitos(Math.floor(n / 10));

}
// Casos de prueba para validación
console.assert(sumaDigitos(1243) === 10, "Error ensumaDigitos(1243)");
console.assert(sumaDigitos(0) === 0, "Error en sumaDigitos(0)");
console.assert(sumaDigitos(9) === 9, "Error en sumaDigitos(9)");
console.log("Ejercicio 1.1 superado.");
