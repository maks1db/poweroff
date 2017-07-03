const express       = require('express');       
const app           = express();                 
const bodyParser    = require('body-parser');
const path          = require('path');
const sh            = require('./src/js/backend/custom-api/sh');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
});

const port = 8001;

app.use('/api/sh',      sh);

app.get('*',function(req,res){
     res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, ()=> console.log('Server POWEROFF start on ' + port));

module.exports = app;