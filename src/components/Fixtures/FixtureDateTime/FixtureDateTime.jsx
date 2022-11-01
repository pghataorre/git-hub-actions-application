import React from 'react';
import config from '../../../config/config';
import './FixtureDateTime.css';

const FixtureDateTime = ({fixtureTimeDate}) => {
  const fixtureDateTimeObject = new Date(fixtureTimeDate)
  const formattedFixtureDate = fixtureDateTimeObject.toLocaleDateString(config.dateLocaleString);
  const fixtureTime = fixtureDateTimeObject.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  
  return (
  <div className="fixture-date">
    {`${formattedFixtureDate} - ${fixtureTime}`}
  </div>
  )
}

export default FixtureDateTime