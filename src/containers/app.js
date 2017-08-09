import { connect } from 'react-redux'
import App from '../components/app'
import { logout } from '../actions/auth'

const mapStateToProps = state => {
  return {

  };
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
