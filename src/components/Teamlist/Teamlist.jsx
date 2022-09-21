import React, {useEffect, useState} from 'react';
import getTeams from '../../api/getTeams';

const TeamList = () => {
  const [error, setError] = useState(false);
  const [teams ,setTeams] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const teamRes = await getTeams();
        debugger;
        setTeams(teamRes);

      } catch(e) {
        setError(true);
      }

    })();

    console.log('error ------ ', error);

  },[teams]);



  return (
    <div className="teams-listing">
      <ul>
        
      </ul>
    </div>
  );
}

export default TeamList;
