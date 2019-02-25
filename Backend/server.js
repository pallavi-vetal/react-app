var express    = require("express");
var login = require('./routes/loginroutes');
var upload = require('./routes/uploadConfig');
var bodyParser = require('body-parser');
/*
Module:multer
multer is middleware used to handle multipart form data
*/
var multer = require('multer');
var multerupload = multer({ dest: 'fileprint/' })
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var router = express.Router();

// test route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});

//route to handle user registration
router.post('/register',login.register);
router.post('/login',login.login);
router.post('/configUpload',upload.uploadConfig);


app.use('/api', router);
app.listen(4000);