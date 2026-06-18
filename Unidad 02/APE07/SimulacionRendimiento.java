public class SimulacionRendimiento {
    public static void main(String[] args) {

        CentroDistribucion centro = new CentroDistribucion();
        centro.generarPaquetes(10000);

        int idBuscado = 50000; // ID aleatorio de prueba

        
        // BÚSQUEDA LINEAL
    
        long inicioLineal = System.nanoTime();
        centro.busquedaLineal(idBuscado);
        long finLineal = System.nanoTime();
        long tiempoLineal = finLineal - inicioLineal;

    
        // ORDENAMIENTO (QUICKSORT)
    
        long inicioOrden = System.nanoTime();
        centro.quickSort();
        long finOrden = System.nanoTime();
        long tiempoOrden = finOrden - inicioOrden;

    
        //  BÚSQUEDA BINARIA
    
        long inicioBin = System.nanoTime();
        centro.busquedaBinaria(idBuscado);
        long finBin = System.nanoTime();
        long tiempoBin = finBin - inicioBin;

        
        System.out.println("===== RESULTADOS DE RENDIMIENTO =====");
        System.out.println("Busqueda lineal: " + tiempoLineal + " ns");
        System.out.println("Ordenamiento (QuickSort): " + tiempoOrden + " ns");
        System.out.println("Busqueda binaria: " + tiempoBin + " ns");

        long totalBinaria = tiempoOrden + tiempoBin;

        System.out.println("TOTAL (ordenar + binaria): " + totalBinaria + " ns");
    }
}