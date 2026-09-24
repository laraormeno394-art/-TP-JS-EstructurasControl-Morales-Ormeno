
function ejercicio05() {
  const ingresosAnuales = parseFloat(prompt('Ingresos brutos anuales (ARS):'));
  const superficie = parseFloat(prompt('Superficie afectada (m²):'));

  if (isNaN(ingresosAnuales) || ingresosAnuales < 0 || isNaN(superficie) || superficie < 0) {
    alert('Error: ingrese valores numéricos válidos (mayores o iguales a 0).');
  } else if (ingresosAnuales <= 6000000 && superficie <= 30) {
    alert('Categoría asignada: A');
  } else if (ingresosAnuales <= 12000000 && superficie <= 45) {
    alert('Categoría asignada: B');
  } else if (ingresosAnuales <= 18000000 && superficie <= 85) {
    alert('Categoría asignada: C');
  } else {
    alert('Categoría asignada: Régimen General');
  }
}
ejercicio05();
