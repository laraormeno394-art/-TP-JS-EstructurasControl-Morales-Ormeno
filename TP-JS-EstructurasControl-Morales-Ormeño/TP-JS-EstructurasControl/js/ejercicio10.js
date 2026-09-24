
function ejercicio10() {
  const montoARS = parseFloat(prompt('Monto en Pesos Argentinos (ARS):'));
  const monedaDestino = (prompt('Moneda de destino (USD, EUR, BRL):') || '').trim().toUpperCase();
  const mesesInflacion = parseInt(prompt('Meses de proyección de inflación (1 a 12):'));

  let cotizacion = 0;
  switch (monedaDestino) {
    case 'USD': cotizacion = 1300; break;
    case 'EUR': cotizacion = 1420; break;
    case 'BRL': cotizacion = 220; break;
  }

  if (isNaN(montoARS) || montoARS <= 0) {
    alert('Error: ingrese un monto numérico mayor a 0.');
  } else if (cotizacion === 0) {
    alert('Error: la moneda debe ser USD, EUR o BRL.');
  } else if (isNaN(mesesInflacion) || mesesInflacion < 1 || mesesInflacion > 12) {
    alert('Error: los meses deben ser un entero entre 1 y 12.');
  } else {
    const comision = montoARS * 0.02;
    const montoRecibido = (montoARS - comision) / cotizacion;
    const montoProyectado = montoARS * (1 + 0.04 * mesesInflacion);
    const perdidaPoderAdquisitivo = montoProyectado - montoARS;
    const formato = (valor) => valor.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    console.log('===== CONVERSIÓN DE DIVISAS =====');
    console.log(`Monto recibido en ${monedaDestino} (con 2% de comisión): ${formato(montoRecibido)}`);
    console.log(`Valor proyectado por inflación a ${mesesInflacion} mes(es): $${formato(montoProyectado)} ARS`);
    console.log(`Pérdida de poder adquisitivo estimada: $${formato(perdidaPoderAdquisitivo)} ARS`);
  }
}
ejercicio10();
