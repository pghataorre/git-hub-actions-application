import React, {useEffect, useState} from 'react';
import getTeams from '../../api/getTeams';

const TeamList = () => {
  const [error, setError] = useState(false);
  const [teams ,setTeams] = useState({});

  useEffect(() => {
    getTeams()
      .then((res) => {
        if (res.ok) {
          const response = res.json();
          setTeams(response);
        }
      })
      .catch((error) => {
        setError(true);
        console.error('error ===== ', error);
      })

      console.log('TEAMS  ===== ', teams);

  },[]);


  return (
    <div className="teams-listing">
      {error 
        ? (<><p>An error has occurred please try again later</p></>)
        : (<ul><li>list</li></ul>)
      }
    </div>
  );
}

export default TeamList;
