import React from 'react'
import { FormattedMessage } from 'react-intl'

const Question = () => {
  const [answer, setAnswer] = React.useState(0)
  const correctAnswer = answer === 42
  return (
    <>
      <div>
        <input
          type="number"
          value={answer}
          onChange={(event) => setAnswer(+event.target.value)}
        />
      </div>
      <FormattedMessage
        id={
          correctAnswer
            ? 'answer_to_the_question_of_everything_corrcet'
            : 'answer_to_the_question_of_everything_error'
        }
        values={{ answer }}
      />
    </>
  )
}

export default Question
