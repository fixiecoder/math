import { connect } from 'react-redux'
import Login from '../components/login'
import { attemptLogin } from '../actions/auth'

const mapStateToProps = state => {
  return {

  };
}

const mapDispatchToProps = dispatch => {
  return {
    attemptLogin: (username, password) => dispatch(attemptLogin(username, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
