
// * Sistema de Ecuaciones lineales 2x2.
// * Solución por el método de Cramer.
// # 5X-2Y=-2
// # -3X+7Y=-22

// Consultamos los datos y armamos unos arreglos para las ecuaciones
let ecuacion1 = [];
let ecuacion2 = [];
// Pide los coeficientes y el termino independiente de cada ecuación
// for (let i = 0; i < 3; i++){
//     ecuacion1.push();
// }

// Ejempl:
// Ecuación 1.
// 5X-2Y=-2
const ec1 = [5,-2,-2];
// Ecuación 2.
// -3X+7Y=-22
const ec2 = [-3,7,-22];


// Creamos el Determinante o Arreglo
const det = [ec1,ec2];

// Calculamos los determinantes

// Determinante del sistema
let ds
ds = (det[0][0] * det[1][1]) - (det[0][1] * det[1][0]);
console.log(ds);
console.log(`Determinante del sistema: ${ds}`);

// Determinante de X
let detx
detx = (det[0][2] * det[1][1]) - (det[0][1] * det[1][2]);
console.log(detx);
console.log(`Determinante de X: ${detx}`);

// Determinante del y
let dety
dety = (det[0][0] * det[1][2]) - (det[0][2] * det[1][0]);
console.log(`Determinante de Y: ${dety}`);

x = detx/ds;
y = dety/ds;

console.log(`El valor de X es: ${x} y el valor de Y es: ${y}`);
   
