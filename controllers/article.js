
// CRUD Routes/ APIs

// HTTP POST - Save the data
// HTTP GET - retrieve data
// HTTP PUT - Update the data
// HTTP DELETE - Delete the data

const Article = require("../models/Article");
const moment = require('moment');

// HTTP GET - Load Article Add Form

// API Name = moduleName_functionality_HTTPMethod

exports.article_create_get = (req, res) => {
    res.render("article/add");
}

// HTTP POST - To save the data into the database
exports.article_create_post = (req, res) => {
    console.log(req.body);
    // res.send("POST works!!!!");

    // Save the data to the database
    let article = new Article(req.body);

    article.save()
    .then(()=> {
        res.redirect("/article/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Try again later!!!");
    })
}

// HTTP GET - Article Index - To load all the articles from the database
exports.article_index_get = (req, res) => {

    Article.find()
    .then(articles => {
        res.render("article/index", {articles: articles, moment}) // articles: articles || articles
    })
    .catch(err => {
        console.log(err);
    })
}


// HTTP GET - Article by ID
exports.article_show_get = (req, res) => {
    console.log(req.query.id);

    Article.findById(req.query.id)
    .then(article => {
        res.render("article/detail", {article, moment});
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP DELETE - Delete Article by ID
exports.article_delete_get = (req, res) => {
    console.log(req.query.id);
    Article.findByIdAndDelete(req.query.id)
    .then( () => {
        res.redirect("/article/index");
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP GET - Load Article Edit Form
exports.article_edit_get = (req, res) => {

    Article.findById(req.query.id)
    .then((article) => {
        res.render("article/edit", {article})
    })
    .catch(err => {
        console.log(err)
    })
}

// HTTP PUT - Article Update
exports.article_update_put = (req, res) =>{
    console.log(req.body.id)
    Article.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/article/index");
    })
    .catch(err => {
        console.log(err)
    })
}
