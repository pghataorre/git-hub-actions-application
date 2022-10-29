import React from 'react';
import FixturesForm from '../components/FixturesForm/FixturesForm';

const AddManager = () => {
  return (
    <div className="admin-page">
      <h1>Admin:: Add a Football fixture</h1>
      <p>Please fill in the details below to add a fixture</p>
      <FixturesForm editMode={false}/>
    </div>
  );
}

export default AddManager;
