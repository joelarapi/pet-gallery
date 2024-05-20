const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema(
  {
    
  }
);

module.exports = mongoose.model('Pet', PetSchema);