
function ejercicio03() {
  const sueldoBruto = parseFloat(prompt('Ingrese el sueldo bruto (ARS):'));

  if (isNaN(sueldoBruto) || sueldoBruto <= 0) {
    alert('Error: ingrese un sueldo bruto numérico mayor a 0.');
    return;
  }

  const descuentosLey = sueldoBruto * (0.11 + 0.03 + 0.03);
  const netoProvisorio = sueldoBruto - descuentosLey;

  let retencionGanancias = 0;
  if (netoProvisorio > 2000000) {
    retencionGanancias = 120000 + (netoProvisorio - 2000000) * 0.25;
  } else if (netoProvisorio > 1200000) {
    retencionGanancias = (netoProvisorio - 1200000) * 0.15;
  }

  const sueldoNetoFinal = netoProvisorio - retencionGanancias;
  const pesos = (valor) => '$' + valor.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  console.log('===== RECIBO DE SUELDO =====');
  console.log('Sueldo Bruto: ' + pesos(sueldoBruto));
  console.log('Descuentos de Ley (17%): -' + pesos(descuentosLey));
  console.log('Retención de Ganancias: -' + pesos(retencionGanancias));
  console.log('Sueldo Neto Final: ' + pesos(sueldoNetoFinal));
}
ejercicio03();
