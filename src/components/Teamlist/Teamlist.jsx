import React, {useEffect, useState} from 'react';
import getTeams from '../../api/getTeams';
import './Teamlist.css';

const TeamList = () => {
  const [error, setError] = useState(false);
  const [teams ,setTeams] = useState({});

  useEffect(() => {
    getTeams()
      .then((res) => {
        return res.json();
      }).then((data) => {
        if (!data) {
          console.log('no data');
          setError(true);
          return [];
        } 
          setTeams(data);
      })
      .catch((error) => {
        setError(true);
        console.error('error ===== ', error);
      })
  },[]);

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
      <span><img src={`/images/${team.logo}`} alt="team shields"/></span>
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
