import { connect } from 'react-redux'
import Menu from '../components/stats'
import { gameTypeMap } from '../constants/game-types';
import {
  resetQuestionHistoryByType
} from '../actions/questions';

const mapStateToProps = state => {
  const gameType = state.getIn(['questions', 'gameType']);
  const history = state.getIn(['questions', gameTypeMap[gameType]]);
  return {
    history,
    gameType
  };
}

const mapDispatchToProps = dispatch => {
  return {
    resetQuestionHistoryByType: (gameType) => dispatch(resetQuestionHistoryByType(gameType)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
