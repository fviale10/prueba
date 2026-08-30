const express = require('express');
require('dotenv').config();
const app = express();

// Lee el puerto desde la variable de entorno PORT o usa 3000 como alternativa (fallback)
const PORT = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.listen(PORT, () => {
  console.log(`Servidor HTTP ejecutándose en el puerto ${PORT}`);
});