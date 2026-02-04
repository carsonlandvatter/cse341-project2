const router = require('express').Router();
const sportsController = require('../controllers/sports');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', sportsController.getAllSports);
router.get('/:id', sportsController.getSingleSport);
router.post('/', isAuthenticated, sportsController.createSport);
router.put('/:id', isAuthenticated, sportsController.updateSport);
router.delete('/:id', isAuthenticated, sportsController.deleteSport);

module.exports = router;
