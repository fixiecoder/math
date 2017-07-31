import { Map } from 'immutable';

const initialState = Map({
  name: 'Layla'
});

export default function test(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}