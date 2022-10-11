import React, { useContext } from 'react';
import { TeamsContext } from '../../context/teamsContext';
import './TournamentList.css';

const TournamentList = () => {
  const {tournaments, tournamentDataLoaded } = useContext(TeamsContext);
 
  if(!tournamentDataLoaded) return;
  if(tournaments.Items.length === 0) return;
 
  const Tournaments = (tournaments) => {
    return tournaments.Items.map((tournament) => {
      return (<li key={`tournament-${tournament.ID}`}>{tournament.tournamentName}</li>)
    });
  }

  return (
    <>
      <h3>Tournaments</h3>
      <ul className="full-tournament-list">
        { Tournaments(tournaments) }
      </ul>
    </>
  );
}

export default TournamentList;
