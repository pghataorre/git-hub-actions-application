import React, { useContext, useRef, useState } from 'react';
import { TeamsContext } from '../../context/teamsContext';
import addManager from '../../api/addManager';;


const ManagerForm = ({teams}) => {
  const managerName = useRef();
  const managerTeam = useRef();
  const [isCurrentManagerSelected, setIsCurrentManagerSelected] = useState(false);
  const [hasPosted, setHasPosted] = useState(false);

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
      }
    })
    .catch((error) => {
      console.log('error ===== ', error);
    });
  }

  const handleCheckBoxChange = (event) => {
        event.preventDefault();
        setIsCurrentManagerSelected(event.currentTarget.checked ? true : false);
  }

  const options = () => {
    return teams.Items.map((teamItem) => {
      return (<option value={teamItem.ID} key={`team-option-${teamItem.ID}`}>{ teamItem.name }</option>)
    });
  }

  return (
    <div className="manager-form">
      { hasPosted ? (<h3 className="success">Manager has been added.</h3>) : (<></>) }
      <form onSubmit={(event) => handleSubmit(event) }>
        <label htmlFor="manager-name">Name of the football manager </label>
          <input ref={managerName} type="text" id="manager-name" placeholder="Manager name" />
        
        <label htmlFor="team-list">Please select a team for this manager</label>
        <select name="team-list" ref={managerTeam}>
          <option value="-1"></option>
          { options() }
        </select>

        <label htmlFor="current-manager-yes">
          <input type="checkbox" id="current-manager-yes" onChange={(event) => handleCheckBoxChange(event)} name="current-manager-yes"/>
          <span className="radio-text">Yes - this is the current manager</span> 
        </label>

        <label htmlFor="submit-manager-form"></label>
        <button type="submit" id="submit-manager-form">Add Manager</button>
      </form>
    </div>
  )
}

const AddManagerForm = () => {
  const {teams, dataReady} = useContext(TeamsContext);
  return dataReady ? (<ManagerForm teams={teams}/>) : (<><p>Loading ...</p></>)
}

export default AddManagerForm;
