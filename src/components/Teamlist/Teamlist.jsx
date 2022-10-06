import React, {useContext} from 'react';
import { TeamsContext } from '../../context/teamsContext';
import PointsButtons from '../PointsButtons/PointsButtons';
import './Teamlist.css';

const TeamList = ({showButtons}) => {
const {teams, error} = useContext(TeamsContext); 
  return (
    <div className="teams-listing">
      {error 
        ? (<><p>An error has occurred please try again later</p></>)
        : (<TeamListing 
            teams={teams} 
            showButtons={showButtons}
          />)
      }
    </div>
  );
}

const TeamListing = ({teams, showButtons}) => {
  if (Object.keys(teams).length === 0) return; 

  const teamList = teams.Items.map((team) => {
    const keyValue = showButtons ? `team-list-${team.ID}` : `team-points-list-${team.ID}`;

    return (
      <li key={keyValue}>
        <div className="team-shield"><img src={`/images/${team.logo}`} alt="team shields"/></div>
        <div className="team-name">{team.name}</div>
        <PointsButtons showButtons={showButtons} teamId={team.ID}/>
      </li>
    )
  });

  return (
    <ol className="full-team-list">
      {teamList}
    </ol>
  );
}

export default TeamList;
