const express = require('express')
const {engine} = require('express-handlebars')
//const req = require("express/lib/request")
const bodyParser = require('body-parser')
//const slug = require('slug')
//afbeeldingen uploaden en handelen
const multer  = require('multer')
const upload = multer({ dest: 'uploads/'})
const app = express();
//installatie sass
const sass = require('sass');
const result = sass.compile("./static/styles/style.css");
console.log(result.css);
//const filepath = '~/Blok-tech/static/media/404giphy.gif' ---was te proberen
//init enviromental variables
//require('dotenv').config()
//set poort 1337
const PORT = 1337;
//initialize handlebars
app.engine('handlebars', engine());
//set view engine to handlebars
app.set('view engine', 'handlebars');
//set view directory equal to views
app.set('views', './views')
//home route where each request that is the root responds to

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('static'));

app.get('/', (req, res) => { //home invoegen
  res.render('home');
});

//app.get('/about', (req, res) => {
//  res.send('Over ons')
//})

//app.get('/info', (req, res) => {
//  res.send('Meer info')
//})

app.get('*', (req, res) => { 
 res.send('Not found')
 //res.src = "static/images/404giphy.gif";
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