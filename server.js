import express from "express";
import dotenv from "dotenv";
import clienteRoutes from "./rutas/clientesRutas.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/clientes", clienteRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
