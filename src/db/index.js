const student = require('express').Router()
const studentDetails = require('../db/studentDetails')

const addStudentDetails = function(req,res){
  
    let re = studentDetails.get(req,function(err,resp){
      if(err){
        console.log('Errrrrooorrrr')
        console.log(err)
        res.end(JSON.stringify(err))
      }
      res.end('Studnet details inserted in to DB:'+JSON.stringify(resp))
    })  
}

module.exports.addStudentDetails = addStudentDetails