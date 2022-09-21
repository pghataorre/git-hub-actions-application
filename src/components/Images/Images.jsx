import React from 'react';

const Images = ({src, testid, altText}) => (<img src={src} data-testid={testid} alt={altText} />);

export default Images;