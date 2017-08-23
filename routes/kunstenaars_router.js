var express = require("express");
var kunstenaars = express.Router();

kunstenaars.get('/kunstenaars/:id', function(req, res) {
  res.render("kunstenaar", {
      id: req.params.id,
      items: req.app.get('kunstwerkenFile').kunstwerken,
      categorieen: req.app.get('categorieenFile').categorieen,
      kunstenaars: req.app.get('kunstenaarsFile').kunstenaars
  });
});

module.exports = kunstenaars;
