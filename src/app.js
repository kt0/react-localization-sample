import React from 'react'
import { IntlProvider } from 'react-intl'
import messages from './locales'
import ToggleLanguage from './ToggleLanguage'
import Body from './body'

export default function App() {
  const [language, setLanguage] = React.useState('en')
  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <ToggleLanguage
        onLanguageChange={(ln) => setLanguage(ln)}
        language={language}
      />
      <hr />
      <Body />
    </IntlProvider>
  )
}
