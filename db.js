const { faker } = require('@faker-js/faker');

function createRandomInvoices() {
  const data = { invoices: [] };

  for (let i = 0; i < 100; i++) {
    data.invoices.push({
      id: faker.datatype.uuid(),
      no: faker.random.alphaNumeric(5),
      created: faker.date.past(),
      validUtil: faker.date.future(),
      amount: faker.finance.amount()
    });
  }

  return data;
}

module.exports = createRandomInvoices;
