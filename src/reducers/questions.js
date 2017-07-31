import { Map, List, Range } from 'immutable';
import * as actionTypes from '../actions/types/questions';
import * as methods from '../constants/methods';

const initialState = Map({
  timesTables: Map({
    'one': Map({
      included: false,
      value: 1,
      factors: Map({
        qV1: Range(0, 11).toList(),
        qV2: Range(0, 11).toList(),
      }),
    }),
    'two': Map({
      included: true,
      value: 2,
      factors: Map({
        qV1: Range(0, 11).toList(),
        qV2: Range(0, 11).toList(),
      }),
    }),
    'three': Map({
      included: false,
      value: 3,
      factors: Map({
        qV1: Range(0, 11).toList(),
        qV2: Range(0, 11).toList(),
      }),
    }),
    'four': Map({
      included: false,
      value: 4,
      factors: Map({
        qV1: Range(0, 11).toList(),
        qV2: Range(0, 11).toList(),
      }),
    }),
    'five': Map({
      included: false,
      value: 5,
      factors: Map({
        qV1: Range(0, 11).toList(),
        qV2: Range(0, 11).toList(),
      }),
    }),
    'six': Map({
      included: false,
      value: 6,
      factors: Map({
        qV1: Range(0, 11).toList(),
        qV2: Range(0, 11).toList(),
      }),
    }),
    'seven': Map({
      included: false,
      value: 7,
      factors: Map({
        qV1: Range(0, 11).toList(),
        qV2: Range(0, 11).toList(),
      }),
    }),
    'eight': Map({
      included: false,
      value: 8,
      factors: Map({
        qV1: Range(0, 11).toList(),
        qV2: Range(0, 11).toList(),
      }),
    }),
    'nine': Map({
      included: false,
      value: 1,
      factors: Map({
        qV1: Range(0, 11).toList(),
        qV2: Range(0, 11).toList(),
      }),
    }),
    'ten': Map({
      included: false,
      value: 1,
      factors: Map({
        qV1: Range(0, 11).toList(),
        qV2: Range(0, 11).toList(),
      }),
    }),
  }),
  methods: List([methods.MULTIPLY, methods.PLUS]),
  // methods2: Map({ [methods.MULTIPLY]: methods.MULTIPLY }),
  practice: Map(),
  challenge: Map(),
  current: Map(),
});

function removeFactor(state, action) {
  let factorList = state.getIn(['timesTables', action.table, 'factors', action.factorType]);

  if(action.factor === undefined) {
    factorList = Range(0, 11).toList();
  }

  if(action.table === 'zero' || !action.table) {
    return state;
  }

  factorList = factorList.filter(factor => {
    return factor !== action.factor
  });

  const newState = state.setIn(['timesTables', action.table, 'factors', action.factorType], factorList);
  return newState;
}

export default function test(state = initialState, action) {
  switch(action.type) {

    case actionTypes.REMOVE_FACTOR:
      return removeFactor(state, action)

    case actionTypes.SET_CURRENT_QUESTION:
      return state.set('current', action.question);

    default:
      return state;
  }
}