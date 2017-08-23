var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var logger = require("morgan");

var app = express();

app.set('kunstwerkenFile', require('./data/kunstwerken.json'));
app.set('categorieenFile', require('./data/categorieen.json'));
app.set('kunstenaarsFile', require('./data/kunstenaars.json'));


app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'));

app.use(logger("dev"));

app.use(require("./routes/root_router"));
app.use(require("./routes/kunstwerken_router"));
app.use(require("./routes/categorieen_router"));
app.use(require("./routes/kunstenaars_router"));


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
