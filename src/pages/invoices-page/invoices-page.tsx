import { Delete, Edit } from '@mui/icons-material';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import StickyTable from '../../components/sticky-table/sticky-table';
import {
  StickyTableActions,
  StickyTableColumn
} from '../../components/sticky-table/sticky-table.interfaces';
import { DATA_BASE_URL } from '../../shared/global.const';
import PageTemplate from '../../templates/page-template';
import { Invoices, InvoicesColumnIds } from './invoices-page.interface';

const columns: StickyTableColumn[] = [
  { id: InvoicesColumnIds.no, label: 'No.', minWidth: 170 },
  {
    id: InvoicesColumnIds.created,
    label: 'Created',
    minWidth: 100,
    align: 'right',
    format: (value: string | number) => new Date(value).toLocaleDateString()
  },
  {
    id: InvoicesColumnIds.validUtil,
    label: 'Valid util',
    minWidth: 170,
    align: 'right',
    format: (value: string | number) => new Date(value).toLocaleDateString()
  },
  {
    id: InvoicesColumnIds.amount,
    label: 'Amount',
    minWidth: 170,
    align: 'right',
    format: (value: string | number) => value.toLocaleString()
  }
];

export default function InvoicesPage() {
  const navigate = useNavigate();

  const [invoices, setInvoices] = useState<Invoices[] | null>(null);
  useEffect(() => {
    getInvoices().then();
  }, []);

  const invoicesList: Invoices[] | null = useMemo<Invoices[] | null>(() => {
    return invoices;
  }, [invoices]);

  const getInvoices = () => {
    return axios
      .get(`${DATA_BASE_URL}/invoices`)
      .then((response: AxiosResponse<Invoices[]>) => {
        setInvoices(response.data);
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
  };

  const removeInvoices = (id: string) => {
    return axios.delete(`${DATA_BASE_URL}/invoices/${id}`).catch((error: AxiosError) => {
      console.log(error);
    });
  };

  const removeHandler = (id: string) => {
    removeInvoices(id).then(() => {
      getInvoices().then();
    });
  };

  const editHandler = (id: string) => navigate(`/invoices/${id}`);

  const actions: StickyTableActions[] = [
    {
      icon: Delete,
      color: 'primary',
      ariaLabel: 'remove invoice',
      onClick: removeHandler
    },
    {
      icon: Edit,
      color: 'primary',
      ariaLabel: 'edit invoice',
      onClick: editHandler
    }
  ];

  return (
    <PageTemplate>
      <StickyTable columns={columns} rows={invoicesList} actions={actions} />
    </PageTemplate>
  );
}
