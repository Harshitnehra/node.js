const mongoose = require('mongoose');

// Define the schema for menu items
const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Removes extra spaces
  },
  category: {
    type: String,
    required: true,
    enum: ['Appetizer', 'Main Course', 'Dessert', 'Beverage'], // Predefined categories
  },
  price: {
    type: Number,
    required: true,
    min: 100, // Ensure price is non-negative
  },
});

// Create the model
const MenuItem = mongoose.model('MenuItem', menuSchema);

// Export the model
module.exports = MenuItem;
