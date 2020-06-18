import React from 'react'
import { IntlProvider } from 'react-intl'
import messages from './locales'
import ToggleLanguage from './ToggleLanguage'
import Body from './body'

const LOCALE_MAP = {
  en: 'en-US',
  fa: 'fa-IR-u-ca-persian'
}

export default function App() {
  const [language, setLanguage] = React.useState('en')
  const locale = LOCALE_MAP[language]
  return (
    <IntlProvider locale={locale} messages={messages[language]}>
      <ToggleLanguage
        onLanguageChange={(ln) => setLanguage(ln)}
        language={language}
      />
      <hr />
      <Body />
    </IntlProvider>
  )
}
