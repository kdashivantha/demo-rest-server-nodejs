const faker = require('faker');
var _ = require('lodash');

module.exports = function(){
    return {
        products: _.times(50, (n)=>{
            return {
                id:n+1,
                name:faker.company.companyName(),
                image:faker.image.nature()
            }
        })
    };
};