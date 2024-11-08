const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const todoModels=require("./Models/todo.js")

const app=express()

app.use(cors())
app.use(express.json())

app.get('/get',(req,res)=>{
    todoModels.find()
    .then(result=>res.json(result))
    .catch(err =>res.json(err))
})

app.put('/update/:id',(req,res)=>{
    const {id} = req.params;
    todoModels.findByIdAndUpdate({_id:id},{done:true})
    .then(result =>res.json(result))
    .catch(err=>res.json(err))
})

app.delete('/delete/:id',(req,res)=>{
    const {id} = req.params;
    todoModels.findByIdAndDelete({_id:id})
    .then(result =>res.json(result))
    .catch(err=>res.json(err))
})

app.post('/add', (req, res) => {
    const task = req.body.task;
    console.log("Received task:", task);
    todoModels.create({
        task }).then(result => res.json(result))
    .catch(err =>res.json(err))
});

mongoose.connect('mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.listen(3001,()=>{
    console.log("Server is Running")
})