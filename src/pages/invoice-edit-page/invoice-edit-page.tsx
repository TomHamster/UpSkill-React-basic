import { InvoiceFormData } from '@/components/invoice-form/invoce-form.interfaces';
import InvoiceForm from '@/components/invoice-form/invoice-form';
import { INVOICES_ENDPOINTS } from '@/pages/invoices-page/invoices-page.const';
import PageTemplate from '@/templates/page-template';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function InvoiceEditPage() {
  const [invoice, setInvoice] = useState<InvoiceFormData>();

  const { id } = useParams();
  const navigate = useNavigate();

  const getInvoice = (id: string) => {
    return axios
      .get(INVOICES_ENDPOINTS.GER_INVOICE(id))
      .then((response: AxiosResponse<InvoiceFormData>) => {
        setInvoice(response.data);
      })
      .catch((error: AxiosError) => {
        redirect();
      });
  };

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
        alert('Something went wrong, try again');
      });
  };

  const save = (data: InvoiceFormData) => {
    updateInvoice(data);
  };

  const redirect = () => {
    navigate('page-not-found');
  };

  useEffect(() => {
    if (!id) {
      redirect();
      return;
    }

    getInvoice(id).then();
  }, []);

  return (
    <PageTemplate>
      {invoice && <InvoiceForm formData={invoice} onSave={save}></InvoiceForm>}
    </PageTemplate>
  );
}
