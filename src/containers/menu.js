import { connect } from 'react-redux'
import Menu from '../components/menu'

const mapStateToProps = state => {
  return {
    name: state.getIn(['test', 'name'])
  };
}

const mapDispatchToProps = dispatch => {
  return {
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);