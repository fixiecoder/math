import React from 'react';
import { Map, List, Range } from 'immutable';
import { Link } from 'react-router';
import TablePicker from '../containers/table-picker';
import DifficultyPicker from '../containers/difficulty-picker';
import MethodPicker from '../containers/method-picker';
import { PRACTICE_MENU } from '../constants/pages';
import { tableList } from '../constants/tables';
import { MULTIPLY, PLUS } from '../constants/methods';

export default class Practices extends React.PureComponent {
  constructor(props) {
    super(props);
    this.setTable = this.setTable.bind(this);
    this.state = {
      methods: Map({
        MULTIPLY: Map({ included: false, method: MULTIPLY }),
        PLUS: Map({ included: false, method: PLUS }),
      }),
      tables: Map({
        one: Map({ included: false, value: 1, key: 'one' }),
        two: Map({ included: false, value: 2, key: 'two' }),
        three: Map({ included: false, value: 3, key: 'three' }),
        four: Map({ included: false, value: 4, key: 'four' }),
        five: Map({ included: false, value: 5, key: 'five' }),
        six: Map({ included: false, value: 6, key: 'six' }),
        seven: Map({ included: false, value: 7, key: 'seven' }),
        eight: Map({ included: false, value: 8, key: 'eight' }),
        nine: Map({ included: false, value: 9, key: 'nine' }),
        ten: Map({ included: false, value: 10, key: 'ten' }),
      })
    };
  }

  startPractice() {
    this.props.initPractice('EASY', this.state.methods, this.state.tables);
  }

  componentDidMount() {
    this.props.setCurrentPage(PRACTICE_MENU);
  }

  setTable(key, included) {
    const tables = this.state.tables.setIn([key, 'included'], included);
    this.setState({ tables: tables });
  }

  render() {
    console.log(this.state.tables.toJS())
    const disable = !this.props.methods.reduce((res, method) =>
      res || method.get('included'), false
    );

    const disabledClass = disable ? 'disabled' : '';
    return (
      <div>
       <h2>Choose what you want to practice</h2>
       <DifficultyPicker />
        <MethodPicker methods={this.state.methods} />
        <TablePicker tables={this.state.tables} setTable={this.setTable} />
        <div className="menu-play-buttons">
          <button onClick={this.startPractice} className={`menu-play-button ${disabledClass}`} to="/app/questions">Go</button>
        </div>
      </div>
    );
  }
}
