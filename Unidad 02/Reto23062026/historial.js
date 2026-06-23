
// --- Estructura: Pila (Stack) ---
const historial = [];
let paginaActual = null;

function visitar(url) {
    if (paginaActual) historial.push(paginaActual);
    paginaActual = url;
    console.log(`Visitando: ${paginaActual} | Pila: [${historial}]`);
}

function goBack() {
    if (historial.length === 0) {
    console.log("No hay páginas anteriores.");
    return;
    }
    paginaActual = historial.pop();
    console.log(`Regresando a: ${paginaActual} | Pila: [${historial}]`);
}

// --- Prueba ---
visitar("google.com");
visitar("wikipedia.org");
visitar("github.com");
goBack();
goBack();
goBack(); // caso borde: pila vacía  
