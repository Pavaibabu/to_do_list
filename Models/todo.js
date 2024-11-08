const mongoose=require('mongoose')
const todoSchema=new mongoose.Schema({
    task:String,
    done:{
        type:Boolean,
        default:false
    }

})
const todoModels=mongoose.model("todos",todoSchema)
module.exports=todoModels