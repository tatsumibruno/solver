const mongoose = require('mongoose');

const EntityGroup = mongoose.model('EntityGroup', {
    identifier: {
        type: String,
        required: true
    },
    problemId: {
        type: String,
        require: true
    },
}, 'entityGroup');

module.exports = EntityGroup;