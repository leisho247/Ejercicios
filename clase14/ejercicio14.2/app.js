const express = require("express");
const app = express();
const port = 3000;

// Configurar EJS como el motor de plantillas
app.set("view engine", "ejs");

// Ruta principal para demostrar que el servidor está funcionando
app.get("/", (_req, res) => {
  res.send("Página principal");
});

// Middleware para manejar rutas inexistentes y renderizar la página 404
app.use((_req, res) => {
  res.status(404).render("404");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
