import React from 'react';
import Images from '../components/Images/Images';
import permyImage from '../images/permy.jpg';

const Default = () => {
  return (
    <div className="routes-page">
      <h1>PERMY.CO.UK - THIS GUY</h1>
      <div className="image-container">
          <Images 
            src={permyImage}
            testid="mainPagePermyImage"
            altText="Permy"
          />
      </div>
    </div>
  );
}

export default Default;
