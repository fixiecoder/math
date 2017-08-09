import * as actionTypes from './types/app';

export function setCurrentPage(page) {
  return { type: actionTypes.SET_CURRENT_PAGE, page };
}