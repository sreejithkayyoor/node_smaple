const Busboy = require('busboy')
var fs = require('fs');

const bus = function(req,res){
    console.log(req)
    var busboy = new Busboy({ headers: req.headers });
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
        //validate against empty file fields
        if(filename.length > 0) {
            // validate file mimetype
            if(mimetype != 'image/png' && mimetype != 'image/jpeg' && mimetype != 'image/tiff'){
              //keeping track of invalid files, N/A 
              invalidFileTypes.push(filename);
              
              //Ignore the upload, move on to next one
              file.resume();
            } else {
              /*
              * As soon as 6 MB limit is reached, the rest of the data is skipped hence,
              * uploading 50 GB would never be possible because after 2.1 MB no more data
              * is read and the stream is saved as is and consequently deleted.
              *
              */
              
              //Just keeps track of file uploads (how many uploaded). 
              //counter++;
  
              //Just keeps track of names of files uploaded, for later resizing purpose.
                    
              //storing the uploaded photo
              fstream = fs.createWriteStream(__dirname + '/../upload/' + filename);
              file.pipe(fstream);
  
              fstream.on('close', function() {
                //file saved in disk, so decrement.
                // counter--;
              });
            }
          } else {
            file.resume();
          }
        });
  
        busboy.on('finish', function() {
          console.info('Busboy uploading finished!');
        });
        res.send('FIleUploaded')
        return req.pipe(busboy);
}

module.exports = {bus}