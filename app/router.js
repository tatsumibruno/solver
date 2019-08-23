const router = require('express').Router()
const variableController = require('./variable/variable-controller');
const entityController = require('./entity/entity-controller');
const entityGroupController = require('./entity-group/entity-group-controller');

router.post('/variables', variableController.create);
router.get('/variables', variableController.get);

router.post('/entities', entityController.create);
router.get('/entities', entityController.get);

router.post('/entityGroups', entityGroupController.create);
router.get('/entityGroups', entityGroupController.get);

module.exports = router;