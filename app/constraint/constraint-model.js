const mongoose = require('mongoose');
const EntityGroup = require('../entity-group/entity-group-model');

const Schema = new mongoose.Schema({
    entity: String,
    group: String,
    variable: String,
    operator: {
        type: String,
        require: true
    },
    problemId: {
        type: String,
        require: true
    },
    value: {
        type: Number,
        require: true
    }
});

Schema.query.findByProblemId = (problemId) => {
    return Constraint.find({problemId: problemId}).exec();
}

const Constraint = mongoose.model('Constraint', Schema, 'constraint');

module.exports = Constraint;