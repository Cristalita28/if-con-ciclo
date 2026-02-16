do {
    let decision = prompt("Que deseas hacer? \n 1. Área de un triángulo \n 2. Área de un rectángulo"
        + "\n 3. Perímetro de un rectángulo \n 4. Evaluación de la expresión cuadrática"
        + "\n 5. Informacion del desarrollador  \n Escribe 'salir' para terminar.");

    if (decision.toLowerCase() === "salir") {
        break;
    }

    if (decision === "1") {
        //Área de un triángulo
        let baseT = parseFloat(prompt("Dame la base: "));
        let alturaT = parseFloat(prompt("Dame la altura: "));
        let areaT = (baseT * alturaT) / 2;
        alert("Área del triángulo: " + areaT);
        console.log("Área del triángulo: " + areaT);
    } else if (decision === "2") {
        //Área de un rectángulo
        let largoR = parseFloat(prompt("Dame el largo: "));
        let anchoR = parseFloat(prompt("Dame el ancho: "));
        let areaR = largoR * anchoR;
        alert("Área del rectángulo: " + areaR);
        console.log("Área del rectángulo: " + areaR);
    } else if (decision === "3") {
        //Perímetro de un rectángulo
        let largo = parseFloat(prompt("Dame el largo: "));
        let ancho = parseFloat(prompt("Dame el ancho: "));
        let perimetroR = 2 * (largo + ancho);
        alert("Perímetro del rectángulo: " + perimetroR);
        console.log("Perímetro del rectángulo: " + perimetroR);
    } else if (decision === "4") {
        //Evaluación de la expresión cuadrática
        let x = parseFloat(prompt("Dame el valor de x: "));
        let b = 10;
        let c = 9;
        let y = (x * x) + (b * x) + c;
        alert("Evaluación: y= " + y);
        console.log("Evaluación: y= " + y);
    } else if (decision === "5") {
        alert("Información del desarrollador: \n" +
            "Nombre: Cristal Alejandra Arvayo Cota \n Semestre VI \n Materia: Programación Web II"
            + "\n Profesor: Dr. Jesús Miguel García Gorrostieta \n Fecha: 16/02/2026");
        console.log("Información del desarrollador: \n" +
            "Nombre: Cristal Alejandra Arvayo Cota \n Semestre VI \n Materia: Programación Web II"
            + "\n Profesor: Dr. Jesús Miguel García Gorrostieta \n Fecha: 16/02/2026");
    } else {
        alert("Petición no válida");
    }
} while (true);
