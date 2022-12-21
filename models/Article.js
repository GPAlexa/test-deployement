const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    title: String,
    content: String,
    isPublished: Boolean,
    totalWords: Number,
    author: String,

    // createdAt: {
    //     type: Date,
    //     default: Date.now},
    // updatedAt:  {
    //     type: Date,
    //     default: Date.now},
},
{
    timestamps: true // Means createdAt and updatedAt
});

const Article = mongoose.model("Article", articleSchema);

// Export model
module.exports = Article;