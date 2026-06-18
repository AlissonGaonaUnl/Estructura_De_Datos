public class GestorRutas {
    public static void ordenar(Paquete[] datos) {

        int n = datos.length;
        boolean huboIntercambio;

        // Burbuja: recorremos n-1 veces
        for (int i = 0; i < n - 1; i++) {
            //Cada pasada i garantiza que el elemento más grande restante llega a su posición final al final del arreglo.
            huboIntercambio = false; // Al inicio de cada pasada, asumimos que no habrá intercambios


            // Si no hubo intercambios, el arreglo ya está ordenado
            if (!huboIntercambio) break;
        }
    }
}