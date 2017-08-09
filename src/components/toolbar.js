import React from 'react';
import { Link } from 'react-router';
import titleWhiteImage from '../assets/title_white.svg';
import { QUESTION } from '../constants/pages';

export default function Toolbar(props) {
  const questionMenuItems = props.currentPage === QUESTION ?
    (
      <div>
        <Link to="/app/menu">back to menu screen</Link>
      </div>
    ) : null;

  return (
    <div className="main-toolbar">
      <img className="main-toolbar-title" src={titleWhiteImage} alt="" />
      <div className="main-toolbar-spacer"></div>
      {questionMenuItems}
      <button className="main-toolbar-logout-button" onClick={props.logout}>Log out</button>
    </div>
  );
}
