import React from 'react';
import FixturesForm from '../components/FixturesForm/FixturesForm';

const EditSingleFixture = () => {
const fixtureId = window.location.hash.split('/')[2];
  return (
    <div className="admin-page">
      <h1>Admin:: Edit a Football fixture</h1>
      <p>Please edit any of the features below</p>
      <FixturesForm editMode={true} fixtureId={fixtureId}/>
    </div>
  );
}

export default EditSingleFixture;
