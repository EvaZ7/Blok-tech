const express = require('express');
const {engine} = require('express-handlebars');
//const req = require("express/lib/request")
const bodyParser = require('body-parser');
//const slug = require('slug')
//afbeeldingen uploaden en handelen
const multer  = require('multer');
const upload = multer({ dest: 'uploads/'});
const app = express();
//installatie sass
const sass = require('sass');

//app.use(express.static('static'));
app.use('/static', express.static('static'));

//scss invoegen
const result = sass.compile("./static/styles/style.css");
app.set(result.css);
//const filepath = '~/Blok-tech/static/media/404giphy.gif' ---was te proberen
//init enviromental variables
require('dotenv').config();
const connectDB = require('./config/db');
connectDB();

const Profile = require('./modals/profile')
//set poort 1337
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 1378;
//initialize handlebars
app.engine('handlebars', engine());
//set view engine to handlebars
app.set('view engine', 'handlebars');
//set view directory equal to views
app.set('views', './views')
//home route where each request that is the root responds to

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => { //home invoegen, root
  res.render('getstarted');
});

//app.get('/about', (req, res) => {
//  res.send('Over ons')
//})

//fage not found
app.get('*', (req, res) => { 
 res.send('Not found')
 //res.src = "static/images/404giphy.gif";
})

//tweede pagina inladen
//app.post('/getstarted', (req, res) => {
 // res.render('preferences')
//})

// eslint-disable-next-line no-unused-vars
app.post('/getstarted', async (req, res) => {
  res.render('preferences');
  const profile = new Profile(req.body);
  await profile.save();
})

//derde pagina inladen
app.post('/preferences', (req, res) => {
  res.render('breakfast')
})

//uploaden avatar en message done with setup meegeven.
app.post('/breakfast', upload.single('avatar'), (req, res) => {
  res.render('home')
})

//port instellen
app.listen(PORT, () => {
  console.log('app running on port', PORT)
})