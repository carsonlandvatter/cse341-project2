const router = require('express').Router();
const instrumentsController = require('../controllers/instruments');

router.get('/', instrumentsController.getAllInstruments);
router.get('/:id', instrumentsController.getSingleInstrument)

module.exports = router;