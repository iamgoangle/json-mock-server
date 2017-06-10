/**
 * @author          Teerapong Singthong
 * @description     Define your database json file
 * 
 * 
 */

const path = require('path');

let mockFile = (schema) => {
    return require(path.join(__dirname, 'mock/', schema));
};

module.exports = () => {
    return {
        customers: mockFile('customers.js'),
        products: mockFile('products.js')
    };
};