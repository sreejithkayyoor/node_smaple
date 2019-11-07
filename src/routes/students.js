
const student = require('express').Router()
student.get('/', function(req,res){
    console.log('In Students');
    res.send('Hello!!! In Students');
})

module.exports = student