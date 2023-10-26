const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

// Define routes
router.get('/animals', animalController.getAnimals);
router.post('/animals', animalController.createAnimal);
router.put('/animals/:animalId', animalController.updateAnimal);
router.delete('/animals/:animalId', animalController.deleteAnimal);

module.exports = router;
