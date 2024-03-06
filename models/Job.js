let mongoose = require('mongoose')

module.exports = mongoose.connect(`mongodb+srv://easwaranpottiak:4mmSjBZMkIOYyutu@cluster0.cixehwo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,{

}).then(function(db){
  // console.log(db);
  console.log("connect to the database");
}).catch(function(err){
  console.log("error",err);
});