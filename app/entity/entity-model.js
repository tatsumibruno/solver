const mongoose = require('mongoose');
const EntityGroup = require('../entity-group/entity-group-model');

const Entity = mongoose.model('Entity', {
    description: {
        type: String,
        required: true
    },
    groupId: {
        type: String,
        required: true,
        validate: {
            validator: (groupId) => {
                return new Promise((resolve, reject) => {
                    EntityGroup.findById(groupId, (err, entityGroup) => {
                        if (entityGroup) {
                            resolve(true);
                        }
                        resolve(false);
                    })
                });
            },
            message: () => 'Grupo de Entidade inválido.'
        }
    }
}, 'entity');

module.exports = Entity;