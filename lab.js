// Código limpio: nombre descriptivo, constante con significado, caso inválido explícito
function calcularTotalConDescuento(cantidad, precioUnitario) {
    const DESCUENTO = 0.07; // 7% de descuento por volumen
    
    // Manejo explícito de casos inválidos (KISS y robustez)
    if (cantidad <= 0 || precioUnitario <= 0) {
        return 0;
    }
    
    return cantidad * precioUnitario * (1 - DESCUENTO);
}