const express = require('express')
const {engine} = require('express-handlebars')
//const req = require("express/lib/request")

const bodyParser = require('body-parser')

//const slug = require('slug')

const multer  = require('multer')
const upload = multer({ dest: 'uploads/'})
const app = express();

//require('dotenv').config()

const PORT = 1337;

app.engine('handlebars', engine());

app.set('view engine', 'handlebars');

app.set('views', './views')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('static'));

app.get('/', (req, res) => { //home invoegen
  res.render('getstarted');
});

app.get('/about', (req, res) => {
  res.send('Over ons')
})

app.get('/info', (req, res) => {
  res.send('Meer info')
})

app.get('*', (req, res) => { 
 res.send('Not found')
})

app.post('/getstarted', (req, res) => {
    res.render('preferences')
})

app.post('/preferences', (req, res) => {
  res.render('breakfast')
})

app.post('/breakfast', upload.single('avatar'), (req, res) => {
  try {
    console.log('22222', req.body.name)
    if (req.body.rock) { //rock eruit halen
      console.log('rock was selected')
    } else {
      console.log('not selected')
    }
    res.send('Done with setup!')
  } catch (error) {
    console.log('an error has occured')
    throw new Error(error);
  }
})

app.listen(PORT, () => {
  console.log('app running on port, PORT')
})