import { connect } from 'react-redux'
import Question from '../components/question'
import {
  generateQuestion,
  answerQuestion
} from '../actions/questions'

const mapStateToProps = state => {
  return {
    question: state.getIn(['questions', 'current'])
  };
}

const mapDispatchToProps = dispatch => {
  return {
    generateQuestion: () => dispatch(generateQuestion()),
    answerQuestion: (question, answer) => dispatch(answerQuestion(question, answer)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
