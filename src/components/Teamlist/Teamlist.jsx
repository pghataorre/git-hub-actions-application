import React, {useContext} from 'react';
import { TeamsContext } from '../../context/teamsContext';
import './Teamlist.css';

const TeamList = () => {
const {teams, error} = useContext(TeamsContext); 

  return (
    <div className="teams-listing">
      {error 
        ? (<><p>An error has occurred please try again later</p></>)
        : (<TeamListing teams={teams} />)
      }
    </div>
  );
}

const TeamListing = ({teams}) => {
  if (Object.keys(teams).length === 0) return; 

  const teamList = teams.Items.map((team) =>{
    return (<li>
      <span className="team-shield"><img src={`/images/${team.logo}`} alt="team shields"/></span>
      {team.name}
    </li>)
  });

  return (
    <ol className="full-team-list">
      {teamList}
    </ol>
  );
}

export default TeamList;
