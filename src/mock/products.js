// products.js
var faker = require('faker');

function generateProducts () {
  let products = [];

  for (var id = 0; id < 50; id++) {
    var productName = faker.commerce.productName();
    var price = faker.commerce.price();
    var qty = faker.finance.amount();

    products.push({
      "id": id,
      "productName": productName,
      "price": price,
      "qty": qty
    });
  }

  return { "products": products };
}

// json-server requires that you export
// a function which generates the data set
module.exports = generateProducts();