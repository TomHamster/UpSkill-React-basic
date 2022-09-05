import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';

import './App.css';
import i18nInitObject from './i18n/i18n';

const langList: { [key: string]: { nativeName: string } } = {
  en: { nativeName: 'English' },
  pl: { nativeName: 'Polski' }
};

function App() {
  const [count, setCount] = useState(0);
  const { t, i18n } = useTranslation();

  return (
    <I18nextProvider i18n={i18nInitObject}>
      <div className="App">
        <div>
          <ToggleButtonGroup
            color="primary"
            value={i18n.resolvedLanguage}
            exclusive
            onChange={(event, value) => i18n.changeLanguage(value)}
            aria-label="Platform">
            {Object.keys(langList).map((lng: string) => (
              <ToggleButton
                key={lng}
                value={lng}
                style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}>
                {langList[lng].nativeName}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </div>

        <h1>{t('React')}</h1>
        <div className="card">
          <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </I18nextProvider>
  );
}

export default App;
