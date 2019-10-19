const mongoose = require('mongoose');
const Constraint = require('../constraint/constraint-model');
const Entity = require('../entity/entity-model');
const EntityGroup = require('../entity-group/entity-group-model');
const Variable = require('../variable/variable-model');

const Problem = mongoose.model('Problem', {
    description: {
        type: String,
        required: true
    },
}, 'problem');

Problem.solve = async () => {
    const constraints = await Constraint.findByProblemId(this._id);
    console.log(constraints);
    return {
        test: 'abc123'
    }
}

module.exports = Problem;