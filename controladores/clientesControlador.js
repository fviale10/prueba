import db from "../config/db.js";
export const getClientes = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM clientes");
    res.json(rows);
  } catch (error) {}
};
export const getClienteById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query("SELECT * FROM clientes WHERE id = ?", [id]);
    if (rows.length === 0) {
      return res.status(404).json({ mensaje: "Cliente no encontrado" });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const createCliente = async (req, res) => {
  try {
    const { nombre, email, telefono } = req.body;
    const [result] = await db.query(
      "INSERT INTO clientes (nombre, email, telefono) VALUES (?, ?, ?)",
      [nombre, email, telefono],
    );
    res.status(201).json({ id: result.insertId, nombre, email, telefono });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const updateCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, email, telefono } = req.body;
    const [result] = await db.query(
      "UPDATE clientes SET nombre = ?, email = ?, telefono = ? WHERE id = ?",
      [nombre, email, telefono, id],
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: "Cliente no encontrado" });
    }
    res.json({ id, nombre, email, telefono });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.query("DELETE FROM clientes WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: "Cliente no encontrado" });
    }
    res.json({ mensaje: "Cliente eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
