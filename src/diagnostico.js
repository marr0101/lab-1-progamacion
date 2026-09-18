function f(a, b) {
    if (a > 0) {
        return a * b * 0.93;
    } else {
        return 0;
    }
}

console.log(f(10, 20));

const DESCUENTO = 0.07;

function calcularTotalConDescuento(cantidad, precioUnitario) {
    if (cantidad <= 0 || precioUnitario <= 0) {
        return 0;
    }

    return cantidad * precioUnitario * (1 - DESCUENTO);
}

const cantidadProductos = 10;
const precioUnitario = 20;

const total = calcularTotalConDescuento(
    cantidadProductos,
    precioUnitario
);

console.log('Total:', total);