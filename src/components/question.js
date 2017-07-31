import React from 'react';
import { TYPE1, TYPE2, TYPE3 } from '../constants/question-types';
import Input from './question-input';

const symbolMap = {
  'MULTIPLY': 'x',
  'PLUS': '+',
  'MINUS': '-',
}

const styles = {
  input: {
    width: 40,
    height: 40,
    fontSize: 20,
    margin: 5,
  },
  symbol: {
    fontSize: 20,
    margin: 5,
  },
  value: {
    fontSize: 20,
    margin: 5,
  }
};

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.answerChange = this.answerChange.bind(this);
    this.state = {
      answer: ''
    };
  }

  componentDidMount() {
    this.props.generateQuestion();
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.question && this.props.question.get('questionRef') !== prevProps.question.get('questionRef')) {
      this.setState({
        answer: ''
      });
    }
  }

  answerChange(value) {
    this.setState({
      answer: value
    });
  }

  render() {
    const val1 = this.props.question.get('questionType') === TYPE2 ?
      <Input value={this.state.answer} onChange={this.answerChange} /> :
      <span style={styles.value} >{this.props.question.get('qValue1')}</span>

    const val2 = this.props.question.get('questionType') === TYPE3 ?
      <Input value={this.state.answer} onChange={this.answerChange} /> :
      <span style={styles.value} >{this.props.question.get('qValue2')}</span>

    const answer = this.props.question.get('questionType') === TYPE1 ?
      <Input value={this.state.answer} onChange={this.answerChange} /> :
      <span style={styles.value} >{this.props.question.get('answer')}</span>

    return (
      <div>
        <form onSubmit={(e) => { e.preventDefault(); }}>
          <div>
            {val1}
            <span style={styles.symbol}>{symbolMap[this.props.question.get('method')]}</span>
            {val2}
            <span style={styles.symbol}>=</span>
            {answer}
          </div>
        </form>
        <p>{this.props.question.get('status')}</p>
        <button type="button" onClick={() => this.props.answerQuestion(this.props.question, this.state.answer)}>Answer</button>
        <button onClick={this.props.generateQuestion}>Next</button>
      </div>
    );
  }
}
