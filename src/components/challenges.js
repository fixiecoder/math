import React from 'react';
import DifficultyPicker from '../containers/difficulty-picker';
import { CHALLENGE_MENU } from '../constants/pages';

export default class Challenges extends React.PureComponent {
  componentDidMount() {
    this.props.setCurrentPage(CHALLENGE_MENU);
  }

  render() {
    return (
      <div>
       <h2>Challenges</h2>
       <DifficultyPicker />
       <div className="challenges-wrapper">
          <div className="challenges-row">
            <div className="challenges-item"><span>Two Times Table</span></div>
            <div className="challenges-item"><span>Three Times Table</span></div>
            <div className="challenges-item"><span>Four Times Table</span></div>
            <div className="challenges-item"><span>Five Times Table</span></div>
          </div>
          <div className="challenges-row">
            <div className="challenges-item"><span>Six Times Table</span></div>
            <div className="challenges-item"><span>Seven Times Table</span></div>
            <div className="challenges-item"><span>Eight Times Table</span></div>
            <div className="challenges-item"><span>Nine Times Table</span></div>
          </div>
          <div className="challenges-row">
            <div className="challenges-item"><span>Ten Times Table</span></div>
            <div className="challenges-item"><span>Odd Table</span></div>
            <div className="challenges-item"><span>Even Table</span></div>
            <div className="challenges-item"><span>All Table</span></div>
          </div>
        </div>
      </div>
    );
  }
}
