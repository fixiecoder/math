import { connect } from 'react-redux'
import Practices from '../components/practices';
import {
  setDifficulty,
} from '../actions/questions'
import { setCurrentPage } from '../actions/app';

const mapStateToProps = state => {
  return {
    difficulty: state.getIn(['questions', 'difficulty']),
    methods: state.getIn(['questions', 'methods'])
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setDifficulty: (difficulty) => dispatch(setDifficulty(difficulty)),
    setCurrentPage: (page) => dispatch(setCurrentPage(page)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Practices);
