const router = require('express').Router();
const sportsController = require('../controllers/sports');

router.get('/', sportsController.getAllSports);
router.get('/:id', sportsController.getSingleSport);
router.post('/', sportsController.createSport);
router.put('/:id', sportsController.updateSport);
router.delete('/:id', sportsController.deleteSport);

module.exports = router;
