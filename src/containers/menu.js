import { connect } from 'react-redux'
import Menu from '../components/menu'
import { setCurrentPage } from '../actions/app'

const mapStateToProps = state => {
  return {
    methods: state.getIn(['questions', 'methods'])
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentPage: (page) => dispatch(setCurrentPage(page)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
