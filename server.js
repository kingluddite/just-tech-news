const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

// db
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');

// session
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// helper functions
const helpers = require('./utils/helpers');

// template engine - Handlebars.js
// pass our helpers into express-handlebars
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// parse req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static assets
app.use(express.static(path.join(__dirname, 'public')));

// routes/controllers
app.use(require('./controllers'));

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
