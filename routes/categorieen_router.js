var express = require("express");
var categorieen = express.Router();

categorieen.get('/categorieen/:id', function(req, res) {
  res.render("categorie", {
      id: req.params.id,
      items: req.app.get('kunstwerkenFile').kunstwerken,
      categorieen: req.app.get('categorieenFile').categorieen,
      kunstenaars: req.app.get('kunstenaarsFile').kunstenaars
  });
});

module.exports = categorieen;
