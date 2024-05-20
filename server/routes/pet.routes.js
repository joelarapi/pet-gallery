const PetController = require('../controllers/pet.controller');

module.exports = (app) => {
  app.get('/api/pets', PetController.findAllPets);
  app.post('/api/pet', PetController.createNewPet);
  app.get('/api/pet/:id', PetController.findOneSinglePet);
  app.put('/api/pet/:id/update', PetController.updateExistingPet);
  app.delete('/api/pet/:id', PetController.deleteAnExistingPet);
};