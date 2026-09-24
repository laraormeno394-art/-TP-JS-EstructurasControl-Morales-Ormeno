
function ejercicio02() {
  const edad = parseInt(prompt('Edad del conductor:'));
  const cobertura = (prompt('Tipo de cobertura (terceros, terceros_completo, todo_riesgo):') || '').trim().toLowerCase();
  const accidentes = parseInt(prompt('Cantidad de accidentes en el último año:'));

  let tarifaBase = 0;
  switch (cobertura) {
    case 'terceros': tarifaBase = 45000; break;
    case 'terceros_completo': tarifaBase = 70000; break;
    case 'todo_riesgo': tarifaBase = 110000; break;
  }

  if (isNaN(edad) || edad <= 0 || isNaN(accidentes) || accidentes < 0) {
    alert('Error: ingrese una edad y una cantidad de accidentes válidas.');
  } else if (tarifaBase === 0) {
    alert('Error: tipo de cobertura no válido.');
  } else if (accidentes >= 3 && cobertura === 'todo_riesgo') {
    alert('Contratación denegada: con 3 o más accidentes no se habilita "todo_riesgo".');
  } else {
    let ajuste = 0; 
    if (edad < 25) ajuste += 0.20;
    if (accidentes === 0) ajuste -= 0.10;
    if (accidentes >= 3) ajuste += 0.30;
    const primaFinal = tarifaBase * (1 + ajuste);
    alert(`Prima mensual final: $${primaFinal.toLocaleString('es-AR', { maximumFractionDigits: 2 })} ARS`);
  }
}
ejercicio02();
