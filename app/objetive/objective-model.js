const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    variableToOptimize: {
        type: String,
        require: true
    },
    optimizeType: {
        type: String,
        require: true
    },
    problemId: {
        type: String,
        require: true
    }
});

Schema.query.findByProblemId = (problemId) => {
    return Objective.find({problemId: problemId}).exec();
}

const Objective = mongoose.model('Objective', Schema, 'objective');

module.exports = Objective;