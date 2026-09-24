
function ejercicio09() {
  const dificultadRespirar = (prompt('¿Dificultad para respirar? (si / no):') || '').trim().toLowerCase();
  const nivelDolor = parseInt(prompt('Nivel de dolor (1 a 10):'));
  const presionSistolica = parseFloat(prompt('Presión arterial sistólica (mm Hg):'));

  if (dificultadRespirar !== 'si' && dificultadRespirar !== 'no') {
    alert('Error: responda "si" o "no" sobre la dificultad para respirar.');
  } else if (isNaN(nivelDolor) || nivelDolor < 1 || nivelDolor > 10) {
    alert('Error: el nivel de dolor debe ser un entero entre 1 y 10.');
  } else if (isNaN(presionSistolica) || presionSistolica <= 0) {
    alert('Error: ingrese una presión sistólica numérica mayor a 0.');
  } else if (dificultadRespirar === 'si' || presionSistolica > 180) {
    alert('TRIAJE ROJO: atención inmediata.\nTiempo máximo de espera: 0 minutos.');
  } else if (nivelDolor >= 7 || (presionSistolica >= 140 && presionSistolica <= 180)) {
    alert('TRIAJE AMARILLO: urgencia media.\nTiempo máximo de espera: 30 minutos.');
  } else {
    alert('TRIAJE VERDE: consulta de baja prioridad.\nTiempo máximo de espera: 120 minutos.');
  }
}
ejercicio09();
