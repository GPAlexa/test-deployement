const express = require('express');

var methodOverride = require('method-override')
const router = express.Router();

router.use(methodOverride('_method'));

router.use(express.urlencoded({extended: true}));

const articleCtrl = require("../controllers/article");

router.get("/article/add", articleCtrl.article_create_get);
router.post("/article/add", articleCtrl.article_create_post);
router.get("/article/index", articleCtrl.article_index_get);
router.get("/article/detail", articleCtrl.article_show_get);
router.get("/article/delete", articleCtrl.article_delete_get);
router.get("/article/edit", articleCtrl.article_edit_get);
router.put("/article/update", articleCtrl.article_update_put);

module.exports = router;