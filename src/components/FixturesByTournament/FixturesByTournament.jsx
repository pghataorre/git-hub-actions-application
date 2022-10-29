import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { TeamsContext } from '../../context/teamsContext';
import { FixturesContext } from '../../context/FixturesContext';
import filterFixturesToTeams from './filterFixturesToTeams';
import Images from '../Images/Images';
import config from '../../config/config';
import scoresDefaultData from '../../config/defaultSelectBox';
import SelectBox from '../SelectBox/SelectBox';
import editSoresApi from './editScoresApi';
import './FixturesByTournament.css';

const FixturesByTournament = ({editMode}) => {
  const {teams, dataLoaded} = useContext(TeamsContext);
  const {fixtures, fixturesLoading} = useContext(FixturesContext);
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
          />) 
        : (<li>Loading</li>)}
      </ul>
    </div>
  );
}

const Fixtures = ({fixturesData, editMode}) => {
  const navigate = useNavigate(); 
  
  const handleButtonClick = (event, fixtureID) => {
    event.preventDefault();

    navigate(`/editSingleFixture/${fixtureID}`);
  }

  const handleScoresClick = async (event, fixtureID) => {
    event.preventDefault();
    const [currentHomeTeamScore, currentAwayTeamScore] = event.currentTarget;

    const postBody = {
      homeTeamScore: Number(currentHomeTeamScore.value),
      awayTeamScore: Number(currentAwayTeamScore.value),
      fixtureID,
      updateScores: true,
    };

    await editSoresApi(postBody);
  }

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
      <li key={`fixture-item-${fixtureID}`}>
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
        { editMode && (
        <form onSubmit={(event) => handleScoresClick(event, fixtureID)}>
          <div className="edit">
            <div className="edit-mode-scores">
              <div>
                <SelectBox 
                  data={scoresDefaultData}
                  name="home-team-score"
                  onSelectChange={() => () => {}} 
                  optionsObjectPropertyName="optionValue"
                  className="scores-select"
                  defaultValue={homeTeamScore}
                />
              </div>
              <div></div>
              <div>
                <SelectBox 
                  data={scoresDefaultData}
                  name="away-team-score"
                  onSelectChange={() => () => {} } 
                  optionsObjectPropertyName="optionValue"
                  className="scores-select"
                  defaultValue={awayTeamScore}
                />
              </div>
            </div>
            <button id="edit-fixture-scores" >Set scores</button>
            <button id="edit-fixture" onClick={ (event) => handleButtonClick(event, fixtureID) }>Edit fixture</button>
          </div>
        </form>
        )}
      </li> 
    )
  })
}

export default FixturesByTournament;
