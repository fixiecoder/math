import { connect } from 'react-redux';
import { setCurrentPage } from '../actions/app';
import Question from '../components/question';
import {
  generateQuestion,
  answerQuestion,
} from '../actions/questions';

function mapStateToProps(state) {
  return {
    question: state.getIn(['questions', 'current']),
    gameType: state.getIn(['questions', 'gameType'])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    generateQuestion: () => dispatch(generateQuestion()),
    answerQuestion: (question, answer) => dispatch(answerQuestion(question, answer)),
    setCurrentPage: (page) => dispatch(setCurrentPage(page)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
