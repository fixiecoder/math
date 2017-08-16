import React from 'react';
import DifficultyPicker from '../containers/difficulty-picker';
import { CHALLENGE_MENU } from '../constants/pages';
import challengeList from '../constants/challenges';

export default class Challenges extends React.PureComponent {
  componentDidMount() {
    this.props.setCurrentPage(CHALLENGE_MENU);
  }

  render() {

    const challenges = challengeList.map(challenge => {
      return (
        <div
          key={challenge.get('challengeId')}
          className="challenges-item"
          onClick={() => this.props.initChallenge(challenge)}
        >
          <span>{challenge.get('name')}</span>
        </div>
      );
    });


    return (
      <div className="challenges-wrapper">
        <h2>Challenges</h2>
        <div className="challenges-inner drop-shaddow">
          {challenges}
        </div>
      </div>
    );
  }
}
