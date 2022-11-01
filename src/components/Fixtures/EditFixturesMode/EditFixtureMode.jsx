import React  from 'react';
import { useNavigate } from "react-router-dom";
import scoresDefaultData from '../../config/defaultSelectBox';
import SelectBox from '../SelectBox/SelectBox';
import changeFixturesScoresApi from './changeFixturesScoresApi';
import './EditFixtureMode.css';


const EditFixtureMode = ({fixturesData, tournamentId}) => {
  const navigate = useNavigate(); 
  
  const handleButtonClick = (event, fixtureID) => {
    event.preventDefault();

    navigate(`/editSingleFixture/${fixtureID}`);
  }

  const handleScoresClick = async (event, fixtureID, tournamentId) => {
    event.preventDefault();
    const [currentHomeTeamScore, currentAwayTeamScore] = event.currentTarget;

    const postBody = {
      homeTeamScore: Number(currentHomeTeamScore.value),
      awayTeamScore: Number(currentAwayTeamScore.value),
      fixtureID,
      tournamentId
    };

    await changeFixturesScoresApi(postBody);
  }

  const {
    fixtureID,
    homeTeamScore,
    awayTeamScore,
  } = fixturesData;

  return (
    <div className="edit-mode-container">
      <form onSubmit={(event) => handleScoresClick(event, fixtureID, tournamentId)} key={`edit-scores-${fixtureID}`} >
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
        <div className="edit-mode-scores-buttons">
          <button id="edit-fixture-scores" >Set scores</button>
          <button id="edit-fixture" onClick={ (event) => handleButtonClick(event, fixtureID) }>Edit fixture</button>
        </div>
      </form>
    </div>
  )
}

export default EditFixtureMode;
