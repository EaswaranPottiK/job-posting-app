exports.createJob = async (req, res) => {
    try {
      const savedJob = await Job.create(req.body);
      res.status(201).json(savedJob);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };