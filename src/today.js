import React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'

const Today = () => {
  const [currentDate] = React.useState(new Date())
  const intl = useIntl()
  // See
  const formattedDate = intl.formatDate(currentDate, { weekday: 'long' })
  return (
    <>
      <p>
        This message uses{' '}
        <a href="http://userguide.icu-project.org/formatparse/messages">ICU</a>{' '}
        formatting
        <br />
        <FormattedMessage
          id={'reminder'}
          values={{
            currentDate,
            // Handling html
            b: (str) => <b>{str}</b>
          }}
        />
      </p>
      <p>
        This one uses intl.formatMessage
        <br />
        <FormattedMessage
          id={'reminder_formatted'}
          values={{
            formattedDate
          }}
        />
      </p>
    </>
  )
}

export default Today
