import React, { useRef, useState } from 'react';
import addTournament from '../../api/addTournament';
import ApiMessage from '../ApiStateMessages/ApiStateMessages';


const TournamentForm = () => {
  const tournamentName = useRef();
  const [hasPosted, setHasPosted] = useState(false);
  const [hasPostError, setHasPostError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      tournamentName: tournamentName.current.value || ''
    }

    addTournament(body).then((res) => {
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
  
  return (
    <div className="manager-form">
      <ApiMessage showMessage={hasPosted} cssClass='success' message='Manager has been added.'/>
      <ApiMessage showMessage={hasPostError} cssClass='error' message='Sorry there has been an error'/>
      <form onSubmit={(event) => handleSubmit(event) }>
        <label htmlFor="tournament-name">Name of Tournament </label>
          <input ref={tournamentName} type="text" id="tournament-name" placeholder="Tournament name" />
        <label htmlFor="submit-tournament-form">
          <button type="submit" id="submit-tournament-form">Add Tournament</button>
        </label>
      </form>
    </div>
  )
}


export default TournamentForm;
