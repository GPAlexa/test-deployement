// Require Express
const express = require('express');

// Require Mongoose
const mongoose = require('mongoose')

// Require Express EJS Layouts
const expressLayouts = require('express-ejs-layouts');

// Initialize Express
const app = express();

// Look for all static files (CSS, JS, images, Videos, Audio) in public folder.
app.use(express.static("public"));

// Look in views folder for a file named layout.ejs
app.use(expressLayouts);

// Port Configurations
const PORT = 4000;

// Importing Routes
const indexRouter = require("./routes/index");
const articleRouter = require("./routes/articles");

// Mounting Routes
app.use('/', indexRouter);
app.use('/', articleRouter);

// Listen to Port with callback function.
app.listen(PORT, () => console.log(`Running on port ${PORT}`));

// NodeJS to look in a folder called views for all EJS files
app.set("view engine", "ejs");

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/blogapp", 
        {useNewUrlParser: true,
        useUnifiedTopology: true},
        () => {
            console.log("mongodb connected!!!");
        });



// app.get("/a", (req, res) => {
//     res.render("home/another")
// })