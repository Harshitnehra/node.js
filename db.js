// Import Mongoose
const mongoose = require("mongoose");

// MongoDB connection string (replace <username>, <password>, and <dbname> with your values)
const uri = "mongodb://localhost:27017/hotels";

// Connect to MongoDB
mongoose
  .connect(uri, {
    useNewUrlParser: true, // For parsing connection string
    useUnifiedTopology: true // For using new server discovery and monitoring engine
  })
  const db = mongoose.connection;

  db.on("connected", ()=>{
    console.log("connected  to mongodb");
  })

  db.on("error", (err)=>{
    console.error("error  to mongodb", err);
  })
  db.on("disconnected", ()=>{
    console.log("disconnected  to mongodb");
  })
//  exports the database connection 
module.exports = db;