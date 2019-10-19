const Problem = require('./problem-model');

const controller = {
    create: (req, res) => {
        Problem.create(req.body)
            .then(problem => res.json(problem))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
    },
    solve: (req, res) => {
        Problem.find({_id: req.params.id}, (err, problems) => {
            if (err) {
                console.log(err);
                res.status(500).json(err);
            } else {
                res.json(problems);
            }
        });
    },

}

module.exports = controller;