import React from 'react';
import { Link } from 'react-router';
import TablePicker from '../containers/table-picker';
import DifficultyPicker from '../containers/difficulty-picker';

export default function Menu(props) {
  return (
    <div>
      <DifficultyPicker />
      <TablePicker />
      <Link to="/practice">Practice</Link>
    </div>
  );
}
