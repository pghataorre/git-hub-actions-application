import React from 'react';
import './FixtureScores.css';
const FixtureScores = ({fixtureData, showScores}) => {
    const {
      homeTeamScore,
      awayTeamScore,
    } = fixtureData;

  return (
    <>
      {showScores 
        ? (
        <div className="fixture-scores-container">
          <div className="fixture-scores"><div className="team-score">{homeTeamScore}</div> - <div className="team-score">{awayTeamScore}</div></div>
        </div>) 
        : (<></>)
      }
    </>
  )
}

export default FixtureScores