
function ejercicio08() {
  const montoCarrito = parseFloat(prompt('Monto total del carrito (ARS):'));
  const categoria = (prompt('Categoría del usuario (Bronce, Plata, Oro):') || '').trim().toLowerCase();
  const codigo = (prompt('Código de descuento (DESC10, SUPER20 o deje vacío):') || '').trim().toUpperCase();

  if (isNaN(montoCarrito) || montoCarrito <= 0) {
    alert('Error: ingrese un monto de carrito numérico mayor a 0.');
    return;
  }

  let porcentajeMembresia = 0;
  switch (categoria) {
    case 'bronce': porcentajeMembresia = 0; break;
    case 'plata': porcentajeMembresia = 0.05; break;
    case 'oro': porcentajeMembresia = 0.15; break;
    default:
      alert('Error: la categoría debe ser Bronce, Plata u Oro.');
      return;
  }

  let porcentajeCupon = 0;
  let notaCupon = 'sin cupón';
  switch (codigo) {
    case 'DESC10':
      porcentajeCupon = 0.10;
      notaCupon = 'DESC10 aplicado';
      break;
    case 'SUPER20':
      if (montoCarrito > 50000) {
        porcentajeCupon = 0.20;
        notaCupon = 'SUPER20 aplicado';
      } else {
        notaCupon = 'SUPER20 no aplica: requiere compras mayores a $50.000';
      }
      break;
    case '':
      break;
    default:
      notaCupon = 'código inválido, no se aplicó ningún cupón';
  }

  const descuentoMembresia = montoCarrito * porcentajeMembresia;
  const descuentoCupon = montoCarrito * porcentajeCupon;
  const subtotal = montoCarrito - descuentoMembresia - descuentoCupon;
  const envio = subtotal > 100000 ? 0 : 4500;
  const totalAPagar = subtotal + envio;
  const pesos = (valor) => '$' + valor.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  console.log('===== DETALLE DE COMPRA =====');
  console.log('Monto del carrito: ' + pesos(montoCarrito));
  console.log(`Descuento por membresía (${categoria}): -${pesos(descuentoMembresia)}`);
  console.log(`Descuento por cupón (${notaCupon}): -${pesos(descuentoCupon)}`);
  console.log('Costo de envío: ' + (envio === 0 ? 'GRATIS' : pesos(envio)));
  console.log('TOTAL A PAGAR: ' + pesos(totalAPagar));
}
ejercicio08();
