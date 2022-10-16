import React, { useContext } from 'react';
import { TeamsContext } from '../../context/teamsContext';
import PointsButtons from '../PointsButtons/PointsButtons';
import './Teamlist.css';

const TeamList = ({showButtons}) => {
  const {teams, error, dataLoaded } = useContext(TeamsContext);

  return (
    <div className="teams-listing">
      {error 
        ? (<><p>An error has occurred please try again later</p></>)
        : (<TeamListing 
            teams={teams} 
            showButtons={showButtons}
            dataLoaded={dataLoaded}
          />)
      }
    </div>
  );
}

const TeamListing = ({teams, showButtons, dataLoaded})  => {
  if (!dataLoaded) return (<p>.... Loading</p>);
  const teamList = teams.Items.map((team) => {
    const keyValue = showButtons ? `team-list-${team.ID}` : `team-points-list-${team.ID}`;

    return (
        <li key={keyValue} className='teams-row'>
          <div className="team-shield"><img src={`/images/${team.logo}`} alt="team shields"/></div>
          <div className="team-name">{team.name}</div>
          {!showButtons ? (<div className="team-points">{team.results[0].points}</div>) : (<></>)}
         
          <PointsButtons 
            showButtons={showButtons} 
            teamId={team.ID}
            />
        </li>
      )
    });

  return (
    <ol className="full-team-list">
      <li><div>Teams</div><div>Points</div></li>
      {teamList}
    </ol>
  );
}

export default TeamList;
