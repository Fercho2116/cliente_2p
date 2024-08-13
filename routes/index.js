var express = require('express');
var router = express.Router();

const axios = require('axios');

// Ruta para consultar materias
router.get('/materias', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/materias');
    res.render('materias', { materias: response.data, title: 'Consultar Materias' });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Ruta para mostrar formulario de creación de materia
router.get('/materias/nueva', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/areas');
    res.render('nuevaMateria', { areas: response.data, title: 'Crear Materia' });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Ruta para manejar la creación de materia
router.post('/materias', async (req, res) => {
  try {
    await axios.post('http://localhost:3000/materias', req.body);
    res.redirect('/materias');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;