const db = require('../db/db');

const registerCuenta = (req, res) => {
    const { nombre, apellido_paterno, apellido_materno, correo, contraseña, saldo } = req.body;

    if (!nombre || !apellido_paterno || !correo || !contraseña) {
        return res.status(400).send({ mensaje: 'Todos los campos obligatorios deben estar llenos' });
    }

    const query = `
        INSERT INTO cuentas (nombre, apellido_paterno, apellido_materno, correo, password, saldo)
        VALUES (?, ?, ?, ?, ?, ?)
    `;
    const valores = [nombre, apellido_paterno, apellido_materno || '', correo, password, saldo || 0];

    db.query(query, valores, (err, results) => {
        if (err) {
            console.error('Error al registrar la cuenta:', err);
            return res.status(500).send({ mensaje: 'Error al registrar la cuenta' });
        }
        res.status(201).send({ mensaje: 'Cuenta registrada exitosamente', id: results.insertId });
    });
};

module.exports = { registerCuenta };
