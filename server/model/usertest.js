var mongoose=require('mongoose');
module.exports=mongoose.model('Usertest',{
	  
     emailid: {
        type: String,
        default: '',
        required:true
    },
      score: {
        type: String,
        default: '',
        required:true
    },
     questionid: {
        type: String,
        default: '',
        required:true
    },
    
   // task: {type: mongoose.Schema.Types.ObjectId, ref: 'Task'},
      created_at: {type: Date, default: Date.now}
});