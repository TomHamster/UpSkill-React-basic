import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './App.css';

const langList: { [key: string]: { nativeName: string } } = {
  en: { nativeName: 'English' },
  pl: { nativeName: 'Polski' }
};

function App() {
  const [count, setCount] = useState(0);
  const { t, i18n } = useTranslation();

  return (
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
  );
}

export default App;
