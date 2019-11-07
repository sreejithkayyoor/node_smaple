const app = require('express')();
// const app = express();
// const router = express.Router();
const bodyParser =  require('body-parser')
const routes = require('./routes')

//var app = express()
app.use(bodyParser.json())

app.use('/',routes)

app.listen(9090, () => console.log(`Listening on port 9090`))