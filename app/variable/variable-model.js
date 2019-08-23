const mongoose = require('mongoose');

const Variable = mongoose.model('Variable', {
    code: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    value: Object
}, 'variable');

module.exports = Variable;