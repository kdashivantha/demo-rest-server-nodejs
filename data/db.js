const products = require('./products');

module.exports = function(){
    return Object.assign({},
        require('./users.json'),
        products()
    );
}