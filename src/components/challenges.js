import React from 'react';
import DifficultyPicker from '../containers/difficulty-picker';
import { CHALLENGE_MENU } from '../constants/pages';

export default class Challenges extends React.PureComponent {
  componentDidMount() {
    this.props.setCurrentPage(CHALLENGE_MENU);
  }

  render() {

    const challenges = this.props.challenges.toList().map(challenge => {
      return (
        <div
          key={challenge.get('id')}
          className="challenges-item"
          onClick={() =>this.props.initChallenge(challenge.get('id'))}
        >
          <span>{challenge.get('name')}</span>
        </div>
      );
    });


    return (
      <div>
       <h2>Challenges</h2>
       <DifficultyPicker />
       <div className="challenges-wrapper">
          <div className="challenges-inner">
            {challenges}
          </div>
        </div>
      </div>
    );
  }
}
