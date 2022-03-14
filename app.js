const express = require('express');
//var mongoose = require('mongoose');
const {engine} = require('express-handlebars');
//const req = require("express/lib/request")
const bodyParser = require('body-parser');
//const slug = require('slug')

//afbeeldingen uploaden en handelen
const multer  = require('multer');
const storage = multer.diskStorage ({
    destination: (req, file, cb) => {
      cb (null, './uploads');
    },
    filename : function (req, file, callback) {
      callback(null, file.fieldname + '-' + Date.now() + file.originalname)
    }
  });
// eslint-disable-next-line no-undef
const upload = multer({storage: storage}); //{storage: storage});

//express toevoegen
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

//Schema's
const Profile = require('./modals/profile')
const Preference = require('./modals/preference');
//const { path } = require('express/lib/application');

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
  // console.log('avatar');
});


app.get('/home', (req, res) => { //home invoegen, root
  console.log('Hello World')
  try {
    const profileData = Profile.find({username: "eva"});
    console.log(profileData);
    res.render('home', {data : profileData[0], title: 'Home - profile'})
  } catch (error) {
    throw new Error(error);
  }
  // console.log('avatar');
});

//page not found
 app.get('*', (req, res) => { 
  //res.send('Not found')
  res.sendFile('/Users/evazaadnoordijk/Blok-tech/static/media/404giphy.gif');
 })

// sturen profile naar database en ga naar preferences
app.post('/getstarted', upload.single('avatar'), (req, res) => { 

  console.log(req.file);
  console.log(req.body);

  let newProfile = {
    username: req.body.username,
    pronouns: req.body.pronouns,
    avatar: req.file.filename
  }

  console.log(newProfile);

  const profile = new Profile(newProfile);
  console.log(profile);
  profile.save();
  res.render('preferences');
})

//derde pagina inladen
app.post('/preferences', (req, res) => {
//  console.log(req.body) //checken of hij data ophaalt uit de body
  const profile = new Preference(req.body);
  profile.save();
  res.render('breakfast')
})

//data ophalen uit server en profiel renderen
app.post('/breakfast', (req, res) => {
  res.render('home');
//  console.log(req.body) //checken of hij data ophaalt uit de body
//  const profile = new Profile(req.body);
//  profile.save();
})

//port instellen
app.listen(PORT, () => {
  console.log('app running on port', PORT)
})