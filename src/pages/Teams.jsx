import React from 'react';
import TeamList from '../components/Teamlist/Teamlist';


const Teams = () => {
  return (
    <div className="routes-page">
      <h1>Football Team from an api call</h1>
      <p>A test page that calls a list of teams from a LAMBDA function</p>
      <TeamList showButtons={false}/>
    </div>
  );
}

export default Teams;
