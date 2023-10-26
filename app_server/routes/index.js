var express = require('express');
var router = express.Router();
var ctrllocation = require('../controllers/location');
var ctrlothers = require('../controllers/others');

/* GET Locations page */
router.get('/', ctrllocation.homeList);
router.get('/location', ctrllocation.locationInfo);
router.get('/location1', ctrllocation.locationInfo2);
router.get('/location2', ctrllocation.locationInfo3);


/*GET others page */
router.get('/about', ctrlothers.about);
router.get('/signin', ctrlothers.signin);
router.get('/register', ctrlothers.register);

module.exports = router;