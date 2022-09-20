import { InvoiceFormData } from '@/components/invoice-form/invoce-form.interfaces';
import InvoiceForm from '@/components/invoice-form/invoice-form';
import { useFetch } from '@/hooks/useFetch';
import { INVOICES_ENDPOINTS } from '@/pages/invoices-page/invoices-page.const';
import PageTemplate from '@/templates/page-template';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function InvoiceEditPage() {
  const [errorMessage, setErrorMessage] = useState<string>();
  const navigate = useNavigate();
  const { id } = useParams();

  if (!id) {
    navigate('page-not-found');
    return;
  }

  const { data, loading, error } = useFetch(INVOICES_ENDPOINTS.GER_INVOICE(id));
  const invoice = data;

  if (error) {
    navigate('page-not-found');
  }

  const updateInvoice = (data: InvoiceFormData) => {
    if (!data.id) {
      return;
    }

    axios
      .put(INVOICES_ENDPOINTS.EDIT(data.id), data)
      .then((response: AxiosResponse<InvoiceFormData>) => {
        navigate(-1);
      })
      .catch((error: AxiosError) => {
        setErrorMessage(error.message);
      });
  };

  const save = (data: InvoiceFormData) => {
    updateInvoice(data);
  };

  return (
    <PageTemplate loading={loading} error={errorMessage}>
      {invoice && <InvoiceForm formData={invoice} onSave={save}></InvoiceForm>}
    </PageTemplate>
  );
}
