import { connect } from 'react-redux'
import TablePicker from '../components/table-picker'
import {
  setTableIncluded,
} from '../actions/questions'

const mapStateToProps = state => {
  return {
    tables: state.getIn(['questions', 'timesTables']),
    methods: state.getIn(['questions', 'methods'])
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setTableIncluded: (table, include) => dispatch(setTableIncluded(table, include))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TablePicker);
