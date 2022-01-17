const mongoose = require('mongoose');
const Joi = require('joi');

const campaignSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength:50
    },
    description: {
        type: String,
        trim: true,
        minlength: 5,
        maxlength:50
    },
    image: {
        type: String,
        trim: true,
        minlength: 5,
        maxlength:50
    }, 
    price: {
        type: Number,
        required: true,
        trim: true,
        minlength: 5,
        maxlength:50
    },
    category: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength:50
    }, 
    trades: {
        type: Array
    },
    quantity: {
        type: Number,
        trim: true,
        minlength: 3,
        maxlength:9
    },
    quantitySold: {
        type: Number,
        trim: true,
        minlength: 3,
        maxlength:9,
        default: 0
    },
    tracking: [
        {
          location: {
            type: String,
          },
          date: {
            type: String,
          },
        },
      ],
      pricechange: [
        {
          latest: {
            type: Number,
          },
          month: {
            type: Number,
          },
        },
      ],
        },

    {timestamps: true} 
)

module.exports = mongoose.model("Campaign", campaignSchema);
