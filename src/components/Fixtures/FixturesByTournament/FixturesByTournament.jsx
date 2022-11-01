import React, { useContext, useState, useEffect } from 'react';
import { TeamsContext } from '../../../context/teamsContext';
import { FixturesContext } from '../../../context/FixturesContext';
import filterFixturesToTeams from './filterFixturesToTeams';
import FutureTeamDetails from '../FixtureTeamDetails/FixtureTeamDetails';
import FixtureDateTime from '../FixtureDateTime/FixtureDateTime';
import EditFixtureMode from '../EditFixturesMode/EditFixtureMode';
import FixtureScores from '../FixtureScores/FixtureScores';
import './FixturesByTournament.css';

const FixturesByTournament = ({editMode}) => {
  const {teams, dataLoaded} = useContext(TeamsContext);
  const {fixtures, fixturesLoading, tournamentId} = useContext(FixturesContext);
  const [filteredFixtures, setFilteredFixtures] = useState({});
  const [fixturesDataLoaded, setFixturesDataLoaded] = useState(false);

  useEffect(() => {
    if(!fixturesLoading) return;
    if (Object.keys(fixtures).length > 0) {
      setFixturesDataLoaded(true);
      fixtures.Items = filterFixturesToTeams(fixtures, teams);
      setFilteredFixtures(fixtures);
    }
  },[teams]);

  return (
    <div className="fixtures-list-container">
      <p>See fixtures below</p>
      <ul className="fixtures-list">
        { fixturesDataLoaded && dataLoaded
        ?  (<Fixtures 
            fixturesData={filteredFixtures} 
            fixturesDataLoaded={fixturesDataLoaded}
            editMode={editMode}
            tournamentId={tournamentId}
          />) 
        : (<li>Loading</li>)}
      </ul>
    </div>
  );
}

const Fixtures = ({fixturesData, editMode, tournamentId}) => {  
  if (!fixturesData.Items) return (<li>NO FIXTURES TODAY</li>)
  return fixturesData.Items.map((item) => {
    const {
      fixtureID,
      fixtureTimeDate,
      gameInPlay,
    } = item;

    return (
      <li key={`fixture-item-${fixtureID}`}>
        <FixtureDateTime fixtureTimeDate={fixtureTimeDate}/>
        <FutureTeamDetails fixtureData={item}/>
        <FixtureScores fixtureData={item} showScores={item} />
        {gameInPlay && (<div className="game-status">Game in Progress</div>)}
        { editMode && (
          <EditFixtureMode fixturesData={fixturesData} tournamentId={tournamentId} />
        )}
      </li> 
    )
  })
}

export default FixturesByTournament;
