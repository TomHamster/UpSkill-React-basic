import { fireEvent, screen, waitFor } from '@testing-library/react';
import { render } from '@testing-library/react';

import InvoiceForm from 'components/invoice-form/invoice-form';
import { BrowserRouter } from 'react-router-dom';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: jest.fn((str) => str)})
}));

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
    render(<BrowserRouter><InvoiceForm onSave={mockSaveCallback} formData={mockValidData}/></BrowserRouter>);

    const button = screen.getByRole('button', {name: /Save/i})
    fireEvent.click(button)
    await waitFor(() => {
      expect(mockSaveCallback).toBeCalled()
    })
  });

  test('on save should be not called', async () => {
    mockValidData.no = ''

    render(<BrowserRouter><InvoiceForm onSave={mockSaveCallback} formData={mockValidData}/></BrowserRouter>);
    const button = screen.getByRole('button', {name: /Save/i})
    fireEvent.click(button)
    await waitFor(() => {
      const errorText =  screen.getByText(/no is a required field/i)
      expect(errorText).toBeInTheDocument()
    })
  });
});
