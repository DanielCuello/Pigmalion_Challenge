const esSumaPosible = (nums, requiredSum) => {
    // Recorremos cada número en el array
    for (let i = 0; i < nums.length; i++) {
        // Comparamos el número actual con todos los numeros que vienen despues en el array
        for (let j = i + 1; j < nums.length; j++) {
            // Verificar si la suma de los dos números es igual a requiredSum
            if (nums[i] + nums[j] === requiredSum) {
                return true; // se retorna true si se encuentra un resultado que coincida
            }
        }
    }
    // Si no se encuentra se retorna false
    return false;
};