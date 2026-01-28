const router = require('express').Router();
const homeController = require('../controllers/home');

router.get('/', homeController.homeRoute);

router.use('/sports', require('./sports'));

router.use('/instruments', require('./instruments'));

module.exports = router;