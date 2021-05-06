const { ACCEPTED, NOT_MODIFIED, CREATED } = require('../../../common/constants');
const Viewed = require('../../../data/viewed.json');
const writeProductFile = require('../common/writeDbFile');
const path = require('path');
const { buildSuccess } = require('../../../common/build');

const FILE_PATH = path.join(__dirname, '../../../data/viewed.json');

const productViewed = (req, res) => {
    let { productId: id, userId } = req.params; 
    id = parseInt(id);
    let newView = {};
    let viewUpdated = false;
    if(Viewed.length == 0){
        newView = {
            userId,
            viewedProducts: [id]
        }
        Viewed.push(newView);
        viewUpdated = true;
    }else{
        const userViewIndex = Viewed.findIndex(view => view.userId === userId);
        // User has not viewed any products yet
        if(userViewIndex<0){
            newView = {
                userId,
                viewedProducts: [id]
            };
            Viewed.push(newView);
            viewUpdated = true;
        }else{
            const userView = Viewed[userViewIndex];
            if(userView.viewedProducts.findIndex(productId => productId === id)<0){
                userView.viewedProducts.push(id);
                Viewed[userViewIndex] = userView;
                viewUpdated = true;
            }
        }
    }
    if(viewUpdated){
        writeProductFile(FILE_PATH, Viewed).then(() => {
            return res.status(CREATED).send(buildSuccess(`Views successfully updated for user: ${userId}`));
        }).catch(err => {
            return res.status(NOT_MODIFIED).send(buildSuccess(`Views could not be updated for user ${userId}: ${err}`));
        })
    }else{
        return res.status(ACCEPTED).send(buildSuccess(`Views successfully updated for user: ${userId}`));
    }

}

module.exports = productViewed;