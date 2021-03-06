'use strict'


//==========================
// Application Dependencies
//==========================

const express = require('express');
const app = express();
const cors = require('cors');
const superagent = resquire('superagent');
const pg = require('pg');
const methodOverride = require('method-override');

const PORT = process.env.PORT || 3000;
//===========================
//Load Environment Variables
//===========================

require('dotenv').config();

//===========================
//Middleware
//===========================

app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));

//===========================
//Routes
//===========================

/////////index.ejs///////////
app.get('/', renderHome);

/////////dash.ejs///////////
app.get('/dash', renderDash);

/////////add.ejs///////////
app.get('/add/:type', renderAdd);

app.post('/search', search);

app.get('/custom', custom);
app.post('/history', history);

/////////results.ejs///////////
app.post('/custom', custom);

/////////customize.ejs///////////
app.post('/save', save);




