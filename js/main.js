function obtenerNumeroValido(mensaje, min, max) {
    let numero;
    while (true) {
        numero = parseFloat(prompt(mensaje));
        if (isNaN(numero)) {
            alert("Ingrese un número válido");
        } else if (numero < min || numero > max) {
            alert("Ingrese un número entre " + min + " y " + max);
        } else {
            break;
        }
    }
    return numero;
}

function calcularRendimiento(redimientos, dinero, dias) {
    let porcentajeDecimal = redimientos / 100;
    let rendimientoAnual = porcentajeDecimal * dinero;
    let rendimientoDiario = rendimientoAnual / 365;
    let rendimientoEnDiasPedidos = rendimientoDiario * dias;
    return rendimientoEnDiasPedidos;
}

let redimientos = obtenerNumeroValido("Ingrese el porcentaje de rendimientos actual de Mercado Pago (36.6)", 1, 150);
console.log("Los rendimientos son del " + redimientos + "% anuales");

let dinero = obtenerNumeroValido("Ingrese la cantidad de dinero disponible", 5000, 1000000);
console.log("La cantidad de dinero invertido es: $" + dinero);

let dias = obtenerNumeroValido("Ingrese la cantidad de días para simular los ingresos (máx 365)", 1, 365);
console.log("Calcular los ingresos diarios de " + dias + " días");

let rendimientoTotal = calcularRendimiento(redimientos, dinero, dias);

console.log("Rendimiento anual: $" + (redimientos * dinero / 100));
console.log("Rendimiento diario: $" + parseInt(redimientos * dinero / 100 / 365));
console.log("Rendimiento total de los " + dias + " días es: $" + parseInt(rendimientoTotal));

alert("¡Felicidades! Después de " + dias + " días, generaste $" + parseInt(rendimientoTotal) + ", y tu saldo quedó en $" + (dinero + parseInt(rendimientoTotal)));
