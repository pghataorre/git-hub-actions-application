import React, { useEffect, useState } from 'react';
import { FixturesContext } from "../FixturesContext";
import getFixturesApi from "../../contextApi/getFixturesApi";

const FixturesProvider = ({children, tournamentId}) => {
  const [fixtures, setFixtures] = useState({});
  const [fixturesLoading, setFixturesLoading] = useState(false);
  
  useEffect(() => {
    (async () => {
      const fixtureData = await getFixturesApi(tournamentId);
      if (Object.keys(fixtureData).length > 0) {
        setFixturesLoading(true);
        setFixtures(fixtureData);
      }
    })();
  }, []);

  const fixturesContext = {
    fixtures,
    fixturesLoading,
    tournamentId
  };

  return (
    <FixturesContext.Provider value={fixturesContext}>
      {children}
    </FixturesContext.Provider>
  );
};

export default FixturesProvider;
