const { buildError, buildSuccess } = require('../../../common/build');
const Products = require('../../../data/products.json');

const getProductById = (req, res) => {
    const { id } = req.params;
    const product = Products.find(product => product.productId === parseInt(id));
    if(!id || !product){
        return res.status(404).json(buildError(`Invalid product Id: ${id}`));
    }else{
        return res.status(200).json(buildSuccess(product));
    }
}

module.exports = getProductById;