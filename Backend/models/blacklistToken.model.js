const mongoose = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        require: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.new,
        expires: 86400 //24 hours in secounds
    }
});

module.exports = mongoose.model('BlacklistToken', blacklistTokenSchema);