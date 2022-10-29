import React from 'react';

const SelectBox = ({data, defaultOptionValue, name, onSelectChange, optionsObjectPropertyName, className, defaultValue}) => (
  <>
    <select 
      name={name} 
      id={name} 
      onChange={(event) => onSelectChange(event)} 
      className={className !== ''  ? className : '' } 
      defaultValue={defaultValue}>
        {defaultOptionValue && (<option value="-1">{defaultOptionValue}</option>)}
        { data.map((item) => (<option key={`${name}-${item.ID}`} value={item.ID}>{item[optionsObjectPropertyName]}</option>)) }
    </select>
  </>
);

export default SelectBox;
