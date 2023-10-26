const mongoose = require('mongoose');
const Animal = mongoose.model('Animal');

// Get all animals
const getAnimals = (req, res) => {
  Animal.find({}, (err, animals) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(animals);
    }
  });
};

module.exports = {
  getAnimals,
  // Other controller functions (e.g., createAnimal, updateAnimal, deleteAnimal) go here
};
