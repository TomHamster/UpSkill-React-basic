
import axios, { AxiosError } from 'axios';
import { INVOICES_ENDPOINTS } from 'pages/invoices-page/invoices-page.const';
import { InvoiceFormData } from 'components/invoice-form/invoce-form.interfaces';

export const getInvoices = () => {
  return axios.get(INVOICES_ENDPOINTS.ALL()).catch((error: AxiosError) => {
    console.log(error);
  });
};

export const addInvoice = (data: InvoiceFormData) => {
  return axios.post(INVOICES_ENDPOINTS.ADD(), data).catch((error: AxiosError) => {
    alert('Something went wrong, try again');
  });
};

export const updateInvoice = (data: InvoiceFormData) => {
  if (!data.id) {
    return;
  }

  return axios.put(INVOICES_ENDPOINTS.EDIT(data.id), data).catch((error: AxiosError) => {
    alert('Something went wrong, try again');
  });
};
