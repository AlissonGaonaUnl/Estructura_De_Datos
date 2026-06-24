function factorialCola(n, acumulador = 1) {

    //Caso Base
    //Llegamos a 0 y volvemos lo acumulado 
    if (n === 0) return acumulador;  

    //Caso Recursivo 
    // No hay operación después de la llamada → es de cola
  return factorialCola(n - 1, n * acumulador);
}

//Pruebas 
// Pruebas
console.log("Factorial de 0 =", factorialCola(0));
console.log("Factorial de 1 =", factorialCola(1));
console.log("Factorial de 5 =", factorialCola(5));
console.log("Factorial de 7 =", factorialCola(7));