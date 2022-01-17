const mongoose = require('mongoose');

//scp schema
const tempSchema = new mongoose.Schema({
    state:[{
        city:{
        name: String,
        },
        required: true,
        onset: String,
        seasonend: String,
        seasonlength: String,
        annualrainfall: String
    }]
});



module.exports = mongoose.model('Temp', tempSchema);