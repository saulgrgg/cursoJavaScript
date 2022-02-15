// Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
    return lado * 4;
} 


function areaCuadrado(lado){
    return lado * lado;
} 

console.groupEnd();


// Codigo del triangulo


console.group("Triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;
function areaTriangulo(base,altura){
    return (base * altura) / 2;
}
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} 
console.groupEnd();


//Codigo del circulo


console.group("Circulos");

function diametroCirculo(radio){
    return radio*2;
} 

const PI = Math.PI;

function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return PI * diametro;
} 

function areaCirculo (radio){
    return PI * (radio * radio);
}
