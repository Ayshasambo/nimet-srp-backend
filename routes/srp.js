const router = require('express').Router();
const Srp = require('../models/Srp');

//CREATE
router.post("/", async (req, res) => {
  const newSrp = new Srp(req.body);

  try {
    const savedSrp = await newSrp.save();
    res.status(200).json(savedSrp);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET
 router.get("/",  async (req, res) => {
  try {
    const srp = await Srp.find();
    res.status(200).json(srp);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedSrp = await Srp.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedSrp);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Srp.findByIdAndDelete(req.params.id);
    res.status(200).json("Srp has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;