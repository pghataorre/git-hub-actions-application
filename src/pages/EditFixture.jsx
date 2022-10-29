import React from 'react'
import FixturesByTournament from '../components/FixturesByTournament/FixturesByTournament';

const Fixtures = () => {
  return (
    <div className="routes-page">
      <h1>Admin:: Edit a Football fixture</h1>
      <p>Select edit for each fixture</p>
      <FixturesByTournament editMode={true} />
    </div>
  );
}

export default Fixtures;
