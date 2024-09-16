const calcularResultado = () => {
    // Obtener el valor ingresado por el usuario
    const requiredSum = parseInt(document.getElementById('suma-requerida').value);
    const version = document.getElementById('version').value;

    // Definir los arrays nums
    const nums1 = [1, 4, 3, 9];
    const nums2 = [1, 2, 4, 4];

    let resultado;

    // Calcular los resultados según la versión seleccionada
    if (version === 'basico') {
        const resultado1 = puedeFormarse(nums1, requiredSum);
        const resultado2 = puedeFormarse(nums2, requiredSum);
        resultado = `Para nums = [${nums1}] y requiredSum = ${requiredSum}: <strong>${resultado1}</strong><br>
        Para nums = [${nums2}] y requiredSum = ${requiredSum}: <strong>${resultado2}</strong>`;
    } else if (version === 'optimizada') {
        const resultado1 = puedeFormarseOptimizado(nums1, requiredSum);
        const resultado2 = puedeFormarseOptimizado(nums2, requiredSum);
        resultado = `Para nums = [${nums1}] y requiredSum = ${requiredSum}: <strong>${resultado1}</strong><br>
        Para nums = [${nums2}] y requiredSum = ${requiredSum}: <strong>${resultado2}</strong>`;
    } else {
        resultado = 'Por favor, selecciona una versión.';
    }

    // Mostrar los resultados en el DOM
    const resultadoDinamicoElem = document.getElementById('resultado-dinamico');
    if (resultadoDinamicoElem) {
        resultadoDinamicoElem.innerHTML = resultado;
    } else {
        console.error('No se encontró el elemento');
    }
};

// Función para la solución básica
const puedeFormarse = (nums, requiredSum) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === requiredSum) {
                return true;
            }
        }
    }
    return false;
};

// Función para la solución optimizada
const puedeFormarseOptimizado = (nums, requiredSum) => {
    const numerosVistos = new Set();
    for (let num of nums) {
        const complemento = requiredSum - num;
        if (numerosVistos.has(complemento)) {
            return true;
        }
        numerosVistos.add(num);
    }
    return false;
};