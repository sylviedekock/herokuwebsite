var express = require("express");
var root = express.Router();

root.get('/', function(req, res) {
      res.render("index", {
        kunstwerken: req.app.get('kunstwerkenFile').kunstwerken,
        categorieen: req.app.get('categorieenFile').categorieen,
        kunstenaars: req.app.get('kunstenaarsFile').kunstenaars
      });
});

module.exports = root;
