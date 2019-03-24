const express = require('express');    //importing express framework
const path = require('path');
const emailHandler = require('./handler/email-request-handler');
const bodyParser = require('body-parser');

const port = 9000;    //declaring port on which server will listen

const app = express();

app.use(express.static(path.join(__dirname,'/dist')));    //to route all static file requests other than index.html

app.use(bodyParser.json());

//Routing all send email requests to email-request-handler
app.post('/sendEmail',emailHandler);

app.get('/test', (req, res) =>{
    res.send('Test GET request');
});

app.get('*',(req, res) =>{  
    res.sendFile(path.join(__dirname,'dist/index.html'));
});

app.listen(port, ()=> console.log('Server is running on port '+port));