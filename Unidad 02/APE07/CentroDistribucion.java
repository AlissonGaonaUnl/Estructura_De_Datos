import java.util.ArrayList;
import java.util.Random;

public class CentroDistribucion {

    private ArrayList<Paquete> paquetes = new ArrayList<>();

    public void generarPaquetes(int n) {
        Random rand = new Random();

        for (int i = 0; i < n; i++) {
            int idAleatorio = rand.nextInt(100000); // IDs aleatorios - Genera los 10,000 paquetes 
            paquetes.add(new Paquete(idAleatorio));
        }
    }

    //BUSQUEDA LINEAL
    public Paquete busquedaLineal(int id) {
        for (Paquete p : paquetes) {
            if (p.getId() == id) {
                return p;
            }
        }
        return null;
    }

    
    // METODO DE QUICK SORT
    
    public void quickSort() {
        quickSort(0, paquetes.size() - 1);
    }

    private void quickSort(int inicio, int fin) {
        if (inicio < fin) {
            int pivote = particion(inicio, fin);
            quickSort(inicio, pivote - 1);
            quickSort(pivote + 1, fin);
        }
    }

    private int particion(int inicio, int fin) {
        int pivot = paquetes.get(fin).getId();
        int i = inicio - 1;

        for (int j = inicio; j < fin; j++) {
            if (paquetes.get(j).getId() <= pivot) {
                i++;
                Paquete temp = paquetes.get(i);
                paquetes.set(i, paquetes.get(j));
                paquetes.set(j, temp);
            }
        }

        Paquete temp = paquetes.get(i + 1);
        paquetes.set(i + 1, paquetes.get(fin));
        paquetes.set(fin, temp);

        return i + 1;
    }

    
    // BÚSQUEDA BINARIA
    
    public Paquete busquedaBinaria(int id) {
        int inicio = 0;
        int fin = paquetes.size() - 1;

        while (inicio <= fin) {
            int medio = (inicio + fin) / 2;

            if (paquetes.get(medio).getId() == id) {
                return paquetes.get(medio);
            }

            if (paquetes.get(medio).getId() < id) {
                inicio = medio + 1;
            } else {
                fin = medio - 1;
            }
        }

        return null;
    }
}