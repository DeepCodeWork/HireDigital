const fs = require('fs');
const path = require('path');

const PRODUCT_FILE_PATH = path.join(__dirname, '../../../data/products.json');

const readProductFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(PRODUCT_FILE_PATH, 'utf8', (err, data) => {
            if (err){
                LOG.error(`Could not read file: ${err}`);
                reject(err);
            } else {
                allProducts = JSON.parse(data);
                resolve(allProducts);
            }
        })
    })
}

module.exports = readProductFile;