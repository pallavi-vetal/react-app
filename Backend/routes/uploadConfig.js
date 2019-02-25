var mysql = require('mysql');
// var bcrypt = require('bcrypt');
var jsonfile = require('jsonfile');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root@123',
  database : 'defectDB',
  insecureAuth: false
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");
} else {
    console.log("Error connecting database ... nn",err);
}
});

exports.uploadConfig = function(req,res){
  // console.log("req",req.body);
  var today = new Date();
  // bcrypt.hash(req.body.password, 5, function( err, bcryptedPassword) {
   //save to db
   email = req.body.email;
   var result = [];
var  getInformationFromDB = function(callback) {

connection.query('SELECT userid FROM users where email=?',email, function(err, res, fields)
{
    if (err)  return callback(err);
     if(res.length){
        result = res[0].userid;
     }
   callback(null, result);
});
};


 console.log("Call Function");
result = getInformationFromDB(function (err, result) {
  if (err) console.log("Database error!");
  else return result;
});
   
   console.log(result);
   var users={
    "userid":global.userid,
     "projectName":req.body.projectName,
     "reporter": req.body.reporter,
     "assignee": req.body.assignee,
     "sprint": req.body.sprint,
     "label": req.body.label,
     "cycle": req.body.cycle,
     "keyID": req.body.key,
   }
   connection.query('INSERT INTO CONFIG SET ?',users, function (error, results, fields) {
   if (error) {
     console.log("error ocurred",error);
     res.send({
       "code":400,
       "failed":"error ocurred"
     })
   }else{
    //  console.log('The solution is: ', results);
     res.send({
       "code":200,
       "success":"user registered sucessfully"
         });
   }
   });
  // });


}

