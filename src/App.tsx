import { Button, CssBaseline } from '@mui/material';
import { useState } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';

import './App.css';
import i18nInitObject from './i18n/i18n';
import PageTemplate from './templates/page-template';
import PageTemplateClass from './templates/page-template-class';

function App() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18nInitObject}>
      <CssBaseline />
      <PageTemplate>
        <h1>{t('React')}</h1>
        <div className="card">
          <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </div>
      </PageTemplate>

      <PageTemplateClass>
        <h1>{t('React')}</h1> temaplate class
        <div className="card">
          <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </div>
      </PageTemplateClass>
    </I18nextProvider>
  );
}

export default App;
