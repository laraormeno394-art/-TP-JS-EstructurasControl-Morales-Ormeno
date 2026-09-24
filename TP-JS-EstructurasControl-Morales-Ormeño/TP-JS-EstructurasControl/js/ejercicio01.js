
function ejercicio01() {
  const rol = (prompt('Rol del usuario (admin, editor, cliente):') || '').trim().toLowerCase();
  const estadoCuenta = (prompt('Estado de la cuenta (activa o suspendida):') || '').trim().toLowerCase();
  const hora = parseInt(prompt('Hora actual (entero de 0 a 23):'));

  if (isNaN(hora) || hora < 0 || hora > 23) {
    alert('Error: la hora debe ser un número entero entre 0 y 23.');
  } else if (estadoCuenta !== 'activa' && estadoCuenta !== 'suspendida') {
    alert('Error: el estado de la cuenta debe ser "activa" o "suspendida".');
  } else if (estadoCuenta === 'suspendida') {
    alert('Acceso denegado: la cuenta está suspendida.');
  } else if (rol === 'admin') {
    alert('Acceso total permitido.');
  } else if (rol === 'editor') {
    if (hora >= 8 && hora <= 18) {
      alert('Acceso permitido (horario de editores: 8 a 18 hs).');
    } else {
      alert('Acceso denegado: los editores solo ingresan entre las 8 y las 18 hs.');
    }
  } else if (rol === 'cliente') {
    alert('Acceso permitido: cuenta activa.');
  } else {
    alert('Rol no autorizado');
  }
}
ejercicio01();
