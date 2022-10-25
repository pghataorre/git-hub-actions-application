import React, { useRef, useState } from 'react';
import addTournament from '../../api/addTournament';
import TournamentListing from '../TournamentListing/TournamentListing';
import ApiMessage from '../ApiStateMessages/ApiStateMessages';

const TournamentForm = () => {
  const tournamentName = useRef();
  const [hasPosted, setHasPosted] = useState(false);
  const [hasPostError, setHasPostError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const body = {
        tournamentName: tournamentName.current.value || '-1'
      };

      const res = await addTournament(body);

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
    <div className="tournament-form">
      <ApiMessage showMessage={hasPosted} cssClass='success' message='Manager has been added.'/>
      <ApiMessage showMessage={hasPostError} cssClass='error' message='Sorry there has been an error'/>
      <form onSubmit={(event) => handleSubmit(event) }>
        <label htmlFor="tournament-name">Name of Tournament </label>
          <input ref={tournamentName} type="text" id="tournament-name" placeholder="Tournament name" />
        <label htmlFor="submit-tournament-form">
          <button type="submit" id="submit-tournament-form">Add Tournament</button>
        </label>
      </form>
      <div>
        <TournamentListing />
      </div>
    </div>
  )
}


export default TournamentForm;
