import React from 'react';
import pointApi from './pointsApi';
import './PointsButtons.css';


const PointsButtons = ({showButtons, teamId}) => {
  const handleClick = async (state, teamId) => {
    const hasHadded = await pointApi(state, teamId);
    console.log('added', hasHadded);
  }

  return (
    <>
    {showButtons ? (
      <div className="score-buttons">
        <button className="points-button win" onClick={ () => handleClick('win', teamId) } alt="WIN">+</button>
        <button className="points-button draw" onClick={ () => handleClick('draw', teamId) } alt="DRAW">/</button>
        <button className="points-button loss" onClick={ () => handleClick('loss', teamId) }alt="LOSS">-</button> 
      </div>
      ) : (<></>)
    }
    </>
  )
}

export default PointsButtons;
