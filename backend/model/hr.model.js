const mongoose = require('mongoose');

const hrSchema = mongoose.Schema({
    empId: {
        type: mongoose.Types.ObjectId,
        required: false,
        auto: true
    },
    nic: {
        type: String,
        unique: true,
        required: true
    },
    civilStatus: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    userRole: {
        type: String,
        required: true
    },
    joinDate: {
        type: Date,
        default: Date.now,
        required: true
    }
});
module.exports = mongoose.model('Hr', hrSchema);