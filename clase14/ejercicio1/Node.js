const fs = require("fs");

// Función para contar la cantidad de números pares en el archivo datos.txt
function contarNumerosPares(archivo) {
  fs.readFile(archivo, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      return;
    }

    // Convertir los datos en un array de números
    const numeros = data.split(/\s+/).map(Number);

    // Filtrar y contar los números pares
    const cantidadPares = numeros.filter((num) => num % 2 === 0).length;

    // Crear y escribir el resultado en un nuevo archivo
    const resultado = `La cantidad de números pares en el archivo es: ${cantidadPares}\n`;
    fs.writeFile("resultado.txt", resultado, (err) => {
      if (err) {
        console.error("Error al escribir el archivo:", err);
        return;
      }
      console.log("El archivo resultado.txt ha sido creado con correctamente");
    });
  });
}

// Llama a la función con el nombre del archivo
contarNumerosPares("datos.txt");
