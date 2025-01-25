const express = require('express');
const router = express.Router();

const MenuItem = require(("./../models/MenuItem"))
router.post('/', async (req, res) => {
    try {
      const data = req.body;
      const newperson = new MenuItem(data);
      const response = await newperson.save();
      console.log("saved data");
      
      res.status(201).json({ message: 'User created successfully', response });
    }catch(err){
      console.error(err);
      res.status(400).json({ error: err.message });
    }
  })
  
  router.get('/', async (req, res) => {
    try {
      const data = await MenuItem.find(); // Fetch all documents
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Export the router
module.exports = router;