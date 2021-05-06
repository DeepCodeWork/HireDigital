const express = require('express');
const productViewed = require('../lambda/user/productViewed');


const router = express.Router();
router.get('/:userId/:productId', productViewed);

module.exports = router;