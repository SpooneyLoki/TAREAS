const mongoose = require('mongoose');

// Cuando despleguemos en Vercel tomará process.env.MONGODB_URI
const URI = process.env.MONGODB_URI || 'mongodb+srv://Juanka24:Fer240125@cluster0.zokvnjv.mongodb.net/gestion-empleados?retryWrites=true&w=majority';

mongoose.connect(URI)
    .then(db => console.log('Conectado a MongoDB Atlas con éxito'))
    .catch(err => console.error('Error conectando a la BD:', err));

module.exports = mongoose;