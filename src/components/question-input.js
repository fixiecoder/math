import React from 'react';

export default function QuestionInput(props) {
  const inputStyle = {
    width: 40,
    height: 40,
    fontSize: 20,
    margin: 5,
    borderRadius: 5,
  };

  const style = Object.assign({}, inputStyle, {
    border: '2px solid blue'
  });

  return (
    <input
      type="number"
      style={style}
      value={props.value}
      onChange={e => props.onChange(e.target.value)}
    />
  );
}