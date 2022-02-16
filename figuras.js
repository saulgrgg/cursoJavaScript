// Codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
} 


function areaCuadrado(lado){
    return lado * lado;
} 

console.groupEnd();

//Codigo del triangulo

console.group("Triangulos");

function areaTriangulo(base,altura){
    return (base * altura) / 2;
}
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} 
console.groupEnd();

//Codigo de triangulo isoseles

console.group("Triangulo Isoseles")

function alturaTrianguloIsoseles(lado, base){
    return Math.sqrt((lado*lado)-(base*base)/4);
    
}
function areaTrianguloIsoseles(lado, base){
    const altura = alturaTrianguloIsoseles(lado,base);
    const area = (base * altura) /2
    return area;
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

//Aqui interactuamos con el HTMl

function calcularPerimetroCuadrado(){
    
    const input = document.getElementById("inputCuadrado"); //Traer elemento del html 
    const value = input.value; //Traer el valor que el usuario escribio
    const perimetro = perimetroCuadrado(value); //Traer la funcion perimetroCuadrado pero cambiando argumento
    alert(perimetro); //Alerta que mostrara la variable "perimetro", que realmente sera una funcion
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputLado1");
    const input2 = document.getElementById("inputLado2");
    const input3 = document.getElementById("inputBase");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert (perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputBase");
    const input2 = document.getElementById("inputAltura");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const area = areaTriangulo(value1, value2);
    alert (area);
}



function calcularAlturaTrianguloIsoseles(){
    const input = document.getElementById("inputLadoIsoseles")
    const input1 = document.getElementById("inputBaseIsoseles")
    const value = parseInt(input.value);
    const value1 = parseInt(input1.value);
    const altura = alturaTrianguloIsoseles(value, value1);
    alert(altura);
}

function calcularAreaTrianguloIsoseles(){
    const input = document.getElementById("inputLadoIsoseles")
    const input1 = document.getElementById("inputBaseIsoseles")
    const value = parseInt(input.value);
    const value1 = parseInt(input1.value);
    const area = areaTrianguloIsoseles(value, value1);
    alert(area);
}



function calcularDiametroCirculo(){
    const input = document.getElementById("inputRadio");
    const value = input.value;
    const diametro = diametroCirculo(value);
    alert (diametro);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputRadio");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputRadio");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}