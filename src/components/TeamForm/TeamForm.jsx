import React, { useRef, useState, useContext } from 'react';
import { TeamsContext } from '../../context/teamsContext';
import TeamList from '../Teamlist/Teamlist';
import addTeam from '../../api/addTeam';
import ApiMessage from '../ApiStateMessages/ApiStateMessages';

const TeamForm = () => {
  const {tournaments, tournamentDataLoaded } = useContext(TeamsContext);
  const teamName = useRef();
  const teamLogo = useRef();
  const tournamentSelected = useRef();
  const [hasPosted, setHasPosted] = useState(false);
  const [hasPostError, setHasPostError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const body = {
        teamName: teamName.current.value || '-1',
        teamLogo: teamLogo.current.value || '-1',
        tournamentId: tournamentSelected.current.value
      };

      const res = await addTeam(body);

      if (res.ok) {
        setHasPosted(true);
        setHasPostError(false);
        return;
      }

      setHasPosted(false);
      setHasPostError(true);
    } catch(error) {
      console.log(error);
      setHasPostError(true);
      setHasPosted(false);
    }
  }

  const options = () => {
    return tournamentDataLoaded ? tournaments.Items.map((tournamentItem) => {
      return (<option value={tournamentItem.ID} key={`tournament-option-${tournamentItem.ID}`}>{ tournamentItem.tournamentName }</option>)
    }) : (<></>);
  }
  
  return (
    <div className="team-form">
      <ApiMessage showMessage={hasPosted} cssClass='success' message='Team has been added.'/>
      <ApiMessage showMessage={hasPostError} cssClass='error' message='Sorry there has been an error'/>
      <form onSubmit={(event) => handleSubmit(event) }>
        <label htmlFor="team-name">Name of Team</label>
        <input ref={teamName} type="text" id="team-name" placeholder="Team name" />
        <label htmlFor="team-logo">Team logo name</label>
        <input ref={teamLogo} type="text" id="team-name" placeholder="Team logo" />
        <label htmlFor="tournament-list">Please select a Tournament</label>
        <select name="tournament-list" ref={tournamentSelected}>
          <option value="-1">Select a Tourmanet</option>
          { options() }
        </select>

        <label htmlFor="submit-team-form">
          <button type="submit" id="submit-team-form">Add Team</button>
        </label>
      </form>
      <div>
        <TeamList />
      </div>
    </div>
  )
}


export default TeamForm;
