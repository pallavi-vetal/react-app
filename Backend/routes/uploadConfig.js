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
   var someVar = [];
   var users=[{
    "email":req.body.email,
     "projectName":req.body.projectName,
     "reporter": req.body.reporter,
     "assignee": req.body.assignee,
     "sprint": req.body.sprint,
     "label": req.body.label,
     "cycle": req.body.cycle,
     "keyID": req.body.keyID,
   }]
   

   
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

