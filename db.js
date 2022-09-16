const { faker } = require('@faker-js/faker');

function generateItemList() {
  const item = () => ({
    name: faker.commerce.productName(),
    amount: faker.datatype.number({
      min: 1
    }),
    unit: faker.random.word(),
    tax: faker.datatype.number({
      min: 8,
      max: 23
    }),
    price: Number(faker.commerce.price())
  });

  return new Array(faker.datatype.number(10)).fill(item());
}

function createRandomInvoices() {
  const data = { invoices: [] };

  const sum = (items) => {
    let sum = 0;
    items.map((item) => {
      sum = sum + Number(item.price);
    });

    return sum;
  };

  for (let i = 0; i < 100; i++) {
    const itemList = generateItemList();

    data.invoices.push({
      id: faker.datatype.uuid(),
      no: faker.random.alphaNumeric(5),
      created: faker.date.past().toISOString().slice(0, 10),
      validUntil: faker.date.future().toISOString().slice(0, 10),
      items: itemList,
      recipient: {
        companyName: faker.company.name(),
        city: faker.address.city(),
        postcode: faker.address.zipCode(),
        nip: faker.datatype.number(),
        tel: faker.phone.number(),
        email: '',
        bankAccount: faker.finance.account(),
        street: faker.address.street()
      },
      sender: {
        companyName: faker.company.name(),
        city: faker.address.city(),
        postcode: faker.address.zipCode(),
        nip: faker.datatype.number(),
        tel: faker.phone.number(),
        email: '',
        bankAccount: faker.finance.account(),
        street: faker.address.street()
      },
      amount: sum(itemList)
    });
  }

  return data;
}

module.exports = createRandomInvoices;
