let rp = require('request-promise');

module.exports = (url) => {

    let p = new Promise((resolve, reject) => {
        if (url !== 'http://localhost:3020/test') {
            reject(Error('url is wrong'))
        } else {
            rp(url).then(data => resolve(data));
        }
    })
    
    return p;
}