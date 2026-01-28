const router = require('express').Router();
const instrumentsController = require('../controllers/instruments');

router.get('/', instrumentsController.getAllInstruments);
router.get('/:id', instrumentsController.getSingleInstrument);
router.post('/', instrumentsController.createInstrument);
router.put('/:id', instrumentsController.updateInstrument);
router.delete('/:id', instrumentsController.deleteInstrument);

module.exports = router;