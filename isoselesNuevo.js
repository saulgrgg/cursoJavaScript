

function alturaTriangulo (ladoA, ladoB, ladoC){
    if (ladoA === 0 || ladoB === 0 || ladoC === 0){
        alert("no es untriangulo");
    } else if (ladoA === ladoB && ladoC < ladoA && ladoC < ladoB){
        const altura = (Math.sqrt((ladoB**2)-(ladoC**2)/4))
        alert("isoseles")
        alert(altura)
    } else if (ladoA === ladoC && ladoB < ladoA && ladoB < ladoC){
        const altura = (Math.sqrt((ladoA**2)-(ladoB**2)/4))
        alert("isoseles")
        alert(altura)
    } else if (ladoB === ladoC && ladoA < ladoB && ladoA < ladoC){
        const altura = (Math.sqrt((ladoB**2)-(ladoA**2)/4))
        alert("isoseles")
        alert(altura)
    } else {
        alert("no se")
    }
}
alturaTriangulo (14,15,15); //Aqui compruebo que funciona