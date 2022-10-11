import React from 'react';
import TeamForm from '../components/TeamForm/TeamForm';

const AddTeam = () => {
  return (
    <div className="admin-page">
      <h1>Admin:: Add a Team</h1>
      <p>Please fill in the details below to add a team</p>
      <TeamForm />
    </div>
  );
}

export default AddTeam;
