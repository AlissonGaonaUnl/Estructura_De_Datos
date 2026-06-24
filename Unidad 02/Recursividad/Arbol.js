function fibonacci(n, profundidad = 0, prefijo = "") {
    const sangria = "  ".repeat(profundidad);

    console.log(sangria + prefijo + "fib(" + n + ") llamado");

    if (n <= 1) {
    console.log(sangria + "└── Caso base: fib(" + n + ") = " + n);
    return n;
}

    const izq = fibonacci(n - 1, profundidad + 1, "├── izq: ");
    const der = fibonacci(n - 2, profundidad + 1, "└── der: ");
    const resultado = izq + der;

    console.log(sangria + "= " + izq + " + " + der + " = " + resultado);
    return resultado;
}

console.log("====== ÁRBOL DE LLAMADAS: fibonacci(4) ======\n");
const resultado = fibonacci(4);
console.log("\n====== RESULTADO FINAL: " + resultado + " ======");