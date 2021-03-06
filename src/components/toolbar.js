import React from 'react';
import { Link } from 'react-router';
import Trophy from 'react-icons/lib/fa/trophy';
import BackIcon from 'react-icons/lib/fa/arrow-circle-left';
import CloseIcon from 'react-icons/lib/fa/close';
import titleWhiteImage from '../assets/title_white.svg';
import {
  PRACTICE_MENU,
  CHALLENGE_MENU,
  PRACTICE_QUESTION,
  CHALLENGE_QUESTION,
  COMPLETED_CHALLENGE,
} from '../constants/pages';

export default function Toolbar(props) {
  let questionMenuItems;

  switch(props.currentPage) {
    case CHALLENGE_MENU:
    case PRACTICE_MENU:
      questionMenuItems = (
        <div>
          <Link to="/app/menu"><BackIcon size={50} fill={'green'} /></Link>
        </div>
      );
      break;

    case PRACTICE_QUESTION:
      questionMenuItems = (
        <div>
          <Link to="/app/practice"><BackIcon size={50} fill={'green'} /></Link>
        </div>
      );
      break;

    case COMPLETED_CHALLENGE:
    case CHALLENGE_QUESTION:
      questionMenuItems = (
        <div>
          <Link to="/app/challenge"><BackIcon size={50} fill={'green'} /></Link>
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
      <button className="main-toolbar-logout-button" onClick={props.logout}>
        <CloseIcon size={50} fill={'red'} />
      </button>
    </div>
  );
}
