
// Root Route - HTTP GET
exports.index_get = (req, res) => {
    res.render("home/index", {welcomeMessage: "Welcome to Blog App", title: "index"});
}

