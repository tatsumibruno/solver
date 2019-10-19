const mongoose = require('mongoose');

const Variable = mongoose.model('Variable', {
    identifier: {
        type: String,
        require: true
    },
    entity: {
        type: String,
        require: true
    },
    value: {
        type: Number,
        require: true
    },
    problemId: {
        type: String,
        require: true
    }
}, 'variable');

module.exports = Variable;