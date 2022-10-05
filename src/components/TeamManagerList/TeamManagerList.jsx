import React from 'react';
import './TeamManagerList.css';

const TeamManagerList = ({managerData}) => {

  if (Object.keys(managerData).length === 0) return; 
  if (managerData.Items.length === 0) return; 

  const managerList = () => {
    return managerData.Items.map((manager) => {
      return (<li className={manager.isCurrent ? 'currentManager': ''} key={manager.ID}>{manager.managerName}</li>)
    });
  }

  return (
    <>
      <h3>Team Managers</h3>
      <ul className="full-manager-list">
        { managerList() }
      </ul>
    </>
  );
}

export default TeamManagerList;
