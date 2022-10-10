import React, {useEffect, useState} from 'react';
import getTournamentsApi from './getTournamentApi';
import './TournamentList.css';

const TournamentList = () => {
  const [tournaments, setTournaments] = useState({});

  useEffect(() => {
    const getData = async () => {
      const res = await getTournamentsApi();

      if (!res) {
        setTournaments({})
      } else {
        setTournaments(res);
      }
    }

    getData();

  }, [tournaments.Items]);

 
  if(Object.keys(tournaments).length === 0) return;
  if(tournaments.Items.length === 0) return;
 
  const Tournaments = (tournaments) => {
    return tournaments.Items.map((tournament) => {
      return (<li key={`tournament-${tournament.ID}`}>{tournament.tournamentName}</li>)
    });
  }

  return (
    <>
      <h3>Tournaments</h3>
      <ul className="full-tournament-list">
        { Tournaments(tournaments) }
      </ul>
    </>
  );
}

export default TournamentList;
