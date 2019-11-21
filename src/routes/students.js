
const student = require('express').Router()
const studentDetails = require('../db')
const request = require('request')
const add = require('../util/add')
const bus = require('../util/bus')
// student.get('/', function(req,res){
//     console.log('In Students');
//     res.send('Hello!!! Invalid operation');
// })

// student.get('/:id', function(req,res){
//         add.result(req.params.id)
//         .catch((error)=>{
//             console.log(err.response)

//         })
//         .then(resp=>{
//             console.log('result: '+resp.data)
//             res.send(JSON.stringify(resp.title))
//         })
            
//     })

student.get('/',function(req,res){
     add.post()
        .then((response)=>{
            // console.log(response.data)
            add.result(response.data.title).then((response) =>{
                // console.log(response.data.title)
                res.send(response.data.title)
            })
            .catch((err)=>{
                // console.log(err)
                res.send(err)
            })
        })
        .catch(err=>{
            // console.log('error: '+err)
            res.end(err.message)
        })
})
    
   
    // student.post('/post',(req,res)=>{
    //         add.result        
        
    // })

    // student.post('/upload',bus.bus)

    

// student.post('/',studentDetails.addStudentDetails
// )

const uploadFile=(header)=>{

}
module.exports = student