var mongoose=require("mongoose")
	
var userDataSchema=new mongoose.Schema({
	name:String,
	date:{
		type:Date,
		default:Date.now
	}
})	
module.exports=mongoose.model("customer",userDataSchema);