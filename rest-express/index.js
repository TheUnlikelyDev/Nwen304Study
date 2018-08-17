//1. Import modules
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const logger = require('morgan')

//2. Create app module
const app = express();

//3. Define middleware
app.use(bodyParser.json());
app.use(logger())
