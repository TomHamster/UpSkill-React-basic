import { useState } from 'react'
import './App.css'
import { useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  pl: { nativeName: 'Polski' }
};

function App() {
  const [count, setCount] = useState(0);
  const { t, i18n } = useTranslation(['translation']);

  return (
    <div className="App">
      <div>
        {Object.keys(lngs).map((lng: string) => (
          <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>

      <h1>{t('React')}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
