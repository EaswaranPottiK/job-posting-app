let mongoose = require('mongoose')

module.exports = mongoose.connect(`mongodb+srv://easwaranpottiak:4mmSjBZMkIOYyutu@cluster0.cixehwo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,{
}).then(function(db){
  // console.log(db);
  console.log("connect to the database");
}).catch(function(err){
  console.log("error",err);
});

const jobSchema = new mongoose.Schema({
    title:{type:String, required:true},
    description: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: Number, required: true },
})

const Job = mongoose.model('Job',jobSchema)