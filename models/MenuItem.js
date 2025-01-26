const mongoose = require('mongoose');

// Define the schema for menu items
const categoryschema = new mongoose.Schema({
  title: {
    type: String,
  },
});

// Create the model
const categoryModle = mongoose.model('categories', categoryschema);

// Export the model
module.exports = categoryModle;
