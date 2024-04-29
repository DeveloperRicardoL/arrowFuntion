// crear un repositorio llamado bases-js

// PASAR TODAS LAS SIGUIENTES FUNCIONES A FUNCION FLECHA

// Función para sumar dos números
function sumar(a, b) {
  return a + b;
}

const arrowSumar = (a, b) => a + b;
//console.log(arrowSumar);

// Función para restar dos números
function restar(a, b) {
  return a - b;
}

const arrowRestar = (a, b) => a - b;

// Función para multiplicar dos números
function multiplicar(a, b) {
  return a * b;
}

const arrowMultiplicar = (a, b) => a * b;

// Función para dividir dos números
function dividir(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "No se puede dividir por cero";
  }
}

const arrowDividir = (a, b) => {
  if (b !== 0) {
    return a / b;
  } else {
    return "No se puede dividir por cero";
  }
};

// Función para calcular el cuadrado de un número
function cuadrado(numero) {
  return numero * numero;
}

const arrowCuadrado = (nro) => nro * nro;

// Función para verificar si un número es par
function esPar(numero) {
  return numero % 2 === 0;
}

const arrowEsPar = (nro) => nro % 2 === 0;

// Función para convertir grados Celsius a Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

const arrowCelsiusToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

// Función para calcular el área de un círculo
function areaCirculo(radio) {
  return Math.PI * radio * radio;
}

const arrowAreaCirculo = (radio) => {
  return Math.PI * radio * radio;
};
// Función para revertir una cadena de texto
function revertirTexto(texto) {
  return texto.split("").reverse().join("");
}

const arrowRevertirTexto = (texto) => {
  return texto.split("").reverse().join("");
};
