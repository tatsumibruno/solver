const EntityGroup = require('./entity-group-model');

const controller = {
    create: (req, res) => {
        EntityGroup.create(req.body)
            .then(groups => res.json(groups))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
    },
    get: (req, res) => {
        EntityGroup.find({}, (err, groups) => {
            res.json(groups);
        });
    }
}

module.exports = controller;