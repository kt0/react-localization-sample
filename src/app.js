import React from "react";
import PropTypes from "prop-types";

const translations = {
  en: {
    sample: "This is an english text."
  },
  fa: {
    sample: "این متن فارسی است."
  }
};

const LocaleContext = React.createContext("en");

const ToggleLanguage = ({ onLanguageChange, language }) => {
  return (
    <label>
      <input
        name="language"
        type="checkbox"
        checked={language === "fa"}
        onChange={event => onLanguageChange(event.target.checked ? "fa" : "en")}
      />
      Use persian language
    </label>
  );
};

ToggleLanguage.prototype = {
  onLanguageChange: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired
};

const Text = ({ id }) => {
  const language = React.useContext(LocaleContext);
  return <span>{translations[language][id]}</span>;
};
Text.propTypes = {
  id: PropTypes.string.isRequired
};

export default function App() {
  const [language, setLanguage] = React.useState("en");
  return (
    <LocaleContext.Provider value={language}>
      <ToggleLanguage
        onLanguageChange={ln => setLanguage(ln)}
        language={language}
      />
      <hr />
      <Text id="sample" />
    </LocaleContext.Provider>
  );
}
