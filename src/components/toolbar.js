import React from 'react';
import { Link } from 'react-router';
import titleWhiteImage from '../assets/title_white.svg';
import {
  PRACTICE_MENU,
  CHALLENGE_MENU,
  PRACTICE_QUESTION,
  CHALLENGE_QUESTION,
} from '../constants/pages';
import Trophy from 'react-icons/lib/fa/trophy';

export default function Toolbar(props) {
  let questionMenuItems;

  switch(props.currentPage) {
    case CHALLENGE_MENU:
    case PRACTICE_MENU:
      questionMenuItems = (
        <div>
          <Link to="/app/menu">back to main menu</Link>
        </div>
      );
      break;

    case PRACTICE_QUESTION:
      questionMenuItems = (
        <div>
          <Link to="/app/practice">back to practice menu</Link>
        </div>
      );
      break;

    case CHALLENGE_QUESTION:
      questionMenuItems = (
        <div>
          <Link to="/app/challenge">back to challenge menu</Link>
        </div>
      );
      break;

    default:
      questionMenuItems = undefined;
  }

  return (
    <div className="main-toolbar">
      <img className="main-toolbar-title" src={titleWhiteImage} alt="" />
      <div className="main-toolbar-spacer"></div>
      {questionMenuItems}
      <Trophy size={40} className="testme" />
      <button className="main-toolbar-logout-button" onClick={props.logout}>Log out</button>
    </div>
  );
}
