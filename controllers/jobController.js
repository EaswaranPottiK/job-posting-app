
const Job =  require('../models/Job') 

exports.createJob = async (req, res) => {
    try {
      const savedJob = await Job.create(req.body);
      savedJob.save()
      // console.log(""+JSON.stringify(req.body))
      return res.status(201).json(savedJob);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.getJobs = async (req,res) =>{
    try{
    const jobs = await Job.find();
    res.status(200).json(jobs);
    }catch(error){
      res.status(500).json({ error: error.message });
    }
  }