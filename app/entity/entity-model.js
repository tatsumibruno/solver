const mongoose = require('mongoose');
const EntityGroup = require('../entity-group/entity-group-model');

const Schema = {
    identifier: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    incrementValue: {
        type: Number,
        require: true
    },
    integer: {
        type: Boolean,
        require: true
    },
    problemId: {
        type: String,
        require: true
    },
};

Schema.query.findByProblemId = (problemId) => {
    return Entity.find({problemId: problemId}).exec();
}

const Entity = mongoose.model('Entity', Schema, 'entity');

module.exports = Entity;