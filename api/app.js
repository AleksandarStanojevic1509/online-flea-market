const express                   = require('express');
const log                       = require('./services/logger')
const CONFIG                    = require('./config');
const sequelize                 = require('./services/databaseConnection');
const v1                        = require('./routes/v1');
const morgan                    = require('morgan');
const path                      = require('path');
const app                       = express();



app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false ,limit: '50mb'}));

app.use(morgan('combined'));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set path for static assets
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', v1);



// mysql DB
sequelize.authenticate()
    .then(()=>{
        log.info(`Connected to SQL database`);
    })
    .catch((err)=>{
        log.error('Fail to connected to SQL database', err)
    })

sequelize.sync();

// listen server
app.listen(CONFIG.api_port, ()=>{
    log.info(`Server spin on port ${CONFIG.api_port}`);
})