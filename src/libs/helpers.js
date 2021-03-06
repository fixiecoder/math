import _ from 'lodash';
import { questionTypesList } from '../constants/question-types';
import { methodsList } from '../constants/methods';
import correctMessages from '../constants/correct-messages';
import incorrectMessages from '../constants/incorrect-messages';

export function getRandomNumberBetween(lower, upper) {
  return _.random(lower, upper);
}

export function getRandomType() {
  const typeIndex = getRandomNumberBetween(0, questionTypesList.length - 1);
  return questionTypesList[typeIndex];
}

export function getRandomMethod() {
  const methodIndex = getRandomNumberBetween(0, methodsList.length - 1);
  return methodsList[methodIndex];
}

export function getRandomCorrectMessage() {
  const messageIndex = getRandomNumberBetween(0, correctMessages.length - 1);
  return correctMessages[messageIndex];
}

export function getRandomIncorrectMessage() {
  const messageIndex = getRandomNumberBetween(0, incorrectMessages.length - 1);
  return incorrectMessages[messageIndex];
}
