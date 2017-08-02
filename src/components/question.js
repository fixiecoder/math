import React from 'react';
import { Link } from 'react-router';
import { TYPE1, TYPE2, TYPE3 } from '../constants/question-types';
import { UNANSWERED } from '../constants/question-status';
import Input from './question-input';
import Stats from '../containers/stats';

const exitStyle = {
  position: 'fixed',
  top: 0,
  right: 0,
}

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
  },

  value: {
    height: '100%',
    display: 'flex',
    fontSize: 30,
    margin: 5,
  }
};

const buttonsWrapper = {
  display: 'flex',
  justifyContent: 'center'
}

const button = {
  borderRadius: 5,
  outline: 'none',
  height: 50,
  width: 100,
  margin: 10,
  backgroundColor: 'white',
}

const answerButtonStyle = Object.assign({}, button, {
  border: '4px solid green',
})

const nextQuestionButtonStyle = Object.assign({}, button, {
  border: '4px solid blue',
})

const wrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around'
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
        <form onSubmit={(e) => {
          e.preventDefault();
          if(this.props.question.get('status') === UNANSWERED) {
            this.props.answerQuestion(this.props.question, this.state.answer);
          } else {
            this.props.generateQuestion();
          }
        }} style={wrapperStyle}>
          <div style={{ display: 'flex', alignItems: 'center' }} >
            {val1}
            <span style={styles.symbol}>{symbolMap[this.props.question.get('method')]}</span>
            {val2}
            <span style={styles.symbol}>=</span>
            {answer}
          </div>
        </form>
        <div style={buttonsWrapper}>
          <button
            style={
              this.props.question.get('status') === UNANSWERED ?
                answerButtonStyle :
                Object.assign({}, answerButtonStyle, {
                  border: '4px solid lightgrey',
                  color: 'lightgrey',
                })
            }
            disabled={this.props.question.get('status') !== UNANSWERED}
            type="button"
            onClick={() => this.props.answerQuestion(this.props.question, this.state.answer)}
          >
            Check my answer
          </button>
          <button
            style={
              this.props.question.get('status') !== UNANSWERED ?
                nextQuestionButtonStyle :
                Object.assign({}, nextQuestionButtonStyle, {
                  border: '4px solid lightgrey',
                  color: 'lightgrey',
                })
            }
            disabled={this.props.question.get('status') === UNANSWERED}
            onClick={this.props.generateQuestion}
          >
            Next Question
          </button>
        </div>
        <Stats />
        <div style={exitStyle}>
          <button><Link to="menu">x</Link></button>
        </div>
      </div>
    );
  }
}
