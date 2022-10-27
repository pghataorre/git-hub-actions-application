import React, { useContext, useState, useEffect } from 'react';
import getFixturesApi from './getFixturesApi';
import { TeamsContext } from '../../context/teamsContext';
import filterFixturesToTeams from './filterFixturesToTeams';
import Images from '../Images/Images';
import config from '../../config/config';
import './FixturesByTournament.css';

const FixturesByTournament = () => {
  const {teams, dataLoaded} = useContext(TeamsContext);
  const [filteredFixtures, setFilteredFixtures] = useState({});
  const [fixturesDataLoaded, setFixturesDataLoaded] = useState(false);

  useEffect(() => {
    let fixtures = {};
    (async () => {
      if(!dataLoaded) return;
      fixtures = await getFixturesApi();
      if (Object.keys(fixtures).length > 0) {
        setFixturesDataLoaded(true);
        fixtures.Items = filterFixturesToTeams(fixtures, teams);
        setFilteredFixtures(fixtures);
      }

    })();
  },[teams]);

  return (
    <div className="fixtures-list-container">
      <p>See fixtures below</p>
      <ul className="fixtures-list">
        { fixturesDataLoaded && dataLoaded
        ?  (<Fixtures 
            fixturesData={filteredFixtures} 
            fixturesDataLoaded={fixturesDataLoaded}
          />) 
        : (<li>Loading</li>)}
      </ul>
    </div>
  );
}

const Fixtures = ({fixturesData}) => {
  if (!fixturesData.Items) return (<li>NO FIXTURES TODAY</li>)
  return fixturesData.Items.map((item) => {
    const {
      fixtureID,
      fixtureTimeDate,
      homeTeam: {
        teamName: homeTeamName,
        logo: homeTeamLogo
      },
      awayTeam: {
        teamName: awayTeamName,
        logo: awayTeamLogo
      },
      homeTeamScore,
      awayTeamScore,
      gameInPlay,
      showScores
    } = item;

    const fixtureDateTimeObject = new Date(fixtureTimeDate)
    const formattedFixtureDate = fixtureDateTimeObject.toLocaleDateString(config.dateLocaleString);
    const fixtureTime = fixtureDateTimeObject.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    return (
      <li key={fixtureID}>
        <div className="fixture-date">
          {`${formattedFixtureDate} - ${fixtureTime}`}
        </div>
        <div className="fixture-teams">
          <span className="home-logo">
            <Images src={`/images/${homeTeamLogo}`} altText={homeTeamName}/>
          </span>
          <span className="team-name">
            {homeTeamName}
          </span>           
          <span className="versus">VS</span>
          <span className="team-name">
            {awayTeamName}
          </span> 
          <span className="away-logo">
            <Images src={`/images/${awayTeamLogo}`} altText={awayTeamName}/>
          </span>
        </div>
        {showScores && (
        <div className="fixture-status">
          <span className="scores">{homeTeamScore} - {awayTeamScore}</span>
        </div>)}
        {gameInPlay && (<div className="game-status">Game in Progress</div>)}
      </li> 
    )
  })
}

export default FixturesByTournament;
