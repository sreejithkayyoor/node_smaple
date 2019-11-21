const app = require('express')();
const bodyParser =  require('body-parser')
const routes = require('./routes')


//var app = express()
app.use('/',routes)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


module.exports = app