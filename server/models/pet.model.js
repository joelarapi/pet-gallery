const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
    minlength: [3, 'Name must be at least 3 characters long.']
  },
  type: {
    type: String,
    required: [true, 'Type is required.'],
    enum: ['cat', 'dog', 'bird']
  },
  breed: {
    type: String,
    required: [true, 'Breed is required.']
  },
  age: {
    type: Number,
    required: [true, 'Age is required.'],
    min: [0, 'Age cannot be negative.']
  },
  description: {
    type: String,
    required: [true, 'Description is required.']
  },
  image: {
    type: String,
    required: [true, 'Image URL is required.']
  },
  origin: {
    type: String,
    required: [true, 'Origin is required.']
  }
}, { timestamps: true });

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;