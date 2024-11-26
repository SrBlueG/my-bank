const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'my_bank',
});

connection.connect((err) => {
    if(err){
        console.error('Error al conectar a la base de datos', err);
        process.exit(1);
    }
    console.log('Conexión exitosa a la base de datos');
});

module.exports = connection;