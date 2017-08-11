import { connect } from 'react-redux'
import Challenges from '../components/challenges'
import {
  setDifficulty,
} from '../actions/questions'
import { setCurrentPage } from '../actions/app';



const mapStateToProps = state => {
  return {
    difficulty: state.getIn(['questions', 'difficulty'])
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setDifficulty: (difficulty) => dispatch(setDifficulty(difficulty)),
    setCurrentPage: (page) => dispatch(setCurrentPage(page)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Challenges);
