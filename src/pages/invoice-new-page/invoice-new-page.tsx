import axios, { AxiosError, AxiosResponse } from 'axios';
import { INVOICES_ENDPOINTS } from 'pages/invoices-page/invoices-page.const';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTemplate from 'templates/page-template';

import { InvoiceFormData } from 'components/invoice-form/invoce-form.interfaces';
import InvoiceForm from 'components/invoice-form/invoice-form';

export default function InvoiceNewPage() {
  const [error, setError] = useState<string>();
  const navigate = useNavigate();
  const addInvoice = (data: InvoiceFormData) => {
    axios
      .post(INVOICES_ENDPOINTS.ADD(), data)
      .then((response: AxiosResponse<InvoiceFormData>) => {
        navigate(-1);
      })
      .catch((error: AxiosError) => {
        setError(error.message);
      });
  };

  const save = (data: InvoiceFormData) => {
    addInvoice(data);
  };
  return (
    <PageTemplate error={error}>
      <InvoiceForm onSave={save} />
    </PageTemplate>
  );
}
