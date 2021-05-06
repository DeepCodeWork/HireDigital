const { buildError, buildSuccess } = require('../../../common/build');
const { NOT_MODIFIED, CREATED } = require('../../../common/constants');
const LOG = require('../../../logger/log');
const Product = require('../../../data/products.json');
const writeProductFile = require('../common/writeDbFile');
const path = require('path');
const FILE_PATH = path.join(__dirname, '../../../data/products.json');

const addProduct = async (req, res) => {
    try{
         const params = req.body;
			delete params.productId;
			console.log(Product[Product.length-1].productId);
         Product.push({productId: parseInt(Product[Product.length-1].productId)+1, ...params, dateCreated: Date.now()});
			await writeProductFile(FILE_PATH, Product);
			console.log(Product[Product.length-1].productId);
			res.status(CREATED).send(buildSuccess({productId: Product[Product.length-1].productId}));
    }catch(error){
        LOG.error(error);
        res.status(NOT_MODIFIED).send(buildError(err));
    }
}

module.exports = addProduct;