import i18n from '@/i18n/i18nForTests';
import { render } from '@/test-utils';
import { RenderResult, act, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import React from 'react';

import InvoicesPage from './invoices-page';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn()
}));

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

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockResolvedValueOnce({
  data: dummyTodos,
  status: 200,
  statusText: 'Ok',
  headers: {},
  config: {}
});

describe('InvoicesPage', () => {
  test('should show table', async () => {
    render(<InvoicesPage />);

    const tableElement = await screen.findByText('Actions');

    // const tableElement = await screen.findByText('Actions');
    expect(await screen.findByText('Actions')).toBeVisible();
  });

  // test('should get data from ', async () => {
  //   render(<InvoicesPage />);
  //
  //   const moctext = await screen.findByText('ajert');
  //
  //   expect(moctext).toBeInTheDocument();
  //
  //   // expect(mockedAxios.get).toBeCalledTimes(1);
  // });
});
