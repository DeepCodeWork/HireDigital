const express = require('express');
const addProduct = require('../lambda/product/addProduct');
const editProduct = require('../lambda/product/editProduct');
const getAllProducts = require('../lambda/product/getAllProducts');
const router = express.Router();

router.get('/all', getAllProducts);
router.post('/add', addProduct);
router.put('/update', editProduct);

module.exports = router;