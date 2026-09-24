
function ejercicio06() {
  const ingresoMensual = parseFloat(prompt('Ingreso mensual neto (ARS):'));
  const antiguedadAnios = parseFloat(prompt('Antigüedad laboral (años):'));
  const deudasPendientes = (prompt('¿Posee deudas pendientes? (si / no):') || '').trim().toLowerCase();
  const montoSolicitado = parseFloat(prompt('Monto del crédito solicitado (ARS):'));

  if (isNaN(ingresoMensual) || ingresoMensual <= 0 || isNaN(antiguedadAnios) || antiguedadAnios < 0 || isNaN(montoSolicitado) || montoSolicitado <= 0) {
    alert('Error: ingrese valores numéricos válidos.');
    return;
  }
  if (deudasPendientes !== 'si' && deudasPendientes !== 'no') {
    alert('Error: responda "si" o "no" sobre las deudas pendientes.');
    return;
  }

  const cuotaMensual = (montoSolicitado * 1.3) / 12; 
  const cuotaMaxima = ingresoMensual * 0.3;
  const formato = (valor) => valor.toLocaleString('es-AR', { maximumFractionDigits: 2 });

  if (deudasPendientes === 'si') {
    alert('Crédito RECHAZADO: posee deudas pendientes.');
  } else if (antiguedadAnios < 1) {
    alert('Crédito RECHAZADO: la antigüedad laboral debe ser de al menos 1 año.');
  } else if (cuotaMensual > cuotaMaxima) {
    alert(`Crédito RECHAZADO: la cuota estimada ($${formato(cuotaMensual)}) supera el 30% del ingreso mensual ($${formato(cuotaMaxima)}).`);
  } else {
    alert(`Crédito PRE-APROBADO. Cuota mensual estimada: $${formato(cuotaMensual)}`);
  }
}
ejercicio06();
