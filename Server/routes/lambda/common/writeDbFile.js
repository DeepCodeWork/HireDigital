const fs = require('fs');

const writeProductFile = (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, JSON.stringify(data), 'utf8', (err, data)=>{
            if(err){
                LOG.error(`Could not write file: ${err}`);
                reject(err);
            }
            resolve();
    })
})
};

module.exports = writeProductFile;