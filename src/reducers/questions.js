import { Map, List, Range } from 'immutable';
import * as actionTypes from '../actions/types/questions';
import * as methods from '../constants/methods';
import * as difficuty from '../constants/difficulty-types';
import { PRACTICE } from '../constants/game-types';

const initialState = Map({
  timesTables: Map({
    'one': Map({
      key: 'one',
      included: false,
      value: 1,
      factors: Map({
        qV1: Range(0, 11).toList(),
        qV2: Range(0, 11).toList(),
      }),
    }),
    'two': Map({
      key: 'two',
      included: true,
      value: 2,
      factors: Map({
        qV1: Range(0, 11).toList(),
        qV2: Range(0, 11).toList(),
      }),
    }),
    'three': Map({
      key: 'three',
      included: false,
      value: 3,
      factors: Map({
        qV1: Range(0, 11).toList(),
        qV2: Range(0, 11).toList(),
      }),
    }),
    'four': Map({
      key: 'four',
      included: false,
      value: 4,
      factors: Map({
        qV1: Range(0, 11).toList(),
        qV2: Range(0, 11).toList(),
      }),
    }),
    'five': Map({
      key: 'five',
      included: false,
      value: 5,
      factors: Map({
        qV1: Range(0, 11).toList(),
        qV2: Range(0, 11).toList(),
      }),
    }),
    'six': Map({
      key: 'six',
      included: false,
      value: 6,
      factors: Map({
        qV1: Range(0, 11).toList(),
        qV2: Range(0, 11).toList(),
      }),
    }),
    'seven': Map({
      key: 'seven',
      included: false,
      value: 7,
      factors: Map({
        qV1: Range(0, 11).toList(),
        qV2: Range(0, 11).toList(),
      }),
    }),
    'eight': Map({
      key: 'eight',
      included: false,
      value: 8,
      factors: Map({
        qV1: Range(0, 11).toList(),
        qV2: Range(0, 11).toList(),
      }),
    }),
    'nine': Map({
      key: 'nine',
      included: false,
      value: 9,
      factors: Map({
        qV1: Range(0, 11).toList(),
        qV2: Range(0, 11).toList(),
      }),
    }),
    'ten': Map({
      key: 'ten',
      included: false,
      value: 10,
      factors: Map({
        qV1: Range(0, 11).toList(),
        qV2: Range(0, 11).toList(),
      }),
    }),
  }),
  difficulty: difficuty.EASY,
  methods: List([methods.MULTIPLY]),
  practice: Map(),
  challenge: Map(),
  current: Map(),
  gameType: PRACTICE,
});

function removeFactor(state, action) {
  let factorList = state.getIn(['timesTables', action.table, 'factors', action.factorType]);

  // if(action.factor === undefined) {
  //   factorList = Range(0, 11).toList();
  // }

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

    case actionTypes.SET_INCLUDED_TABLE:
      return state.setIn(['timesTables', action.table, 'included'], action.included);

    case actionTypes.RESET_FACTOR:
      return state.setIn(['timesTables', action.table, 'factors', action.factorType], Range(0, 11).toList());

    case actionTypes.REMOVE_FACTOR:
      return removeFactor(state, action)

    case actionTypes.SET_CURRENT_QUESTION:
      return state.set('current', action.question);

    case actionTypes.SET_DIFFICULTY:
      return state.set('difficulty', action.difficulty);

    default:
      return state;
  }
}