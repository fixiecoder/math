import React from 'react';
import { Link } from 'react-router';
import { MENU } from '../constants/pages';

export default class Menu extends React.PureComponent {
  componentDidMount() {
    this.props.setCurrentPage(MENU);
  }

  render() {
    const disable = !this.props.methods.reduce((res, method) =>
      res || method.get('included'), false
    );

    const disabledClass = disable ? 'disabled' : '';

    return (
      <div>
        <div className="menu-play-buttons">
          <Link className={`menu-play-button ${disabledClass}`} to="/app/practice">Practice</Link>
          <Link className={`menu-play-button ${disabledClass}`} to="/app/challenge">Challenge</Link>
        </div>
      </div>
    );
  }
}
