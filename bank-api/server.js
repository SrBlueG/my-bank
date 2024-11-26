const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cuentasRoutes = require('./src/routes/cuentasRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/cuentas', cuentasRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
