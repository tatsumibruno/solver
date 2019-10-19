const Entity = require('./entity-model');

const controller = {
    
}

controller.create = function(req, res) {
    Entity.create(req.body)
        .then(entity => res.json(entity))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};

controller.get = function(req, res) {
    Entity.find({}, (err, entities) => {
        res.json(entities);
    });
};

module.exports = controller;