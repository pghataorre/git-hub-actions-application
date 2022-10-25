import React, { useContext } from 'react';
import { TeamsContext } from '../../context/teamsContext';
import './TournamentListing.css';

const TournamentList = ({showCheckBoxes, handleCheckBox, tournaments}) => {  
  
  const Tournaments = (tournaments) => {
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


const TournamentSelectList = ({data, defaultOptionValue, name, id, onSelectChange}) => {
  if(Object.keys(data).length === 0) return (<></>);

  return (
  <>
    <select name={name} id={id} onChange={(event) => onSelectChange(event)}>
      <option value="-1">{defaultOptionValue}</option> 
      { data.Items.map((tournamentItem) => (<option key={`${name}-${tournamentItem.ID}`} value={tournamentItem.ID}>{tournamentItem.tournamentName}</option>)) }
    </select>
  </>
  )
}

const TournamentListing = ({showCheckBoxes, handleCheckBox, name, id, onSelectChange, showAsSelect}) => {
    const {tournaments, tournamentDataLoaded } = useContext(TeamsContext);

    if(!tournamentDataLoaded) return (<></>);
    if(tournaments.Items.length === 0) return (<></>);

    const tournamentListing = showAsSelect 
    ? (<TournamentSelectList
        data={tournaments}
        defaultOptionValue="Select a tournament"
        name={name}
        id={id}
        onSelectChange={onSelectChange}
      />) 
    : (<TournamentList 
        showCheckBoxes={showCheckBoxes}
        handleCheckBox={handleCheckBox}
        tournaments={tournaments}
    />)

  return (<>{tournamentListing}</>)
}

export default TournamentListing;
