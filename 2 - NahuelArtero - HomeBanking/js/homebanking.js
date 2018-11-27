//Declaración de variables
var nombreUsuario = "Nahuel";
var saldoCuenta = 10000;
var limiteExtraccion = 3000;
//Ejecución de las funciones que actualizan los valores de las variables en el HTML.

/*var sumarDinero = function(){ var x=2000; var suma= x + saldoCuenta ;console.log (suma)}*/
/*var restarDinero = function(){ var y=2000; var resta= y - saldoCuenta ;console.log (resta)}*/

window.onload = function() {
  iniciarSesion();
  cargarNombreEnPantalla();
  actualizarSaldoEnPantalla();
  actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
  var nuevoLimite = parseInt(prompt("Ingrese nuevo limite de extraccion"));
  var limiteMaximo = 6000;
  if (!isNaN(nuevoLimite)) {
    if (nuevoLimite % 100 == 0) {
      if (nuevoLimite <= limiteMaximo) {
        limiteExtraccion = nuevoLimite;
        actualizarLimiteEnPantalla();
        alert("Cambio exitoso \n Su nuevo limite de extraccion es de: $" + limiteExtraccion);
      } else {
        alert("Limite de extraccion maximo otorgado por el banco es de $6000");
      }
    } else {
      alert("Solo puedes ingresar multiplos de $100");
    }
  }
}
//en esta funcion el usuario deberia actualizar el valor del limiteExtraccion
// el limite debe ser mayor a cero
//el limite maximo debe ser otorgado por el banco
//debe aceptar solo valores numericos y con multiplos de 100


function extraerDinero() {
  var egresoDinero = parseInt(prompt("Ingrese monto de extraccion"));
  if (!isNaN(egresoDinero)) {
    if (egresoDinero % 100 == 0) {
      if (egresoDinero <= limiteExtraccion) {
        if (egresoDinero <= saldoCuenta) {
          var auxSaldo = saldoCuenta;
          saldoCuenta -= egresoDinero;
          actualizarSaldoEnPantalla();
          limiteExtraccion -= egresoDinero;
          actualizarLimiteEnPantalla();
          alert("Extraccion exitosa  \n Saldo anterior: $" + auxSaldo + "\n" + " Monto extraido: $" + egresoDinero + "\n" + " Tu saldo actual: $" + saldoCuenta);
        } else {
          alert("No dispones de dinero suficiente en la cuenta");
        }
      } else {
        alert("Limite de extraccion excedido");
      }
    } else {
      alert("Solo puedes retirar multiplos de $100");
    }
  }
}
//esta funcion deberia abrir un prompt y pedir cuanto queres extraer de dinero
//verificar que sean multiplos de 100
//luego restarlo del saldoCuenta y actualizarlo en el saldodepantalla
//ademas, restar el limite diario de extraccion


function depositarDinero() {
  var ingresoDinero = parseInt(prompt("Ingrese monto a depositar"));
  if (!isNaN(ingresoDinero)) {
    saldoCuenta += ingresoDinero;
    actualizarSaldoEnPantalla();
  }
}
//pedir el ingreso de dinero(chequear que ese dato ingresado efectivamente sea un numero)
// sumarlo al saldoCuenta y actualizarlo en el saldodepantalla

function pagarServicio() {
  var auxSaldo1 = saldoCuenta;
  var servicio = parseInt(prompt("Ingrese el numero del servicio a pagar \n 1- Agua \n 2- Luz \n 3- Telefono \n 4- Internet"));
  if (!isNaN(servicio)) {
    switch (servicio) {
      case 1:
        var agua = confirm("¿Quieres pagar el servicio agua?");
        if (agua == true) {
          if (350 <= saldoCuenta) {
            saldoCuenta -= 350;
            actualizarSaldoEnPantalla();
            alert("Pagaste con exito el servicio de agua  \n Saldo anterior: $" + auxSaldo1 + "\n" + " Monto del servicio de aguas: $350" + "\n" + " Tu saldo actual: $" + saldoCuenta);
          } else {
            alert("No dispones de dinero suficiente para el pago del servicio");
          }
        } else {
          alert("Cancelaste la operacion");
        }
        break;

      case 2:
        var luz = confirm("¿Quieres pagar el servicio de luz?");
        if (luz == true) {
          if (425 <= saldoCuenta) {
            saldoCuenta -= 425;
            actualizarSaldoEnPantalla();
            alert("Pagaste con exito el servicio de energia electrica \n Saldo anterior: $" + auxSaldo1 + "\n" + " Monto del servicio de energia electrica: $425" + "\n" + " Tu saldo actual: $" + saldoCuenta);
          } else {
            alert("No dispones de dinero suficiente para el pago del servicio");
          }
        } else {
          alert("Cancelaste la operacion");
        }
        break;
      case 3:
        var telefono = confirm("¿Quieres pagar el servicio de telefonia?");
        if (telefono == true) {
          if (210 <= saldoCuenta) {
            saldoCuenta -= 210;
            actualizarSaldoEnPantalla();
            alert("Pagaste con exito el servicio de telefonia \n Saldo anterior: $" + auxSaldo1 + "\n" + " Monto del servicio de telefonia: $210" + "\n" + " Tu saldo actual: $" + saldoCuenta);
          } else {
            alert("No dispones de dinero suficiente para el pago del servicio");
          }
        } else {
          alert("Cancelaste la operacion");
        }
        break;
      case 4:
        var internet = confirm("¿Quieres pagar el servicio de internet?");
        if (internet == true) {
          if (570 <= saldoCuenta) {
            saldoCuenta -= 570;
            actualizarSaldoEnPantalla();
            alert("Pagaste con exito el servicio de internet \n Saldo anterior: $" + auxSaldo1 + "\n" + " Monto del servicio de internet: $570" + "\n" + " Tu saldo actual: $" + saldoCuenta);
          } else {
            alert("No dispones de dinero suficiente para el pago del servicio");
          }
        } else {
          alert("Cancelaste la operacion");
        }
        break;
      default:
        alert("No corresponde a ningun servicio");
        break;
    }
  }
}
//esta funcion deberia pedir para elegir el servicio, luego pedirle el monto a pagar, restarlo del saldoCuenta y despues descontarlo del saldodepantalla

function transferirDinero() {
  var auxSaldo2 = saldoCuenta;
  var personaAtransferir = parseInt(prompt("Ingrese el numero de su cuenta amiga a la que desea transferirle dinero \n 1 - Antonella \n 2 - German \n 3 - Juan Cruz \n 4 - Gonzalo \n 5 - Daniel"));
  if (!isNaN(personaAtransferir)) {
    switch (personaAtransferir) {
      case 1:
        var antonella = parseInt(prompt("Ingrese el monto que desea transferir a Antonella"));
        if (!isNaN(antonella)) {
          if (antonella <= saldoCuenta) {
            saldoCuenta -= antonella;
            actualizarSaldoEnPantalla();
            alert("Transferiste con exito el dinero a Antonella  \n Saldo anterior: $" + auxSaldo2 + "\n" + " Monto transferido: $" + antonella + "\n" + " Tu saldo actual: $" + saldoCuenta);
          } else {
            alert("no dispones de dinero suficiente para la transferencia");
          }
        }
        break;
      case 2:
        var german = parseInt(prompt("Ingrese el monto que desea transferir a German"));
        if (!isNaN(german)) {
          if (german <= saldoCuenta) {
            saldoCuenta -= german;
            actualizarSaldoEnPantalla();
            alert("Transferiste con exito el dinero a German  \n Saldo anterior: $" + auxSaldo2 + "\n" + " Monto transferido: $" + german + "\n" + " Tu saldo actual: $" + saldoCuenta);
          } else {
            alert("no dispones de dinero suficiente para la transferencia");
          }
        }
        break;
      case 3:
        var juanCruz = parseInt(prompt("Ingrese el monto que desea transferir a Juan Cruz"));
        if (!isNaN(juanCruz)) {
          if (juanCruz <= saldoCuenta) {
            saldoCuenta -= juanCruz;
            actualizarSaldoEnPantalla();
            alert("Transferiste con exito el dinero a Juan Cruz  \n Saldo anterior: $" + auxSaldo2 + "\n" + " Monto transferido: $" + juanCruz + "\n" + " Tu saldo actual: $" + saldoCuenta);
          } else {
            alert("no dispones de dinero suficiente para la transferencia");
          }
        }
        break;
      case 4:
        var gonzalo = parseInt(prompt("Ingrese el monto que desea transferir a Gonzalo"));
        if (!isNaN(gonzalo)) {
          if (gonzalo <= saldoCuenta) {
            saldoCuenta -= gonzalo
            actualizarSaldoEnPantalla();
            alert("Transferiste con exito el dinero a Gonzalo  \n Saldo anterior: $" + auxSaldo2 + "\n" + " Monto transferido: $" + gonzalo + "\n" + " Tu saldo actual: $" + saldoCuenta);
          } else {
            alert("no dispones de dinero suficiente para la transferencia");
          }
        }
        break;
      case 5:
        var daniel = parseInt(prompt("Ingrese el monto que desea transferir"));
        if (!isNaN(daniel)) {
          if (daniel <= saldoCuenta) {
            saldoCuenta -= daniel;
            actualizarSaldoEnPantalla();
            alert("Transferiste con exito el dinero a Daniel  \n Saldo anterior: $" + auxSaldo2 + "\n" + " Monto transferido: $" + daniel + "\n" + " Tu saldo actual: $" + saldoCuenta);
          } else {
            alert("no dispones de dinero suficiente para la transferencia");
          }
        }
        break;
      default:
        alert("No corresponde a ninguna cuenta amiga");
        break;
    }
  }
}

function iniciarSesion() {
  var intento = 0;
  var intcontraseña = 3;
  while (intento < 3) {
    var iniciodeSesion = parseInt(prompt("Por favor ingrese clave de seguridad"));
    if (!isNaN(iniciodeSesion)) {
      if (iniciodeSesion === 4321) {
        alert("Bienvenido/a Nahuel Artero");
        return true;
      } else {
        --intcontraseña;
        alert("Contraseña incorrecta" + " le quedan " + intcontraseña + " intentos");
      }
      if (intcontraseña == 0) {
        document.body.innerHTML = "<h1 style=color:red;>Clave incorrecta, su dinero ha sido retenido por cuestiones de seguridad</h1>";
        return false;
      }
      intento = intento + 1;
    } else {
      alert("Por favor ingrese un numero valido");
    }
  }
}
//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
  document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
  document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
  document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
