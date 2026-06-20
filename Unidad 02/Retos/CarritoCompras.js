//Producto Naturales
const products = [
    { id: 1, name: "Colageno",     price: 10.00 },
    { id: 2, name: "Potasio",   price: 6.00 },
    { id: 3, name: "Vitamina C",    price: 12.00 },
    { id: 4, name: "Omega 3", price: 9.50 },
];

let cart = {}; // id: cantidad 

function add(id)      { cart[id] = (cart[id] || 0) + 1; }
function remove(id)   { delete cart[id]; }
function total()      { return Object.keys(cart).reduce((sum, id) => sum + products.find(p => p.id == id).price * cart[id], 0); }

function summary() {
    Object.keys(cart).forEach(id => {
    const p = products.find(p => p.id == id);
    console.log(`${p.name} x${cart[id]} — $${(p.price * cart[id]).toFixed(2)}`);
    });
    console.log(`Total: $${total().toFixed(2)}`);
}

// Uso
add(1); add(1); add(3);
summary(); 