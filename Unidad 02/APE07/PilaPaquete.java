
public class PilaPaquete {
    private Paquete[] stack;
    private int top;

    public PilaPaquete(int capacidad) {
        this.stack = new Paquete[capacidad];
        this.top = -1; // -1 significa que la pila está vacía (no hay índice 0 aún)  Estante vacío — no señala ninguna caja aún
    }

    public void push(Paquete p) {
        // LIFO

        if (top == stack.length - 1) {
            System.out.println("Pila llena, no se puede agregar el paquete.");
            return;
        }
        stack[++top] = p; // Primero incrementa top, luego inserta
    }

    public Paquete pop() {
        // LIFO: Last In, First Out — devuelve el último que entró
        if (top == -1) {  // top == -1 significa pila vacía
            System.out.println("Pila vacía, no hay paquetes para despachar.");
            return null;
        }
        Paquete p = stack[top];
        stack[top--] = null; // Libera referencia, luego decrementa top
        return p;
    }
}
//push    ++top    primero sube, luego inserta
// pop    top--    primero borra, luego baja

//Primero incrementa top
//Luego usa ese nuevo valor como índice