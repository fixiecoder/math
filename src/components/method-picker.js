import React from 'react';
import checkboxCheckedImageSrc from '../assets/checkbox_checked.svg';
import checkboxUncheckedImageSrc from '../assets/checkbox_unchecked.svg';
import { MULTIPLY, PLUS, methodSymbols } from '../constants/methods';

export default function MethodPicker(props) {
  
  return (
    <div className="methods-picker-wrapper">
      <div className="methods-picker-inner">
        <label className="methods-picker-label">
          <span className="methods-picker-label-text">{methodSymbols[MULTIPLY]}</span>
          <img alt="" className="method-picker-label-input" src={props.methods.getIn([MULTIPLY, 'included']) ? checkboxCheckedImageSrc : checkboxUncheckedImageSrc} />
          <input hidden={true} type='checkbox' checked={props.methods.getIn([MULTIPLY, 'included'])} onChange={(e) => props.setMethodIncluded(MULTIPLY, !props.methods.getIn([MULTIPLY, 'included'])) }/>
        </label>
        <label className="methods-picker-label">
          <span className="methods-picker-label-text">{methodSymbols[PLUS]}</span>
          <img alt="" className="method-picker-label-input" src={props.methods.getIn([PLUS, 'included']) ? checkboxCheckedImageSrc : checkboxUncheckedImageSrc} />
          <input hidden={true} type='checkbox' checked={props.methods.getIn([PLUS, 'included'])} onChange={(e) => props.setMethodIncluded(PLUS, !props.methods.getIn([PLUS, 'included'])) }/>
        </label>
      </div>
    </div>
  );
}
