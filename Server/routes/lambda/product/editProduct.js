const { buildError, buildSuccess } = require('../../../common/build');
const { BAD_REQUEST, BAD_GATEWAY, CREATED } = require('../../../common/constants');
const Products = require('../../../data/products.json');
const LOG = require('../../../logger/log');
const writeProductFile = require('../common/writeDbFile');
const path = require('path');
const FILE_PATH = path.join(__dirname, '../../../data/products.json');

const editProduct = (req, res) => {

    const {
        productId: id, productCategory: category, productName: name, 
        productImage: image, productStock: stock,
        productPrice: price, salePrice: sPrice 
    } = req.body;
    const indexOfProduct = Products.findIndex(product => product.productId === id);
    if(indexOfProduct<0){
        return res.status(BAD_REQUEST).send(buildError(id ? `Incorrect product id: ${id}` : `No product id found`));
    }

    const { 
        productCategory, productName, 
        productImage, productStock,
        productPrice, salePrice 
    } = Products[indexOfProduct];
    
    const updatedProduct = {
        productId : id,
        productStock: stock ? parseInt(stock) : productStock,
        productCategory: category ? category : productCategory,
        productName: name ? name : productName,
        productImage: image ? image : productImage,
        productPrice: price ? price : productPrice,
        salePrice : sPrice ? sPrice : salePrice,
        dateModified : Date.now()
    };

    LOG.info(`updated product: ${updatedProduct}`)
    
    Products[indexOfProduct] = updatedProduct;

    writeProductFile(FILE_PATH, Products).then(() => {
        res.status(CREATED).send(buildSuccess({productId: id}));
    }).catch(err => {
        res.status(BAD_GATEWAY).send(buildError(err));
    })


    
    
    
}

module.exports = editProduct;