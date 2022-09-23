import InvoiceEditPage from 'pages/invoice-edit-page';
import InvoiceNewPage from 'pages/invoice-new-page';
import InvoicesPage from 'pages/invoices-page';
import NotFoundPage from 'pages/not-found-page';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<InvoicesPage />} />
        <Route path="invoices">
          <Route path="new" element={<InvoiceNewPage />} />
          <Route path=":id" element={<InvoiceEditPage />} />
        </Route>
        <Route path="page-not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="page-not-found" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
