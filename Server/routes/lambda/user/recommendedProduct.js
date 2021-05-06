const Users = require('../../../data/users.json');
const Viewed = require('../../../data/viewed.json');
const LOG = require('../../../logger/log');


const recommendedProduct = (req, res) => {

    const { userId } = req.query;
    const usersFollowing = Users.find(user => user.id === userId).following;

    if(Viewed.length == 0){
        LOG.info(`Empty viewed collection`);
    }else{
        usersFollowing.map(follow => {
            
        })
    }
}

const getFrequencyOfProducts = (usersFollowing) => {
    const productsViewedMap = new Map();
    usersFollowing.map(userId => {
        const productsViewed = getProductsViewedByUser(userId);
        if(productsViewed.length!==0){
            productsViewed.map(productId => {
                if(productsViewedMap.has(productId)){
                    productsViewedMap.set(productId, productsViewedMap.get(productId)+1);
                }
            })
        }
    })
    return productsViewedMap;
}

const getProductsViewedByUser = (userId) => {
    const productsViewed = Viewed.find(user => user.userId === userId);
    return productsViewed ? productsViewed : [];
}

module.exports = recommendedProduct;