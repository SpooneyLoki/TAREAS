const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { mongoose } = require('./database');

// Configuraciones
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Rutas
app.use('/api/empleados', require('./routes/empleado.routes'));

// Ruta base de prueba para verificar en Vercel
app.get('/', (req, res) => {
    res.send('API Gestión de Empleados funcionando correctamente');
});

// Iniciar servidor
app.listen(app.get('port'), () => {
    console.log('Server activo en el puerto', app.get('port'));
});

module.exports = app;