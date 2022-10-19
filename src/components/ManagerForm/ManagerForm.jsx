import React, { useContext, useRef, useState } from 'react';
import { TeamsContext } from '../../context/teamsContext';
import addManager from '../../api/addManager';
import ApiMessage from '../ApiStateMessages/ApiStateMessages';


const ManagerForm = ({teams}) => {
  const managerName = useRef();
  const managerTeam = useRef();
  const [isCurrentManagerSelected, setIsCurrentManagerSelected] = useState(false);
  const [hasPosted, setHasPosted] = useState(false);
  const [hasPostError, setHasPostError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      teamId: managerTeam.current.value || '',
      managerName: managerName.current.value || '',
      isCurrentManger: isCurrentManagerSelected
    }

    addManager(body).then((res) => {
      if (res.ok) {
        setHasPosted(true);
        setHasPostError(false);
        return;
      }

      setHasPosted(false);
      setHasPostError(true);
    })
    .catch((error) => {
      console.log(error);
      setHasPostError(true);
      setHasPosted(false);
    });
  }

  const handleCheckBoxChange = (event) => {
    setIsCurrentManagerSelected(event.currentTarget.checked ? true : false);
  }

  const options = () => {
    return teams.Items.map((teamItem) => {
      return (<option value={teamItem.ID} key={`team-option-${teamItem.ID}`}>{ teamItem.teamName }</option>)
    });
  }

  return (
    <div className="manager-form">
      <ApiMessage showMessage={hasPosted} cssClass='success' message='Manager has been added.'/>
      <ApiMessage showMessage={hasPostError} cssClass='error' message='Sorry there has been an error'/>
      <form onSubmit={(event) => handleSubmit(event) }>
        <label htmlFor="manager-name">Name of the football manager </label>
          <input ref={managerName} type="text" id="manager-name" placeholder="Manager name" />
        
        <label htmlFor="team-list">Please select a team for this manager</label>
        <select name="team-list" ref={managerTeam}>
          <option value="-1">Select a Team</option>
          { options() }
        </select>

        <label htmlFor="current-manager-yes">
          <input type="checkbox" id="current-manager-yes" onChange={(event) => handleCheckBoxChange(event)} name="current-manager-yes"/>
          <span className="radio-text">Yes - this is the current manager</span> 
        </label>

        <button type="submit" id="submit-manager-form">Add Manager</button>
      </form>
    </div>
  )
}

const AddManagerForm = () => {
  const {teams, dataLoaded} = useContext(TeamsContext);
  return dataLoaded ? (<ManagerForm teams={teams}/>) : (<><p>Loading ...</p></>)
}

export default AddManagerForm;
