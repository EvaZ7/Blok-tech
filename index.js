const express = require('express')
const Handlebars = require("handlebars")
const app = express();
app.engine('hbs', Handlebars({
  defaultLayout: 'main',
  extname: '.hbs'
}));

app.set('view engine', 'hbs');
const port = process.env.prt || 1337;

app.get('/', (req, res) => {
  res.render('home');
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})