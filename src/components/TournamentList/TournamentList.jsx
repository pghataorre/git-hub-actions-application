import React, { useContext } from 'react';
import { TeamsContext } from '../../context/teamsContext';
import './TournamentList.css';

const TournamentList = ({showCheckBoxes, handleCheckBox}) => {
  const {tournaments, tournamentDataLoaded } = useContext(TeamsContext);
 
  if(!tournamentDataLoaded) return;
  if(tournaments.Items.length === 0) return;
 
  const Tournaments = () => {
    return tournaments.Items.map((tournamentItem) => {
      const tournamentKey = `tournament-${tournamentItem.ID}`;
      return (
        <li key={tournamentKey}>
            {showCheckBoxes && (
            <input type="checkbox" value={tournamentItem.ID} onChange={(event) => handleCheckBox(event) } />
            )}
          {tournamentItem.tournamentName}
        </li>)
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
