import React, { useContext } from 'react';
import { TeamsContext } from '../../context/teamsContext'
import './TeamListNoLeague.css';

const TeamListNoLeague = ({showSelect, defaultOptionValue, name, id, onSelectChange, defaultValue}) => {
  const {teams, dataLoaded} = useContext(TeamsContext);

  if(!dataLoaded) return;
  if(teams.Items.length === 0) return;
 
  return (
    <>
      { showSelect 
        ? (<TeamSelectList 
            teams={teams} 
            defaultOptionValue={defaultOptionValue} 
            name={name}
            id={id}
            onSelectChange={onSelectChange}
            defaultValue={defaultValue}
          />) 
        : (
        <>
          <h3>Teams</h3>
          <TeamList teams={teams} />
        </>) 
      }
    </>
  );
}

const TeamList = ({teams}) => {
  return (
  <ul className="full-team-no-league-list">
    { teams.Items.map((teamItem) => (<li key={`teamList-no-league-${teamItem.ID}`}>{teamItem.teamName}</li>)) }
  </ul>
  )
}

const TeamSelectList = ({teams, defaultOptionValue, name, id, onSelectChange, defaultValue}) => (
  <>
    <select name={name} id={id} onChange={(event) => onSelectChange(event)} defaultValue={defaultValue}> 
      <option value="-1">{defaultOptionValue}</option>
      { teams.Items.map((teamItem) => (
        <option 
          key={`${name}-${teamItem.ID}`} 
          value={teamItem.ID}>{teamItem.teamName}
        </option>))
      }
    </select>
  </>
)

export default TeamListNoLeague;
