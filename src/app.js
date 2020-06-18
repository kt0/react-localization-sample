import React from 'react'
import PropTypes from 'prop-types'
import { IntlProvider, FormattedMessage } from 'react-intl'
import messages from './locales'

const ToggleLanguage = ({ onLanguageChange, language }) => {
  return (
    <label>
      <input
        name="language"
        type="checkbox"
        checked={language === 'fa'}
        onChange={(event) =>
          onLanguageChange(event.target.checked ? 'fa' : 'en')
        }
      />
      Use persian language
    </label>
  )
}

ToggleLanguage.prototype = {
  onLanguageChange: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired
}

export default function App() {
  const [language, setLanguage] = React.useState('en')
  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <ToggleLanguage
        onLanguageChange={(ln) => setLanguage(ln)}
        language={language}
      />
      <hr />
      <FormattedMessage id="sample" />
    </IntlProvider>
  )
}
