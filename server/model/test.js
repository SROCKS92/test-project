var mongoose=require('mongoose');
module.exports=mongoose.model('Test',{
	  
      testname: {
        type: String,
        default: '',
        required:true
    },
    questionid:{
         type: String,
        default: '',
        required:true
    
     }, question: {
        type: String,
        default: '',
        required:true
    
    },
     answer: {
        type: String,
        default: '',
        required:true
    },
    
   // task: {type: mongoose.Schema.Types.ObjectId, ref: 'Task'},
      created_at: {type: Date, default: Date.now}
});