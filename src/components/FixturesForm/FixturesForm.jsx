import React, { useState } from 'react';
import TeamListNoLeague from '../TeamListNoLeague/TeamListNoLeague';
import TournamentList from '../TournamentList/TournamentList';
import DatePicker from 'react-datepicker';
import addFixtureApi from './addFixtureApi';
import './FixturesForm.css';
import ApiMessage from '../ApiStateMessages/ApiStateMessages';

const FixturesForm = () => {
  const [fixtureDate, setFixtureDate] = useState('');
  const [tournamentsSelected, setTournamentsSelected] = useState([]);
  const [homeTeamId, setHomeTeamId] = useState('-1');  
  const [awayTeamId, setAwayTeamId] = useState('-1');  
  const [hasPosted, setHasPosted] = useState(false);
  const [hasPostError, setHasPostError] = useState(false);


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
      tournamentsSelected,
      fixtureDate
    }

    const result = await addFixtureApi(fixtureParams);
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
      <form onSubmit={(event) => handleSubmit(event) }>
        <h3>Team Fixture selection</h3>
        <div className="fixtures-date">
          <DatePicker 
            placeholderText="Select fixture date"
            selected={fixtureDate} 
            onChange={(date) => setFixtureDate(date)}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="fixtures-selection">
          <TeamListNoLeague
            showSelect={true}
            defaultOptionValue="Select a HOME team"
            name="home-team-fixture"
            id="home-team-fixture"
            onSelectChange={handleHomeTeamSelectChange}
          /> 
          <h3 className="fixture-verses">VS</h3>
          <TeamListNoLeague
            showSelect={true}
            defaultOptionValue="Select an AWAY team"
            name="away-team-fixture"
            id="away-team-fixture"
            onSelectChange={handleAwayTeamSelectChange}
          />
        </div>
        <TournamentList 
          showCheckBoxes={true}
          handleCheckBox={handleCheckBox}
        />
        <label htmlFor="submit-fixture-form">
          <button type="submit" id="submit-fixture-form">Add Fixture</button>
        </label>
      </form>
    </div>
  )
}


export default FixturesForm;
