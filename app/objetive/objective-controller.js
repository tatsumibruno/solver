const Constraint = require('./constraint-model');

function ConstraintController() {
}

const controller = ConstraintController.prototype;

controller.create = function(req, res) {
    Constraint.create(req.body)
        .then(constraint => res.json(constraint))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};

controller.get = function(req, res) {
    Constraint.find({}, (err, entities) => {
        if (err) {
            console.log(err);
            res.status(500).json(err);
        } else {
            res.json(entities);
        }
    });
};

module.exports = ConstraintController;