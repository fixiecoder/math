import React from 'react';
import { TYPE1, TYPE2, TYPE3 } from '../constants/question-types';
import Input from './question-input';
import TablePicker from '../containers/table-picker';
import DifficultyPicker from '../containers/difficulty-picker';

const symbolMap = {
  'MULTIPLY': 'x',
  'PLUS': '+',
  'MINUS': '-',
};

const styles = {
  symbol: {
    height: '100%',
    fontSize: 30,
    margin: 5,
    display: 'flex',
    // alignItems: 'center',
  },
  value: {
    height: '100%',
    display: 'flex',
    fontSize: 30,
    margin: 5,
    // alignItems: 'center',
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

    const wrapperStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    };

    const val1 = this.props.question.get('questionType') === TYPE2 ?
      <Input value={this.state.answer} onChange={this.answerChange} question={this.props.question} /> :
      <span style={styles.value} >{this.props.question.get('qValue1')}</span>

    const val2 = this.props.question.get('questionType') === TYPE3 ?
      <Input value={this.state.answer} onChange={this.answerChange} question={this.props.question} /> :
      <span style={styles.value} >{this.props.question.get('qValue2')}</span>

    const answer = this.props.question.get('questionType') === TYPE1 ?
      <Input value={this.state.answer} onChange={this.answerChange} question={this.props.question} /> :
      <span style={styles.value} >{this.props.question.get('answer')}</span>

    return (
      <div>
        <DifficultyPicker />
        <TablePicker />
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.answerQuestion(this.props.question, this.state.answer);
        }} style={wrapperStyle}>
          <div style={{ display: 'flex', alignItems: 'center' }} >
            {val1}
            <span style={styles.symbol}>{symbolMap[this.props.question.get('method')]}</span>
            {val2}
            <span style={styles.symbol}>=</span>
            {answer}
          </div>
        </form>
        <button type="button" onClick={() => this.props.answerQuestion(this.props.question, this.state.answer)}>Answer</button>
        <button onClick={this.props.generateQuestion}>Next</button>
      </div>
    );
  }
}
