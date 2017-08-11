import React from 'react';
import { Link } from 'react-router';
import TablePicker from '../containers/table-picker';
import DifficultyPicker from '../containers/difficulty-picker';
import MethodPicker from '../containers/method-picker';
import { PRACTICE_MENU } from '../constants/pages';

export default class Practices extends React.PureComponent {
  componentDidMount() {
    this.props.setCurrentPage(PRACTICE_MENU);
  }

  render() {
    const disable = !this.props.methods.reduce((res, method) =>
      res || method.get('included'), false
    );

    const disabledClass = disable ? 'disabled' : '';
    return (
      <div>
       <h2>Choose what you want to practice</h2>
       <DifficultyPicker />
        <MethodPicker />
        <TablePicker />
        <div className="menu-play-buttons">
          <Link className={`menu-play-button ${disabledClass}`} to="/app/questions">Go</Link>
        </div>
      </div>
    );
  }
}
