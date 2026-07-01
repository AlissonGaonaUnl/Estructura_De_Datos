class NodoBusqueda {
    constructor(keyword, urlCache) {
        this.keyword = keyword
        this.urlCache = urlCache
        this.visitar = 1
        this.izquierdo = null
        this.derecho = null
    }
}

class MotorIndexaxionBST {
    constructor() {
        this.raiz = null
    }

    indexar(keyword, urlCache) {
        const nuevoNodo = new NodoBusqueda(keyword, urlCache)
        if (this.raiz == null) {
            this.raiz = nuevoNodo
            return;
        }

        let actual = this.raiz
        while (true) {
            if (keyword === actual.keyword) {
                actual.visitar++
                return;
            } else if (keyword < actual.keyword) {
                if (actual.izquierdo === null) {
                    actual.izquierdo = nuevoNodo
                    return;
                }
                actual = actual.izquierdo

            } else {
                if (actual.derecho === null) {
                    actual.derecho = nuevoNodo
                    return;
                }
            }
        }
        _insertarNodo(nodoActual, nuevoNodo); {
            const comparacion = nuevoNodo.keyword.localeCompare(nodoActual.keyword);
            if (comparacion === 0) {
                // Si el 'keyword' ya existe, incremente el contador 'visitas' en 1.
                nodoActual.visitas++;
                return;
            } else if (comparacion < 0) {
                // Ir a la izquierda
                if (nodoActual.izquierdo === null) {
                    nodoActual.izquierdo = nuevoNodo;
                } else {
                    this._insertarNodo(nodoActual.izquierdo, nuevoNodo);
                }
            } else {
                // Ir a la derecha
                if (nodoActual.derecho === null) {
                    nodoActual.derecho = nuevoNodo;
                } else {
                    this._insertarNodo(nodoActual.derecho, nuevoNodo);
                }
            }
        }
    }
}


