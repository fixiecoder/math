import _ from 'lodash';
import { questionTypesList } from '../constants/question-types';
import { methodsList } from '../constants/methods';

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
