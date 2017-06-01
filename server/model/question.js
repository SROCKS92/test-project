var mongoose=require('mongoose');
module.exports=mongoose.model('Question',{
	  
     questionid: {
        type: String,
        default: '',
        required:false
    },
      question: {
        type: String,
        default: '',
        required:true
    },
     option: {
        type: String,
        default: '',
        required:true
    },
     answer: {
        type: String,
        default: '',
        required:true
    },
     path: {
        type: String,
        default: '',
        required:true
    },
    
   // task: {type: mongoose.Schema.Types.ObjectId, ref: 'Task'},
      created_at: {type: Date, default: Date.now}
});