import React, { useRef, useState } from 'react';
import TeamListNoLeague from '../TeamListNoLeague/TeamListNoLeague';
import addTeam from '../../api/addTeam';
import TournamentListing from '../TournamentListing/TournamentListing';
import ApiMessage from '../ApiStateMessages/ApiStateMessages';

const TeamForm = () => {
  const teamName = useRef();
  const teamLogo = useRef();
  const [hasPosted, setHasPosted] = useState(false);
  const [hasPostError, setHasPostError] = useState(false);
  const [tournamentsSelected, setTournamentsSelected] = useState([]);

  const handleCheckBox = (event) => {
    let selectedTournament;

    const { value, checked } = event.currentTarget;
    if (!checked) {
        selectedTournament = tournamentsSelected.filter((filterItem) => filterItem !== value);
        setTournamentsSelected(selectedTournament);
        return;
    }

    selectedTournament = [...tournamentsSelected, value];
    setTournamentsSelected(selectedTournament);;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const body = {
        teamName: teamName.current.value || '-1',
        teamLogo: teamLogo.current.value || '-1',
        tournamentId: tournamentsSelected || []
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
        <TournamentListing 
          showCheckBoxes={true}
          handleCheckBox={handleCheckBox}
        />

        <label htmlFor="submit-team-form">
          <button type="submit" id="submit-team-form">Add Team</button>
        </label>
      </form>
      <div>
        <TeamListNoLeague />
      </div>
    </div>
  )
}


export default TeamForm;
