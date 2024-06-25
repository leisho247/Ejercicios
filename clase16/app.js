const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

// Middleware para registrar el tiempo de demora
app.use((req, res, next) => {
  const start = Date.now(); // Registrar el tiempo de inicio
  res.on("finish", () => {
    // Usar el evento 'finish' para capturar cuando la respuesta ha sido enviada
    const duration = Date.now() - start; // Calcular la duración
    console.log(`La solicitud a ${req.originalUrl} tomó ${duration}ms`); // Mostrar el tiempo en la terminal
  });
  next(); // Pasar al siguiente middleware o ruta
});

app.use((req, res, next) => {
  const currentDateTime = new Date().toISOString();
  const log = `${currentDateTime} - ${req.method} ${req.originalUrl} - Status: ${res.statusCode}\n`;

  // Usar el evento 'finish' para asegurar que la respuesta ha sido enviada antes de registrar el estado
  res.on("finish", () => {
    fs.appendFile("request.txt", log, (err) => {
      if (err) {
        console.error("Error escribiendo en el archivo", err);
      }
    });
  });
  next(); // Pasar al siguiente middleware o ruta
});

// Ruta de ejemplo
app.get("/", (_req, res) => {
  res.send("Hello World!");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
