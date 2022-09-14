import { CssBaseline } from '@mui/material';
import { I18nextProvider } from 'react-i18next';

import i18nInitObject from './i18n/i18n';
import Router from './router';

function App() {
  return (
    <I18nextProvider i18n={i18nInitObject}>
      <CssBaseline />
      <Router />
    </I18nextProvider>
  );
}

export default App;
