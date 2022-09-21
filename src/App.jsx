import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Default from './pages/Default';
import Teams from './pages/Teams';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Default />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="*" element={<div>404! Not Found</div>} />
      </Routes>
    </div>
  );
}
export default App;
