const mongoose = require('mongoose');

const industrialEngineeringSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        required: false,
        auto: true
    },
    poductMethod: {
        type: String,
        required: true
    },
    researchStatus: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model('Industrial_Engineering', industrialEngineeringSchema);