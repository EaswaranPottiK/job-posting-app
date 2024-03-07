
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
  },

  exports.getJobs = async (req,res) =>{

    try{
      console.log('test string')
    const Jobs = await Job.find();
    console.log("Jobs  "+Jobs)
    return res.json(Jobs);
    }catch(error){
      res.status(500).json({ error: error.message });
    }
  }