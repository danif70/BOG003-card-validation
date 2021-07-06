import validator from './validator.js';
const seleccion = "Tu Selección:  ";
const monto = "Monto:  ";
const errores1 = "Número de dígitos incorrecto";
const errores2 = "El número de tarjeta no es válido";
//En esta parte están los eventos que se ejecutan cuando se clickea alguno de los botones
document.getElementById("comprar1").addEventListener("click", () => {
    document.getElementById("homepage").setAttribute("hidden", "");
    document.getElementById("paginapago").removeAttribute("hidden");
    document.getElementById("opcion").innerHTML = seleccion + "Programación Básica";
    document.getElementById("precio").innerHTML = monto + " COP 50.000,oo";
  }),
  document.getElementById("comprar2").addEventListener("click", () => {
    document.getElementById("homepage").setAttribute("hidden", "");
    document.getElementById("paginapago").removeAttribute("hidden");
    document.getElementById("opcion").innerHTML = seleccion + " Desarrollo Móvil";
    document.getElementById("precio").innerHTML = monto + " COP 90.000,oo";
  }),
  document.getElementById("comprar3").addEventListener("click", () => {
    document.getElementById("homepage").setAttribute("hidden", "");
    document.getElementById("paginapago").removeAttribute("hidden");
    document.getElementById("opcion").innerHTML = seleccion + " Diseño UX";
    document.getElementById("precio").innerHTML = monto + " COP 50.000,oo";
  }),
  document.getElementById("regresar").addEventListener("click", () => {
    document.getElementById("paginaresultado").setAttribute("hidden", "");
    document.getElementById("homepage").removeAttribute("hidden");
    document.getElementById("ingresardigitos").value = "";
    document.getElementById("mensajeserrores").innerHTML = "";
  }),
  document.getElementById("devolver").addEventListener("click", () => {
    document.getElementById("paginapago").setAttribute("hidden", "");
    document.getElementById("homepage").removeAttribute("hidden");
    document.getElementById("ingresardigitos").value = "";
    document.getElementById("mensajeserrores").innerHTML = "";
  }),
  //Este evento ejecuta la función que verifica extensión de tarjeta
  document.getElementById("resultado").addEventListener("click", () => {
    const creditCardNumber = document.getElementById("ingresardigitos").value;
    extension(creditCardNumber);
  });
//Esta función verifica que el # de tarjeta introducida tenga una extensión de 12 a 19 dígitos
function extension(creditCardNumber) {
  if (creditCardNumber.length < 12 || creditCardNumber.length > 20) {
    document.getElementById("mensajeserrores").innerHTML = errores1;
  } else {
    return verificacion(creditCardNumber);
  }
}
//Esta función llama al objeto validator y al método isValid
function verificacion(creditCardNumber) {
  let esValida = validator.isValid(creditCardNumber)
  if (esValida === true) {
    document.getElementById("paginapago").setAttribute("hidden", "");
    document.getElementById("paginaresultado").removeAttribute("hidden");
    enmascarar(creditCardNumber);
  } else {
    document.getElementById("mensajeserrores").innerHTML = errores2;
  }
}
//Esta función llama al objeto validator y al método maskify
function enmascarar(creditCardNumber) {
  document.getElementById("verificado").innerHTML = validator.maskify(creditCardNumber);
}

console.log(validator);
