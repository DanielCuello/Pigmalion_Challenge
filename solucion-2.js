const esSumaPosibleOptimizado = (nums, requiredSum) => {
    // Usamos un conjunto para guardar los números vistos
    const numerosVistos = new Set();
    
    // Recorremos cada número en el array
    for (let num of nums) {
        // calculo de qué número necesitamos para sumar requiredSum con el número actual
        const complemento = requiredSum - num;
        
        // Verificamos si ya hemos visto el número necesario para formar la suma
        if (numerosVistos.has(complemento)) {
            // Si hemos visto el número necesario, se retorna true
            return true;
        }
        
        // Si no encontramos una pareja, se guarda el número actual para futuras comparaciones
        numerosVistos.add(num);
    }
    
    // Si terminamos de revisar todos los números y no encontramos una pareja, retornamos `false`
    return false;
};