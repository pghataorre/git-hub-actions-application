import React, { useContext, useRef, useState } from 'react';
import { TeamsContext } from '../../context/teamsContext';
import TeamManagerList from '../TeamManagerList/TeamManagerList';
import getManagersApi from './getMangersApi';

const ManagerListing = () => {
  const {dataLoaded, teams} = useContext(TeamsContext);
  return dataLoaded ? (<TeamsList teams={teams}/>) : (<><p>Loading ...</p></>)
}

const TeamsList = ({teams}) => {
  const [managerData, setManagerData] = useState({});
  const managerTeam = useRef();

  const handleSelect = (event) => {
    event.preventDefault();
    const teamId = managerTeam.current.value;

    if(teamId !== '-1') {
      (async () => {
        const result = await getManagersApi(teamId);

        if (Object.keys(result).length > 0) {
          setManagerData(result);
        };
      })();
    }
  }

  const TeamOptions = (data) => {
    return data.map((teamItem) => {
      return (<option value={teamItem.ID} key={`team-option-${teamItem.ID}`}>{ teamItem.teamName }</option>)
    });
  }

  return (
    <div className="manager-listing-page">
      <label htmlFor="team-list">Please select a team for this manager</label>
      <select name="team-list" ref={managerTeam} onChange={(event) => handleSelect(event)}>
        <option value="-1">Please select a Team</option>
        { TeamOptions(teams.Items) }
      </select>
      <div>
        {Object.keys(managerData).length > 0 ? (<TeamManagerList managerData={managerData}/>) : (<p>No Managers Currently</p>)}
      </div>
    </div>
  )
}

export default ManagerListing;
