function invertirArreglo(arr, inicio, fin) {
// TODO: Identificar la condición de parada (Caso Base)
//No hay más elementos a intercambiar 
if (inicio >= fin) return;

// TODO: Realizar el intercambio e invocar la recursividad
//Intercambia extremos 
[arr[inicio], arr[fin]] = [arr[fin], arr[inicio]];

}
// Casos de prueba para validación
let miLista = [10, 20, 30, 40, 50];
invertirArreglo(miLista, 0, miLista.length - 1);
console.assert(JSON.stringify(miLista) === JSON.stringify([50, 40,30, 20, 10]));
console.log("Ejercicio 2.1 superado.");
