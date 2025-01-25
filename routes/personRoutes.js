const express = require('express');
const router = express.Router();
const Person = require(("./../models/Person"))

router.post('/', async (req, res) => {
    try {
      // Access the request body
      const data = req.body;
  
      // Create a new user document
      const newperson = new Person(data);
  
      // Save the document to the database
      const response = await newperson.save();
  
      // Respond with the created user 
      console.log("saved data");
      
      res.status(201).json({ message: 'User created successfully', response });
    } catch (err) {
      // Handle errors
      console.error(err);
      res.status(400).json({ error: err.message });
    }
  });
  
  router.get('/', async (req, res) => {
    try {
      const data = await Person.find(); // Fetch all documents
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

router.get('/:worktype', async (req, res)=> {
    try {
      const worktype = req.params.worktype //exteact the work type from the url perameter;
      if(worktype == "chef" || worktype == "owner" || worktype == "waiter"){
        const response = await Person.find({work : worktype})
        console.log("response fatched");
        res.status(200).json(response);     
      }else{
        res.status(400).json({error: "invalid data"})
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "interval server error" });
    }
  })
//  put method is used
  // Update a user by ID
  router.put('/:id', async (req, res) => {
    try {
      const personid = req.params.id; // Extract the ID from URL params
      const updatedData = req.body; // Extract updated data from request body
  
      // Update the document
      const updatedUser = await Person.findByIdAndUpdate(personid, updatedData, {
        new: true, // Return the updated document
        runValidators: true, // Ensure validation rules are applied
      });
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User updated successfully', updatedUser });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  });
  
// DELETE route to delete a user by ID
router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params; // Extract the ID from URL parameters
  
      // Delete the user by ID
      const deletedUser = await Person.findByIdAndDelete(id);
  
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User deleted successfully', deletedUser });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  });
  
  
  

// Export the router
module.exports = router;
