const path = require('path');
const express = require('express');
const controllers = require('./controllers');
const helpers = require('./utils/helpers');
// import sequelize connection
const sequelize = require('./config/connection');
//express-handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// serve up public files
app.use(express.static(path.join(__dirname, 'public')));
//express session
app.use(session(sess));
//express-handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(controllers);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});