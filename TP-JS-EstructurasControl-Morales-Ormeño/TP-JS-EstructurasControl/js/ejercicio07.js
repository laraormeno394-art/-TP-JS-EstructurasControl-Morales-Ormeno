
function ejercicio07() {
  const saldoInicial = 250000;
  let saldo = saldoInicial;
  let opcion = 0;

  do {
    const entrada = prompt('CAJERO AUTOMÁTICO\n1: Consultar Saldo\n2: Extraer Dinero\n3: Depositar Dinero\n4: Salir');
    opcion = entrada === null ? 4 : parseInt(entrada);

    switch (opcion) {
      case 1:
        alert(`Su saldo actual es $${saldo.toLocaleString('es-AR')} ARS`);
        break;
      case 2: {
        const montoExtraccion = parseFloat(prompt('Monto a extraer (múltiplo de $1.000):'));
        if (isNaN(montoExtraccion) || montoExtraccion <= 0) {
          alert('Error: ingrese un monto numérico mayor a 0.');
        } else if (montoExtraccion % 1000 !== 0) {
          alert('Error: el monto debe ser múltiplo de $1.000.');
        } else if (montoExtraccion > saldo) {
          alert('Error: saldo insuficiente.');
        } else {
          saldo -= montoExtraccion;
          alert(`Extracción exitosa. Nuevo saldo: $${saldo.toLocaleString('es-AR')} ARS`);
        }
        break;
      }
      case 3: {
        const montoDeposito = parseFloat(prompt('Monto a depositar:'));
        if (isNaN(montoDeposito) || montoDeposito <= 0) {
          alert('Error: ingrese un monto numérico mayor a 0.');
        } else {
          saldo += montoDeposito;
          alert(`Depósito exitoso. Nuevo saldo: $${saldo.toLocaleString('es-AR')} ARS`);
        }
        break;
      }
      case 4:
        alert('Gracias por utilizar el cajero. ¡Hasta pronto!');
        break;
      default:
        alert('Opción inválida. Elija una opción del 1 al 4.');
    }
  } while (opcion !== 4);
}
ejercicio07();
