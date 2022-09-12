import StickyTable from '@/components/sticky-table';
import {
  StickyTableActionsProps,
  StickyTableColumnProps
} from '@/components/sticky-table/sticky-table.interfaces';
import PageTemplate from '@/templates/page-template';
import { PageNavHeight } from '@/templates/page-template/page-template.constants';
import { Delete, Edit } from '@mui/icons-material';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useMemo, useState } from 'react';

import { INVOICES_ENDPOINTS } from './invoices-page.const';
import { Invoice, InvoicesColumnIds } from './invoices-page.interface';

const columns: StickyTableColumnProps[] = [
  { id: InvoicesColumnIds.no, label: 'No.', minWidth: 170 },
  {
    id: InvoicesColumnIds.created,
    label: 'Created',
    minWidth: 100,
    align: 'right',
    format: (value: string | number) => new Date(value).toLocaleDateString()
  },
  {
    id: InvoicesColumnIds.validUntil,
    label: 'Valid until',
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
  const [invoices, setInvoices] = useState<Invoice[] | null>(null);
  useEffect(() => {
    getInvoices().then();
  }, []);

  const invoicesList: Invoice[] | null = useMemo<Invoice[] | null>(() => {
    return invoices;
  }, [invoices]);

  const getInvoices = () => {
    return axios
      .get(INVOICES_ENDPOINTS.ALL())
      .then((response: AxiosResponse<Invoice[]>) => {
        setInvoices(response.data);
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
  };

  const removeInvoices = (id: string) => {
    return axios.delete(INVOICES_ENDPOINTS.EDIT(id)).catch((error: AxiosError) => {
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

  const actions: StickyTableActionsProps[] = [
    {
      icon: Delete,
      color: 'primary',
      ariaLabel: 'Remove invoice',
      onClick: removeHandler
    },
    {
      icon: Edit,
      color: 'primary',
      ariaLabel: 'Edit invoice',
      onClick: editHandler
    }
  ];

  return (
    <PageTemplate>
      <StickyTable
        columns={columns}
        rows={invoicesList}
        actions={actions}
        tableMaxHeight={`calc(100vh - (${PageNavHeight} + 150px))`}
      />
    </PageTemplate>
  );
}
