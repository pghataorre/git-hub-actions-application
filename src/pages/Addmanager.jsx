import React from 'react';
import AddManagerForm from '../components/ManagerForm/ManagerForm';

const AddManager = () => {
  return (
    <div className="admin-page">
      <h1>Admin:: Add a Football team manager</h1>
      <p>Please fill in the details below to add a manager</p>
      <AddManagerForm />
    </div>
  );
}

export default AddManager;
