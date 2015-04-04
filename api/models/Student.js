/**
* Student.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

 attributes: {
    
    studentUniqueId:{
    	type: 'string',
    	required : true,
    	unique : true
    },

    template:{
    	type:'string',
    	required : true,

    }
}
};

