import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Default from "./pages/Default";
import Teams from "./pages/Teams";
import AddManager from "./pages/Addmanager";
import AddTournament from "./pages/AddTournament";
import AddTeam from "./pages/AddTeam";
import AddFixtures from './pages/AddFixtures';
import Managers from "./pages/Managers";
import Fixtures from  "./pages/Fixtures";
import Addpoints from "./pages/AddPoints";
import Header from "./components/Header/Header";
import { TeamsContext } from "./context/teamsContext";
import getTeamsApi from "./contextApi/getTeamsApi";
import getTournament from "./contextApi/getTournamentApi";

const App = () => {
  const [error, setError] = useState(false);
  const [teams, setTeams] = useState({});
  const [tournaments, setTournaments] = useState({});
  const [dataLoaded, setLoadedData] = useState(false);
  const [tournamentDataLoaded, setTournamentDataLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const teamsData = await getTeamsApi();
      if (!teamsData) {
        setError(true);
      } else {

        const sortedAtoZ = teamsData.Items.sort(
          (a, b) => a.teamName.localeCompare(b.teamName)
        );

        teamsData.Items = sortedAtoZ;

        const sortedByMostPoints = teamsData.Items.sort(
          (a, b) => b.results[0].points - a.results[0].points
        );

        teamsData.Items = sortedByMostPoints;

        setLoadedData(true);
        setTeams(teamsData);
      }
    })();

    (async () => {
      const tournamentData = await getTournament();
      if (!tournamentData) {
        setError(true);
      } else {
        setTournamentDataLoaded(true);
        setTournaments(tournamentData);
      }
    })();
  }, []);

  const appData = {
    teams,
    tournaments,
    error,
    dataLoaded,
    tournamentDataLoaded,
  };

  return (
    <div className="App">
      <Header />
      <TeamsContext.Provider value={appData}>
        <Routes>
          <Route index element={<Default />} />
          <Route path="*" element={<p>Sorry this page isn't avaialable</p>} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/managers" element={<Managers />} />
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/addpoints" element={<Addpoints />} />
          <Route path="/addmanager" element={<AddManager />} />
          <Route path="/addtournament" element={<AddTournament />} />
          <Route path="/addteam" element={<AddTeam />} />
          <Route path="/addfixture" element={<AddFixtures />} />
        </Routes>
      </TeamsContext.Provider>
    </div>
  );
};
export default App;
