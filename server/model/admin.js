var mongoose=require('mongoose');
module.exports=mongoose.model('Admin',{
	  firstname: {
        type: String,
        default: '',
        required:true
    },
    lastname: {
        type: String,
        default: '',
        required:false
    },
     emailid: {
        type: String,
        default: '',
        required:true
    },
      password: {
        type: String,
        default: '',
        required:true
    },
     
    
   // task: {type: mongoose.Schema.Types.ObjectId, ref: 'Task'},
      created_at: {type: Date, default: Date.now}
});