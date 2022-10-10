import React from 'react';
import TournamentForm from '../components/TournamentForm/TournamentForm';

const AddManager = () => {
  return (
    <div className="admin-page">
      <h1>Admin:: Add a Tournament</h1>
      <p>Please fill in the details below to add a tournament</p>
      <TournamentForm />
    </div>
  );
}

export default AddManager;
