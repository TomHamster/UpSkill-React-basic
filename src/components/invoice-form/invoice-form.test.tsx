import { screen } from '@testing-library/react';
import InvoiceNewPage from 'pages/invoice-new-page';
import { render } from 'test-utils';

import InvoiceForm from 'components/invoice-form/invoice-form';

const mockSaveCallback = jest.fn();
const mockValidData = {
  no: 'gv42d',
  created: '2021-10-18',
  validUntil: '2023-07-31',
  items: [
    {
      name: 'Handmade Metal Pizza',
      amount: 43406,
      unit: 'turquoise',
      tax: 10,
      price: 702
    },
    {
      name: 'Handmade Metal Pizza',
      amount: 43406,
      unit: 'turquoise',
      tax: 10,
      price: 702
    }
  ],
  recipient: {
    companyName: 'Rath, Dare and Krajcik',
    city: 'Demarcomouth',
    postcode: '34591',
    nip: '92026',
    tel: '539986397',
    email: '',
    bankAccount: '83861773',
    street: 'Alexandra Corners'
  },
  sender: {
    companyName: 'Leannon - Hodkiewicz',
    city: 'Kozeycester',
    postcode: '41294-0320',
    nip: '83640',
    tel: '158056791',
    email: '',
    bankAccount: '63503666',
    street: 'Wiza Trafficway'
  }
};
describe('InvoiceForm', () => {
  test('on save should be called', async () => {
    render(<InvoiceForm onSave={mockSaveCallback} formData={mockValidData} />);
    const form = screen.getByText(/Invoice Form/i);
    expect(form).toBeInTheDocument();
  });

  test('on save should be not called', async () => {
    render(<InvoiceForm onSave={mockSaveCallback} formData={mockValidData} />);

    expect(mockSaveCallback).not.toBeCalled();
  });
});
