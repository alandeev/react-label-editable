import React, { useState } from 'react';

import PropTypes from 'prop-types';

import './LabelEditable.css';

import { FaEdit } from 'react-icons/fa';

const propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  startWithInput: PropTypes.bool
}

function LabelEditable({ value, onChange, startWithInput=false }){
  const [ editable, setEditable ] = useState(startWithInput);
  const [ currentValue, setCurrentValue ] = useState(value);

  function handleEnterPressInput(event){
    if(event.code === "Enter"){
      onChange(currentValue);
      setEditable(false);
    }
    return;
  }

  return (
    <div className="_LabelEditable LabelEditable">
      { 
        editable ?
        <input className="_input-editable input-editable" autoFocus type="text" onKeyPressCapture={handleEnterPressInput} value={currentValue} onChange={(event) => setCurrentValue(event.target.value)}></input> :
        <label className="_label-editable label-editable">{value}</label>
      }
      <FaEdit className="_edit-button edit-button" onClick={() => setEditable(true)}/>
    </div>
  )
}

LabelEditable.propTypes = propTypes;

export default LabelEditable;