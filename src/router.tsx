import { BrowserRouter, Route, Routes } from 'react-router-dom';

import InvoiceEditPage from './pages/invoice-edit-page/invoice-edit-page';
import InvoicesPage from './pages/invoices-page';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<InvoicesPage />} />
        <Route path="invoices">
          <Route path="new" element={<InvoiceEditPage />} />
          <Route path=":id" element={<InvoiceEditPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
