var express = require("express");
var kunstwerken = express.Router();

kunstwerken.get('/items/:id', function(req, res) {
  var kunstwerkenFile = req.app.get('kunstwerkenFile');
  var id = req.params.id;
  var teller = 0;
  var item = "";
  while (teller < kunstwerkenFile.kunstwerken.length ) {
    if (kunstwerkenFile.kunstwerken[teller].id == id) {
      item = kunstwerkenFile.kunstwerken[teller];
    }
    teller++;
  }
  if (item !== "") {
    res.render("kunstwerk", {
      item: item,
      categorieen: req.app.get('categorieenFile').categorieen,
      kunstenaars: req.app.get('kunstenaarsFile').kunstenaars
    });
  } else {
    res.render("404", {
      categorieen: req.app.get('categorieenFile').categorieen,
      kunstenaars: req.app.get('kunstenaarsFile').kunstenaars
    });
  }
});

module.exports = kunstwerken;
