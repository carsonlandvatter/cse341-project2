const router = require('express').Router();
const instrumentsController = require('../controllers/instruments');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', instrumentsController.getAllInstruments);
router.get('/:id', instrumentsController.getSingleInstrument);
router.post('/', isAuthenticated, instrumentsController.createInstrument);
router.put('/:id', isAuthenticated, instrumentsController.updateInstrument);
router.delete('/:id', isAuthenticated, instrumentsController.deleteInstrument);

module.exports = router;