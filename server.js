const express = require('express')
const db = require('./db');
const app = express()

const bodyparser = require('body-parser')
app.use(bodyparser.json())

app.get('/', function (req, res) {
  res.send('Hello harshit ')
})

const menuRouters = require('./routes/menuRoutes')
app.use('/Menuitem' , menuRouters)


const userRoutes = require('./routes/personRoutes');
app.use('/person', userRoutes);
  

app.listen(3000, ()=>{console.log("listning on porn no");
})