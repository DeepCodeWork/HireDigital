const { buildSuccess, buildError } = require('../../../common/build');
const { ACCEPTED, SERVICE_UNAVAILABLE } = require('../../../common/constants');
const Products = require('../../../data/products.json');
const LOG = require('../../../logger/log');

const DEFAULT_PRODUCT_ON_SINGLE_PAGE = 12;

const getAllProducts = (req, res) => {
    try{
        const { sortBy, limit, offSet } = req.query;
        const numberOfProducts = parseInt(limit) || DEFAULT_PRODUCT_ON_SINGLE_PAGE
        const skipProducts = parseInt(offSet)|| 0;
        const endIndex = skipProducts+numberOfProducts;

        if(sortBy === 'dateModified'){

        }else{
        res.status(ACCEPTED).json(buildSuccess(Products.slice(skipProducts, endIndex)));
        }
    }catch(error){
        LOG.error(error);
        res.status(SERVICE_UNAVAILABLE).json(buildError(error));
    }
}

module.exports = getAllProducts;