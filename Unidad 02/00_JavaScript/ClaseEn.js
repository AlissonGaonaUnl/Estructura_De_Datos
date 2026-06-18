class Persona {
  // El constructor inicializa los atributos del objeto
    constructor(nombre, edad) {
    this.nombre = nombre; // 'this' hace referencia al objeto que se va a crear
    this.edad = edad;
    }

  // Método (acción que puede realizar el objeto)
    saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Creación de un objeto (instancia) a partir de la clase
const persona1 = new Persona("Ana", 28);
persona1.saludar(); // Imprime: Hola, mi nombre es Ana y tengo 28 años.