const test = require('express').Router()

test.get('/',function(req,res){
    res.send('Testing get')
})

module.exports = test