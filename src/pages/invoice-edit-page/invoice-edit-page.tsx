import { INVOICES_ENDPOINTS } from '@/pages/invoices-page/invoices-page.const';
import { Invoice } from '@/pages/invoices-page/invoices-page.interface';
import PageTemplate from '@/templates/page-template';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function InvoiceEditPage() {
  const [invoice, setInvoice] = useState<Invoice>();

  const { id } = useParams();
  const navigate = useNavigate();

  const getInvoice = (id: string) => {
    return axios
      .get(INVOICES_ENDPOINTS.GER_INVOICE(id))
      .then((response: AxiosResponse<Invoice>) => {
        setInvoice(response.data);
      })
      .catch((error: AxiosError) => {
        redirect();
      });
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

  return <PageTemplate>{JSON.stringify(invoice)}</PageTemplate>;
}
