const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/nosotros', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'nosotros.html'));
});

app.get('/servicios', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'servicios.html'));
});

app.get('/clientes', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'clientes.html'));
});

app.get('/contacto', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contacto.html'));
});

app.post('/confirmacion', (req, res) => {
  // Lógica para procesar el formulario de contacto y enviar una página de confirmación
  res.sendFile(path.join(__dirname, 'views', 'confirmacion.html'));
});

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
