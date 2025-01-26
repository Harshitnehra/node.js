// Import mongoose
const mongoose = require('mongoose');

// Define the schema
const personschema = new mongoose.Schema({
  name: {
    type: String,        // Data type
    required: true,      // Field is required
    trim: true           // Removes extra spaces
  },
  email: {
    type: String,
    required: true,
    unique: true,        // Ensures unique email addresses
    lowercase: true,     // Converts email to lowercase
  },
  work: {
    type: String,
    enum: ["chef", "waiter", "owner"],
    required: true       // Password must be at least 6 characters long
  },
  age: {
    type: Number,
    min: 0,              // Minimum value
    max: 120             // Maximum value
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create a model
const Person = mongoose.model('Person', personschema);

// Export the model for use in other files
module.exports = Person;
