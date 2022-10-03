import React from 'react';

const ApiStateMessages = ({showMessage,cssClass = 'success', message}) => {
  const stateMessage = showMessage ? (<h3 className={cssClass}>{ message }</h3>) : (<></>)

  return stateMessage;
}

export default ApiStateMessages;