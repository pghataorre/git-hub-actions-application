import React, {useState} from 'react';
import pointApi from './pointsApi';
import './PointsButtons.css';
import config from '../../config/config';

const PointsButtons = ({showButtons, teamId, hightLightChange}) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleClick = async (state, teamId) => {
    disableButton();
    await pointApi(state, teamId);
  }

  const disableButton = () => {
    setIsButtonDisabled(true);

    setTimeout(() => {
      setIsButtonDisabled(false);
    }, config.timingAllocation);
  }

  return (
    <>
    {showButtons ? (
      <div className="score-buttons">
        <button disabled={isButtonDisabled} className={`points-button win ${isButtonDisabled ? 'disabled' : ''}`} onClick={ (event) => handleClick('win', teamId) } alt="WIN">+</button>
        <button disabled={isButtonDisabled} className={`points-button draw ${isButtonDisabled ? 'disabled' : ''}`} onClick={ (event) => handleClick('draw', teamId) } alt="DRAW">/</button>
        <button disabled={isButtonDisabled} className={`points-button loss ${isButtonDisabled ? 'disabled' : ''}`} onClick={ (event) => handleClick('loss', teamId) }alt="LOSS">-</button> 
      </div>
      ) : (<></>)
    }
    </>
  )
}

export default PointsButtons;
