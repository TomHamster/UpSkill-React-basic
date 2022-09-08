import { Delete, Edit } from '@mui/icons-material';
import axios, { AxiosResponse } from 'axios';
import { useEffect, useMemo, useState } from 'react';

import StickyTable from '../../components/sticky-table/sticky-table';
import {
  StickyTableActions,
  StickyTableColumn
} from '../../components/sticky-table/sticky-table.interfaces';
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
    format: (value: string | number) => value.toLocaleString('en-US')
  }
];

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState<Invoices[] | null>(null);
  useEffect(() => {
    getInvoices().then();
  }, []);

  const invoicesList: Invoices[] | null = useMemo<Invoices[] | null>(() => {
    return invoices;
  }, [invoices]);

  const getInvoices = () => {
    return axios
      .get('http://localhost:3000/invoices')
      .then((response: AxiosResponse<Invoices[]>) => {
        setInvoices(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removeInvoices = (id: string) => {
    return axios.delete(`http://localhost:3000/invoices/${id}`).catch((error) => {
      console.log(error);
    });
  };

  const removeHandler = (id: string) => {
    removeInvoices(id).then(() => {
      getInvoices().then();
    });
  };

  const editHandler = (id: string) => {
    console.log(id + 'edit');
  };

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
      ariaLabel: 'remove invoice',
      onClick: editHandler
    }
  ];

  return (
    <PageTemplate>
      <StickyTable columns={columns} rows={invoicesList} actions={actions} />
    </PageTemplate>
  );
}
