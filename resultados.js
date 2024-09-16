function mostrarResultados() {
  
    const numeros1 = [1, 4, 3, 9];
    const numeros2 = [1, 2, 4, 4];
    const sumaRequerida = 8;

    // Resultados de la solución básica (1)
    const resultadoBasico1 = esSumaPosible(numeros1, sumaRequerida);
    const resultadoBasico2 = esSumaPosible(numeros2, sumaRequerida);

    // Resultados de la solución optimizada (2)
    const resultadoOptimizado1 = esSumaPosibleOptimizado(numeros1, sumaRequerida);
    const resultadoOptimizado2 = esSumaPosibleOptimizado(numeros2, sumaRequerida);

    // Obtener los elementos del DOM donde se mostrarán los resultados
    const resultadoBasicoElem = document.getElementById('resultado-basico');
    const resultadoOptimizadoElem = document.getElementById('resultado-optimizado');

    // Verificar si los elementos se encontraron en el DOM
    if (resultadoBasicoElem && resultadoOptimizadoElem) {
        
        resultadoBasicoElem.innerHTML = `Para numeros = [${numeros1}] y requiredSum = ${sumaRequerida}: <strong>${resultadoBasico1}</strong><br>
        Para numeros = [${numeros2}] y requiredSum = ${sumaRequerida}: <strong>${resultadoBasico2}</strong>`;

        resultadoOptimizadoElem.innerHTML = `Para numeros = [${numeros1}] y requiredSum = ${sumaRequerida}: <strong>${resultadoOptimizado1}</strong><br>
        Para numeros = [${numeros2}] y requiredSum = ${sumaRequerida}: <strong>${resultadoOptimizado2}</strong>`;
    } else {
        console.error('No se encontraron los elementos en el DOM.');
    }
}



mostrarResultados();