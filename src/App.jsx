import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Default from './pages/Default';
import Teams from './pages/Teams';
import AddManager from './pages/Addmanager';
import Managers from './pages/Managers';
import Header from './components/Header/Header';
import { TeamsContext } from './context/teamsContext';
import getTeams from './api/getTeams';

const App = () => {
  const [error, setError] = useState(false);
  const [teams ,setTeams] = useState({});
  const [dataReady ,setDataReady] = useState(false);

  useEffect(() => {
    getTeams()
      .then((res) => {
        return res.json();
      }).then((data) => {
        if (!data) {
          console.log('no data');
          setError(true);
          return [];
        } 
          setDataReady(true);
          setTeams(data);
      })
      .catch((error) => {
        setError(true);
        console.error('error ===== ', error);
      })

  },[]);

  const appData = {
    teams,
    error,
    dataReady
  }

  return (
    <div className="App">
      <TeamsContext.Provider value={appData}>
        <Header />
        <Routes>
          <Route index element={<Default />} />
          <Route path="/addmanager" element={<AddManager />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/managers" element={<Managers />} />
          <Route path="*" element={<div>404! Not Found</div>} />
        </Routes>
      </TeamsContext.Provider>
    </div>
  );
}
export default App;
