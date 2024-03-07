
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
    console.log('test string1')
  const Jobs = await Job.find();
  console.log("Jobs  "+Jobs)
  return res.json(Jobs);
  }catch(error){
    res.status(500).json({ error: error.message });
  }
}

exports.updateJob = async(req, res) =>{
  try{
    const jobId = req.params.id;
    const updateJob = await Job.findByIdAndUpdate(jobId, req.body)
    // console.log(updateJob)
    return res.json({message:'success'})
  }
  catch(error){
    res.status(500).json({error:error.message})
  }
}

exports.deleteJob = async(req,res) =>{
  try{
    const jobId = req.params.id;
    const deleteJob = await Job.findByIdAndDelete(jobId)
    if(!deleteJob){
      return res.status(404).json({message:'Job not found'})
    }
    else{
      return res.json({message:'item deleted successfully'})
    }
  }
  catch(error){
    return res.status(500).json({message:error.message})
  }
}