import { render } from 'test-utils';
import { screen, waitFor, fireEvent } from '@testing-library/react';
import React from 'react';

import InvoicesPage from './invoices-page';

const mockedRouter = jest.mock('react-router-dom');

const dummyTodos = [
  {
    id: 'd8a5a077-64b1-4fbd-9771-9cbd5638b46e',
    no: 'ggfxv',
    created: '2022-05-26T06:03:44.652Z',
    validUtil: '2023-03-15T21:37:54.774Z',
    amount: '238.10'
  },
  {
    id: '0ca4968f-cf8d-4516-848e-3c85f5396baa',
    no: 'ajert',
    created: '2022-03-06T10:07:08.332Z',
    validUtil: '2023-08-08T01:59:10.072Z',
    amount: '287.01'
  }
];

jest.mock('hooks/useFetch', () => ({
    useFetch: ()=> ({ data: dummyTodos, loading: false, error:'' })
  })
);

describe('InvoicesPage', () => {
  test('should show table', async () => {
    render(<InvoicesPage />);

    const tableElement = await screen.findByText('Actions');

    expect(tableElement).toBeVisible();
  });


  test('click on the navigation should redirect', async () => {
    render(<InvoicesPage />);

    const button = await screen.getAllByText('Add new invoice')[0];
    fireEvent.click(button)
    expect(screen.getByText(/Invoice Form/i)).toBeInTheDocument();

  });
});
