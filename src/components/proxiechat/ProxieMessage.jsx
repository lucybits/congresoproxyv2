import emojione from 'emojione';
import responses from './data/responses.json';

export const getProxieResponse = (inputValue) => {
  const questionNumber = parseInt(inputValue, 10);

  if (isNaN(questionNumber)) {
    return {
      type: 'proxie',
      content: emojione.toImage(responses.messages.invalidInput),
    };
  } else if (questionNumber >= 1 && questionNumber <= 8) {
    const responsesForQuestion = responses.responses[questionNumber];
    const randomIndex = Math.floor(Math.random() * responsesForQuestion.length);
    return {
      type: 'proxie',
      content: responsesForQuestion[randomIndex],
    };
  } else {
    return {
      type: 'proxie',
      content: emojione.toImage(responses.messages.invalidNumber),
    };
  }
};

export const getWelcomeMessage = () => {
  return {
    type: 'proxie',
    content: emojione.toImage(responses.messages.welcome),
  };
};