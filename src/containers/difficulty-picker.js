import { connect } from 'react-redux'
import DifficultyPicker from '../components/difficulty-picker'
import {
  setDifficulty,
} from '../actions/questions'

const mapStateToProps = state => {
  return {
    difficulty: state.getIn(['questions', 'difficulty'])
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setDifficulty: (difficulty) => dispatch(setDifficulty(difficulty))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DifficultyPicker);
