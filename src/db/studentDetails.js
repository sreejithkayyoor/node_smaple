var MongoClient = require('mongodb').MongoClient;

let get = function (req,callback){
  MongoClient.connect('mongodb://localhost:27017', function(err, client) {  
    if (err) {
      // console.log('error')
      // console.log(err)
      return callback(err)
    }

    let db = client.db('students')  
    db.collection('studentDetails').save(req.body, (err, result) => {
      if (err) {
        // console.log(err)
        return callback(err)
      } 
        console.log('saved to database')
        console.log(JSON.stringify(result.ops))
        client.close()
        callback(null,req.body)
    })
  })
}
module.exports.get = get