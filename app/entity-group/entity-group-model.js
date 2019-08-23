const mongoose = require('mongoose');

const EntityGroup = mongoose.model('EntityGroup', {
    description: {
        type: String,
        required: true
    }
}, 'entityGroup');

module.exports = EntityGroup;