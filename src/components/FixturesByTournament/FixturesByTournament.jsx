import React, { useContext, useState, useEffect } from 'react';
import getFixturesApi from './getFixturesApi';
import { TeamsContext } from '../../context/teamsContext';
import Images from '../Images/Images';
import config from '../../config/config';
import './FixturesByTournament.css';

const FixturesByTournament = () => {
  const {teams, dataLoaded} = useContext(TeamsContext);
  const [filteredFixtures, setFilteredFixtures] = useState({});
  const [fixturesDataLoaded, setFixturesDataLoaded] = useState(false);

  useEffect(() => {
    let fixtures;
    const todaysDate = new Date().toLocaleDateString(config.dateLocaleString);
    (async () => {
      if(!dataLoaded) return;
      fixtures = await fixturesApiCall();

      if (Object.keys(fixtures).length > 0) {
        setFixturesDataLoaded(true);
        fixtures.Items = mapFilterFixtures(fixtures, teams, todaysDate);
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

const fixturesApiCall = async () => {
  try {
    const response = await getFixturesApi();
    return response;
  } catch(error) {
    console.log('error ==== ', error);
    return;
  }
}

const mapFilterFixtures = (fixtures, teams, todaysDate) => {
  return fixtures.Items.filter((fixtureItem) => {
    const fixtureDateString = new Date(fixtureItem.fixtureTimeDate).toLocaleDateString(config.dateLocaleString);
    if (fixtureDateString === todaysDate) {
      const homeTeam = teams.Items.filter((teamsItem) => {
        return fixtureItem.homeTeamId === teamsItem.ID ? teamsItem.teamName : '';
      })[0];

      const awayTeam = teams.Items.filter((teamsItem) => {
        return fixtureItem.awayTeamId === teamsItem.ID ? teamsItem.teamName : '';
      })[0];

      fixtureItem.homeTeam = homeTeam;
      fixtureItem.awayTeam = awayTeam;

      return fixtureItem;
    }
  });
}

const Fixtures = ({fixturesData}) => {
    if (fixturesData.Items.length === 0) return (<li>NO FIXTURES TODAY</li>)
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
      } = item;

      const formattedFixtureDate = new Date(fixtureTimeDate).toLocaleDateString(config.dateLocaleString);

      return (
        <li key={fixtureID}>
          <div className="fixture-date">
            {formattedFixtureDate}
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
        </li> 
      )
  })
}

export default FixturesByTournament;
