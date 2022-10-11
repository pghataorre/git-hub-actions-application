import React, { useContext } from 'react';
import { TeamsContext } from '../../context/teamsContext'
import './TeamListNoLeague.css';

const TeamListNoLeague = () => {
  const {teams, dataLoaded} = useContext(TeamsContext);
 
  if(!dataLoaded) return;
  if(teams.Items.length === 0) return;
 
  const TeamList = (teams) => {
    return teams.Items.map((teamItem) => {
      return (<li key={`teamList-no-league-${teamItem.ID}`}>{teamItem.name}</li>)
    });
  }

  return (
    <>
      <h3>Teams</h3>
      <ul className="full-team-no-league-list">
        { TeamList(teams) }
      </ul>
    </>
  );
}

export default TeamListNoLeague;
