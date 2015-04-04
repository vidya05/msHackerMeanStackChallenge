/**
 * StudentController
 *
 * @description :: Server-side logic for managing students
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  

	 'createStudent': function(req,res,next){

    var studentUniqueId = req.param('studentUniqueId');

    var keys = req.param('key');
   var values = req.param('value');
    console.log(JSON.stringify(keys));
     console.log(JSON.stringify(values));
     var data = {
      studentUniqueId : studentUniqueId
     
    };

   for(var i =0 ; i<keys.length; i++){
      data[keys[i]] = values[i];
    };
 
   

    console.log(JSON.stringify(data));
    if(studentUniqueId ){

       Student.findOne({studentUniqueId: studentUniqueId}, function(err, student) {
        if(err){
          console.log(err);
          res.send("ERROR"+ err);
        }
        if(student){
        res.send( { status : 'Error',
                    message: 'Kindly choose a differenr student Unique Id'
                });
        }

        else{
         Student.create(data, function(err, student) {
         if(err){
           console.log(err);
           res.send(err);
         }
          res.send(student);
    });
    }
  });
	 
}
else{
   res.send( { status : 'Error',
                    message: 'Kindly fill StudentUniqueId'
                });
}

}

}

