
const student = require('express').Router()
const studentDetails = require('../db/studentDetails')
// student.get('/', function(req,res){
//     console.log('In Students');
//     res.send('Hello!!! Invalid operation');
// })

student.get('/:id', function(req,res){
    
    res.send(req.params);
})
student.post('/',studentDetails.addStudentDetails
)
module.exports = student