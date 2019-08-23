const Variable = require('./variable-model');

const controller = {
    create: (req, res) => {
        Variable.create(req.body)
            .then(variable => res.json(variable))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
    },
    get: (req, res) => {
        Variable.find({}, (err, variables) => {
            res.json(variables);
        });
    }
}

module.exports = controller;