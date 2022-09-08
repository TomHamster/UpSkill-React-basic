import { CssBaseline } from '@mui/material';
import { I18nextProvider } from 'react-i18next';

import i18nInitObject from './i18n/i18n';
import InvoicesPage from './pages/invoices-page';

function App() {
  return (
    <I18nextProvider i18n={i18nInitObject}>
      <CssBaseline />
      <InvoicesPage />
    </I18nextProvider>
  );
}

export default App;
