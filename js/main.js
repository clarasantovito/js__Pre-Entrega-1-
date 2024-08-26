// %
let redimientos = parseFloat(prompt("Ingrese el porcentaje de rendimientos actual de Mercado Pago (36.6)"));

while (true) {
    if (isNaN(redimientos)) {
        redimientos = parseFloat(prompt("ingrese un número válido"));
    } else if (redimientos == 0 || redimientos > 150) {
        redimientos =parseFloat(prompt("ingrese un porcentaje entre 1 y 150"));
    } else {
        break;
    }
}

console.log("Los rendimientos son del " + redimientos + "% anuales");




//cantidad de dinero
let dinero = parseInt(prompt("Ingrese la cantidad de dinero disponible"));

while (true) {
    if (isNaN(dinero)) {
        dinero = parseInt(prompt("Ingrese un número válido"));
    } else if (dinero < 5000 || dinero > 1000000) {
        dinero =parseInt(prompt("Ingrese un número entre 5.000 y 1.000.000"));
    } else {
        break;
    }
}

console.log("La cantidad de dinero invertido es: $" + dinero);



//dias
let dias = parseInt(prompt("ingrese la cantidad de dias para simular los ingresos (máx 365)"));

while (true) {
    if (isNaN(dias)) {
        dias = parseInt(prompt("Ingrese un número válido"));
    } else if (dias > 365 || dias == 0) {
        dias = parseInt(prompt("Ingrese un número entre 1 y 365"));
    } else {
        break;
    }
}

console.log("calcular los ingresos diarios de " + dias + " dias");



// Cálculo
let porcentajeDecimal = redimientos / 100;
let rendimientoAnual = porcentajeDecimal * dinero;
let rendimientoDiario = rendimientoAnual / 365;
let rendimientoEnDiasPedidos = rendimientoDiario * dias;

// console.log("Porcentaje decimal: " + porcentajeDecimal);
console.log("Rendimiento anual: $" + parseInt(rendimientoAnual));
console.log("Rendimiento diario: $" + parseInt(rendimientoDiario));
console.log("Rendimiento total de los " + dias + " días es: $" + parseInt(rendimientoEnDiasPedidos));


alert("¡Felicidades! Después de " + dias + " días, generaste $" + parseInt(rendimientoEnDiasPedidos) + ", y tu saldo quedó en $" + (dinero + parseInt(rendimientoEnDiasPedidos)));



