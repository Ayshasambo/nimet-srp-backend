const mongoose = require('mongoose');

const srpSchema = new mongoose.Schema(
    {
     
     statename: {
        type: String,
    }
  },
    {timestamps: true} 
)

module.exports = mongoose.model("Srp", srpSchema);
