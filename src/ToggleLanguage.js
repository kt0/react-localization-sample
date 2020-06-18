import React from 'react'
import PropTypes from 'prop-types'
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

export default ToggleLanguage
