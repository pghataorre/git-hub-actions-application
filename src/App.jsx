import React from 'react';
import './App.css';
import Images from './components/Images/Images';
import permyImage from './images/permy.jpg'

function App() {
  return (
    <div className="App">
      <h1>PERMY.CO.UK - THIS GUY</h1>
      <div className="image-container">
          <Images src={permyImage}/>
      </div>
    </div>
  );
}

export default App;
