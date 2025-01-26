const express = require("express");
const db = require("./db");
const app = express();
// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
// const Person = require("./models/Person");

const bodyparser = require("body-parser");
app.use(bodyparser.json());

// Middleware function for logging
const logrequest = (req, res, next) => {
  console.log(`${new Date().toLocaleString()} request for ${req.url}`);
  next(); // Continue to the next middleware or route
};
app.use(logrequest);

// passport local strategy
// app.use(passport.initialize())
// passport.use(
//   new LocalStrategy(async (USERNAME, password, done) => {
//     try {
//       console.log("recevied credentials:", USERNAME, password);
//       const user = await Person.findone({ username: USERNAME });
//       if (!user) {
//         return done(null, false, { message: "Incorrect username." });
//       }
//       const isMatch = await user.isValidPassword(password);
//       if (!isMatch) {
//         return done(null, false, { message: "Incorrect password." });
//       }
//       return done(null, user);
//     } catch (err) {
//       return done(err);
//     }
//   })
// );

app.get("/",logrequest, function (req, res) {
  res.send("Hello harshit ");
});

const menuRouters = require("./routes/menuRoutes");
app.use("/Menuitem", menuRouters);

const userRoutes = require("./routes/personRoutes");
app.use("/person", userRoutes);

app.listen(3000, () => {
  console.log("listning on porn no");
});
