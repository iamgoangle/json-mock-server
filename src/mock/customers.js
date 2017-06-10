// customers.js
var faker = require('faker');

function generateCustomers () {
  let customers = [];

  for (var id = 0; id < 50; id++) {
    var firstName = faker.name.firstName();
    var lastName = faker.name.firstName();
    var phoneNumber = faker.phone.phoneNumberFormat();

    customers.push({
      "id": id,
      "first_name": firstName,
      "last_name": lastName,
      "phone": phoneNumber
    });
  }

  return { "customers": customers };
}

// json-server requires that you export
// a function which generates the data set
module.exports = generateCustomers();