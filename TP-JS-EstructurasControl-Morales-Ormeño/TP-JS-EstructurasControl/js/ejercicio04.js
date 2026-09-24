
function ejercicio04() {
  const distanciaKm = parseFloat(prompt('Distancia del viaje en km:'));
  const tiempoMinutos = parseFloat(prompt('Tiempo estimado en minutos:'));
  const demanda = (prompt('Nivel de demanda (baja, media, alta):') || '').trim().toLowerCase();

  const bajadaBandera = 800;
  const costoPorKm = 350;
  const costoPorMinuto = 80;
  const peaje = 1500;

  let factorDemanda = 0;
  switch (demanda) {
    case 'baja': factorDemanda = 1.0; break;
    case 'media': factorDemanda = 1.3; break;
    case 'alta': factorDemanda = 1.8; break;
  }

  if (isNaN(distanciaKm) || distanciaKm <= 0 || isNaN(tiempoMinutos) || tiempoMinutos <= 0) {
    alert('Error: la distancia y el tiempo deben ser números mayores a 0.');
  } else if (factorDemanda === 0) {
    alert('Error: el nivel de demanda debe ser "baja", "media" o "alta".');
  } else {
    let costoTotal = (bajadaBandera + distanciaKm * costoPorKm + tiempoMinutos * costoPorMinuto) * factorDemanda;
    if (distanciaKm > 20) {
      costoTotal += peaje;
    }
    alert(`Costo estimado del viaje: $${costoTotal.toLocaleString('es-AR', { maximumFractionDigits: 2 })} ARS`);
  }
}
ejercicio04();
