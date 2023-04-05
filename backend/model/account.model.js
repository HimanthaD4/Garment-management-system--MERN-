const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
    accountId: {
        type: mongoose.Types.ObjectId,
        required: false,
        auto: true
    },
    empId: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true
    },
    salaryType: {
        type: String,
        required: true
    },
    laborCost: {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model('Account', accountSchema);