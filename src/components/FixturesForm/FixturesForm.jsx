import React, { useState, useContext } from 'react';
import TeamListNoLeague from '../TeamListNoLeague/TeamListNoLeague';
import TournamentListing from '../TournamentListing/TournamentListing';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import addFixtureApi from './addFixtureApi';
import './FixturesForm.css';
import ApiMessage from '../ApiStateMessages/ApiStateMessages';
import SelectBox from '../SelectBox/SelectBox';
import scoresDefaultData from '../../config/defaultSelectBox';
import { FixturesContext } from '../../context/FixturesContext';


const FixturesForm = ({editMode, fixtureId}) => {
  let fixture;
  const [fixtureDate, setFixtureDate] = useState(new Date());
  const [fixtureTime, setFixtureTime] = useState('');
  const [tournamentsSelected, setTournamentsSelected] = useState('');
  const [homeTeamId, setHomeTeamId] = useState('-1');  
  const [awayTeamId, setAwayTeamId] = useState('-1');
  const [homeTeamScore, setHomeTeamScore] = useState(0);
  const [awayTeamScore, setAwayTeamScore] = useState(0);
  const [hasPosted, setHasPosted] = useState(false);
  const [hasPostError, setHasPostError] = useState(false);

  if (editMode) {
    const {fixtures, fixturesLoading} = useContext(FixturesContext);
    if(!fixturesLoading) return;
    fixture = fixtures.Items.filter((fixtureItem) => fixtureItem.fixtureID === fixtureId)[0];
    console.log('fixture context ', new Date(fixture.fixtureTimeDate));
    console.log('fixture state ', fixtureDate);
  }

  const handleTournamentSelect = (event) => {
    event.preventDefault();
    setTournamentsSelected(event.currentTarget.value);
  }

  const handleHomeTeamSelectChange = (event) => {
    setHomeTeamId(event.currentTarget.value);
  }

  const handleAwayTeamSelectChange = (event) => {
    setAwayTeamId(event.currentTarget.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fixtureParams = {
      homeTeamId,
      awayTeamId,
      homeTeamScore,
      awayTeamScore,
      tournamentsSelected,
      fixtureDate,
      fixtureTime
    }

    const result = await addFixtureApi(fixtureParams, editMode);
    if(Object.keys(result).length > 0) {
      setHasPosted(true);
      setHasPostError(false);
    } else {
      setHasPosted(false);
      setHasPostError(true);
    }
  }
  
  return (
    <div className="add-fixtures-form">
      <ApiMessage showMessage={hasPosted} cssClass='success' message='Fixture has been  added'/>
      <ApiMessage showMessage={hasPostError} cssClass='error' message='Sorry there has been an error'/>
      <form onSubmit={(event) => handleSubmit(event, editMode) }>
        <h3>Date and time selection</h3>
        <div className="fixtures-date-time">
          <div className="fixtures-date-container">
            <DatePicker 
              placeholderText="Select game date"
              selected={editMode ? new Date(fixture.fixtureTimeDate) : fixtureDate}
              onChange={(date) => setFixtureDate(date)}
              dateFormat="dd/MM/yyyy"
              value={fixtureDate}
            />
            <TimePicker 
              minutePlaceholder="MM"
              secondPlaceholder="ss"
              hourPlaceholder="HH"
              onChange={(time => setFixtureTime(time))}
              value={editMode ? fixture.fixtureTimeDate.split('T')[1] : ''}
            />
          </div>
        </div>
        <h3>Team fixture selection</h3>
        <div className="fixtures-selection">
          <div className="team-results">
            <TeamListNoLeague
              showSelect={true}
              defaultOptionValue="Select a HOME team"
              name="home-team-fixture"
              id="home-team-fixture"
              defaultValue={editMode ? fixture.homeTeamId : ''}
              onSelectChange={handleHomeTeamSelectChange}
            />
            <SelectBox 
              data={scoresDefaultData}
              name="home-team-score"
              onSelectChange={(event) => setHomeTeamScore(event.currentTarget.value)} 
              optionsObjectPropertyName="optionValue"
              className="scores-select"
              defaultValue={editMode ? fixture.homeTeamScore : ''}
            />
          </div>
          <h3 className="fixture-verses">VS</h3>
          <div className="team-results">
            <SelectBox 
              data={scoresDefaultData} 
              name="away-team-score"
              onSelectChange={(event) => setAwayTeamScore(event.currentTarget.value)} 
              optionsObjectPropertyName="optionValue"
              className="scores-select"
              selectedValue={editMode ? fixture.awayTeamScore : ''}
            />
            <TeamListNoLeague
              showSelect={true}
              defaultOptionValue="Select an AWAY team"
              name="away-team-fixture"
              id="away-team-fixture"
              onSelectChange={handleAwayTeamSelectChange}
              defaultValue={editMode ? fixture.awayTeamId : ''}
            />
          </div>
        </div>
        <h3>Select a tournament</h3>
        <div className="fixtures-tournament-selection">
          <TournamentListing 
            showAsSelect={true}
            onSelectChange={handleTournamentSelect}
            name="tournament-for-fixture"
            id="tournament-for-fixture"
            defaultValue={editMode ? fixture.tournamentId : ''}
          />
        </div>
        <h3>Submit Changes</h3>
        <button type="submit" id="submit-fixture-form">{editMode ? 'Save fixture changes ' : 'Add Fixture'}</button>
      </form>
    </div>
  )
}


export default FixturesForm;
