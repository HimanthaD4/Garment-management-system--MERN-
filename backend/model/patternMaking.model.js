const mongoose = require('mongoose');

const patternMakingSchema = mongoose.Schema({
    designCode: {
        type: mongoose.Types.ObjectId,
        required: false,
        auto: true
    },
    designName: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    materialCost: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    genderType: {
        type: String,
        required: true
    },
    designDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    size: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Pattern_Making', patternMakingSchema);