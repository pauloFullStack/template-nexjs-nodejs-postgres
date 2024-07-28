const express = require('express');
const router = express.Router({ mergeParams: true });
const { getUsers, create } = require('../controllers/users');

router.route('/').get(getUsers);
router.route('/').post(create);

module.exports = router;
