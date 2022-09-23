import { Delete, Edit } from '@mui/icons-material';
import axios, { AxiosError } from 'axios';
import { useFetch } from 'hooks/useFetch';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTemplate from 'templates/page-template';
import { PageNavHeight } from 'templates/page-template/page-template.constants';

import StickyTable from 'components/sticky-table';
import {
  StickyTableActionsProps,
  StickyTableColumnProps
} from 'components/sticky-table/sticky-table.interfaces';

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
  const [deleteID, setDeleteID] = useState('');
  const navigate = useNavigate();
  const { data, loading, error } = useFetch<Invoice[]>(INVOICES_ENDPOINTS.ALL(), deleteID);

  const invoicesList = useMemo<Invoice[] | undefined>(() => {
    return data;
  }, [data]);

  const removeInvoices = (id: string) => {
    return axios.delete(INVOICES_ENDPOINTS.EDIT(id)).catch((error: AxiosError) => {
      console.log(error);
    });
  };

  const removeHandler = (id: string) => {
    removeInvoices(id).then(() => {
      setDeleteID(id);
    });
  };

  const editHandler = (id: string) => navigate(`/invoices/${id}`);

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
    <PageTemplate loading={loading} error={error}>
      {invoicesList && <StickyTable
        columns={columns}
        rows={invoicesList}
        actions={actions}
        tableMaxHeight={`calc(100vh - (${PageNavHeight} + 150px))`}
      /> }
    </PageTemplate>
  );
}
