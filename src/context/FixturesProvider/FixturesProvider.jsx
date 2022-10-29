import React, { useEffect, useState } from 'react';
import { FixturesContext } from "../FixturesContext";
import getFixturesApi from "../../contextApi/getFixturesApi";

const FixturesProvider = ({children}) => {
  const [fixtures, setFixtures] = useState({});
  const [fixturesLoading, setFixturesLoading] = useState(false);
  
  useEffect(() => {
    (async () => {
      const fixtureData = await getFixturesApi();
      if (Object.keys(fixtureData).length > 0) {
        setFixturesLoading(true);
        setFixtures(fixtureData);
      }
    })();
  }, []);

  const fixturesContext = {
    fixtures,
    fixturesLoading
  };

  return (
    <FixturesContext.Provider value={fixturesContext}>
      {children}
    </FixturesContext.Provider>
  );
};

export default FixturesProvider;
