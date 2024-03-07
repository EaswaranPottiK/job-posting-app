const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://easwaranpottiak:4mmSjBZMkIOYyutu@cluster0.cixehwo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  {}
)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Error:", err);
  });

const jobSchema = new mongoose.Schema({
  title: { type: String},
  description: { type: String},
  company: { type: String},
  location: { type: String},
  salary: { type: Number},
});

const Job = mongoose.model('Job', jobSchema);
module.exports = Job