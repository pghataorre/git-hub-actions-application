import React, { useContext } from 'react';
import { TeamsContext } from '../../context/teamsContext';
import PointsButtons from '../PointsButtons/PointsButtons';
import './Teamlist.css';

const TeamList = ({showButtons}) => {
  const {teams, error, dataLoaded } = useContext(TeamsContext);

  if(!teams) return (<></>)
 
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
        <tr key={keyValue} className='teams-row'>
          <td className="team-shield"><img src={`/images/${team.logo}`} alt="team shields"/></td>
          <td className="team-name">
            <div>{team.teamName}</div> 
            { showButtons && (<PointsButtons 
              showButtons={showButtons} 
              teamId={team.ID}
            />)}
          </td>
          <td className="played">{team.results[0].played}</td>
          <td className="points">{team.results[0].points}</td>
        </tr>
      )
    });

  return (
    <table className="full-team-list">
      <thead className='teams-row'>
        <tr>
          <td className="team-shield">Teams</td>
          <td></td>
          <td className="played">Pld</td>
          <td className="points">Pts</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {teamList}
      </tbody>
    </table>
  );
}

export default TeamList;
