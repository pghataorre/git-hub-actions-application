import React, { useContext, useRef, useState } from 'react';
import { TeamsContext } from '../../context/teamsContext';
import TeamManagerList from '../TeamManagerList/TeamManagerList';
import getTeamManagers from './getMangersApi';

const TeamsList = ({teams}) => {
  const [managerData, setManagerData] = useState({});
  const managerTeam = useRef();

  const handleSelect = (event) => {
    event.preventDefault();
    const teamId = managerTeam.current.value;

    if(teamId !== '-1') {
      (async () => {
        const result = await getTeamManagers(teamId);
        setManagerData(result);
      })();
    }
  }

  const TeamOptions = (data) => {
    return data.map((teamItem) => {
      return (<option value={teamItem.ID} key={`team-option-${teamItem.ID}`}>{ teamItem.name }</option>)
    });
  }

  return (
    <div className="manager-listing-page">
      <label htmlFor="team-list">Please select a team for this manager</label>
      <select name="team-list" ref={managerTeam} onChange={(event) => handleSelect(event)}>
        <option value="-1">Please select a Team</option>
        { TeamOptions(teams) }
      </select>
      <div>
        {setManagerData.length > 0 ? (<TeamManagerList managerData={managerData}/>) : (<></>)}
      </div>
    </div>
  )
}

const ManagerListing = () => {
  const {dataReady, teams} = useContext(TeamsContext);

  return dataReady ? (<TeamsList teams={teams.Items} />) : (<><p>Loading ...</p></>)
}

export default ManagerListing;
