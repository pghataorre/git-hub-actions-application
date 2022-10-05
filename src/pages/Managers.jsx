import React from 'react';
import ManagerListing from '../components/ManagerListing/ManagerListing';


const Teams = () => {
  return (
    <div className="teams-page">
      <h1>Football Team Managers</h1>
      <p>Please select the team you would like to see the managers for:</p>
      <ManagerListing />
    </div>
  );
}

export default Teams;
