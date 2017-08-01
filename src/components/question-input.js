import React from 'react';
import * as statusTypes from '../constants/question-status';

export default class QuestionInput extends React.Component {
  componentDidMount() {
    this.answerInput.focus();
  }

  render() {
    const inputStyle = {
      padding: 5,
      display: 'flex',
      alignItems: 'center',
      minWidth: 50,
      height: 40,
      fontSize: 30,
      margin: 5,
      borderRadius: 5,
      border: '4px solid blue',
      justifyContent: 'center',
      cursor: 'text'
    };

    if(this.props.question.get('status') === statusTypes.CORRECT) {
      inputStyle.border = '4px solid green';
    } else if(this.props.question.get('status') === statusTypes.INCORRECT) {
      inputStyle.border = '4px solid red';
    }

    return (
      <label style={{ height: '100%', display: 'inline-block' }}>
        <span style={inputStyle}>{this.props.value}</span>
        <input
          ref={(input) => { this.answerInput = input; }}
          type="number"
          style={{ width: 0, color: 'white', outline: 'none', border: 'none', height: 0, position: 'absolute' }}
          value={this.props.value}
          onChange={e => this.props.onChange(e.target.value)}
        />
      </label>
    );
  }
}