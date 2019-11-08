var MongoClient = require('mongodb').MongoClient;
var db

// MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
//   if (err) return console.log(err)
//   db = client.db('student') // whatever your database name is
//   app.listen(3000, () => {
//     console.log('listening on 3000')
//   })
// })
MongoClient.connect('mongodb://localhost:27017', function(err, client) {
  db = client.db('students')
  if (err) throw err;
  console.log("Database created!");
  
});

const addStudentDetails = function(req,res){
    db.collection('studentDetails').save(req.body, (err, result) => {
        if (err) return console.log(err)    
        console.log('saved to database')
        console.log(req.body)
        res.end('Studnet details inserted in to DB')
      })
}

const test = function(req,res){
    
    // console.log(req.params)
    console.log(req.body.id)
    console.log(req.body.name)
    res.end()
}

module.exports.addStudentDetails = addStudentDetails
module.exports.test = test