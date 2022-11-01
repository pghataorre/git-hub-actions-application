import React from 'react';
import Images from '../../Images/Images';
import './FixtureTeamDetails.css';

const FixtureDateTime = ({fixtureData}) => {
    const {
      homeTeam: {
        teamName: homeTeamName,
        logo: homeTeamLogo
      },
      awayTeam: {
        teamName: awayTeamName,
        logo: awayTeamLogo
      }
    } = fixtureData;


  
  return (
    <div className="fixture-teams">
      <div className="home-logo team-detail">
        <Images src={`/images/${homeTeamLogo}`} altText={homeTeamName}/>
      </div>
      <div className="team-name team-detail">
        {homeTeamName}
      </div>           
      <div className="versus team-detail">VS</div>
      <div className="team-name team-detail">
        {awayTeamName}
      </div> 
      <div className="away-logo team-detail">
        <Images src={`/images/${awayTeamLogo}`} altText={awayTeamName}/>
      </div>
    </div>
  )
}

export default FixtureDateTime