const express = require("express");
//handlebars toevoegen
const { engine } = require("express-handlebars");

const bodyParser = require("body-parser");

 const fetch = (...args) =>
   import("node-fetch").then(({ default: fetch }) => fetch(...args));

//afbeeldingen uploaden en handelen
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./static/uploads");
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + "-" + Date.now() + file.originalname);
  },
});

//afbeeldingen kunnen toevoegen
const upload = multer({ storage: storage });

//express toevoegen
const app = express();
//installatie sass
const sass = require("sass");

//static gebruiken, opmaak, img etc.
app.use("/static", express.static("static"));

//scss invoegen
const result = sass.compile("./static/styles/style.css");
app.set(result.css);

//init enviromental variables
require("dotenv").config();
const connectDB = require("./config/db");
connectDB();

//Schema's
const Profile = require("./modals/profile");
const Preference = require("./modals/preference");
const Breakfast = require("./modals/breakfast");

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 1378;
//initialize handlebars
app.engine("handlebars", engine());
//set view engine to handlebars
app.set("view engine", "handlebars");
//set view directory equal to views
app.set("views", "./views");
//home route where each request that is the root responds to

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  //home invoegen, root
  res.render("getstarted");
});

app.get("/preferences", (req, res) => { // REMOVE THIS LATER PLZ
  //home invoegen, root
  res.render("preferences");
  // console.log('avatar');
});

app.get("/breakfast", (req, res) => { // REMOVE THIS LATER PLZ
  //home invoegen, root
  res.render("breakfast");
  // console.log('avatar');
});

app.get("/update", async (req, res) => {
  //update/change profile
  try {
    const profileData = await Profile.findOne({ username: "evaz" }).lean();
    console.log("profile:", profileData);
    res.render("update", { profileData });
  } catch (error) {
    throw new Error(error);
  }
});

app.post("/update", async (req, res) => {
  //update/change profile
  try {
    const filter = { username: "evaz" };
    const update = { pronouns: req.body.pronouns };
    await Profile.findOneAndUpdate(filter, update).lean(); //vinden en updaten
    
    const profileData = await Profile.findOne({ username: "evaz" }).lean(); //vinden profile
    console.log("profile:", profileData);
    res.render("home", { profileData });
  } catch (error) {
    throw new Error(error);
  }
});

app.get("/home", async (req, res) => {
  //home invoegen en data uit db ophalen en invoegen
  try {
    const profileData = await Profile.findOne({ username: "evaz" }).lean();

    const time = await fetch("https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam"); //api ophalen
    const body = await time.json();
    //console.log(body.time);
    const timeString = (body.time);
    res.render("home", { profileData, timeString });
  } catch (error) {
    throw new Error(error);
  }
});

//page not found
app.get("*", (req, res) => {
  res.send("Not found");
  //res.sendFile('/Users/evazaadnoordijk/Blok-tech/static/media/404giphy.gif');
});

// sturen profile naar database, images en ga naar preferences
app.post("/getstarted", upload.single("avatar"), (req, res) => {
  console.log(req.file);
  console.log(req.body);

  let newProfile = {
    username: req.body.username,
    pronouns: req.body.pronouns,
    avatar: req.file.filename,
  };

  console.log(newProfile);

  const profile = new Profile(newProfile);
  console.log(profile);
  profile.save();
  res.render("preferences");
});

//derde pagina posten
app.post("/preferences", async (req, res) => {
  //  console.log(req.body) //checken of hij data ophaalt uit de body
  const preference = new Preference(req.body);
  preference.save();
  res.render("breakfast");
});

//data ophalen uit server en profiel renderen
app.post("/breakfast", async (req, res) => {
  const breakfast = new Breakfast(req.body);
  breakfast.save();

  const profileData = await Profile.findOne({ username: "evaz" }).lean();
  res.render("home", { profileData });
  //  console.log(req.body) //checken of hij data ophaalt uit de body
  //  const profile = new Profile(req.body);
  //  profile.save();
});

//port instellen
app.listen(PORT, () => {
  console.log("app running on port", PORT);
});
