import React from 'react';

const SystemLogo = ({ data }) => (
  <div className="bg-card p-15 h-full flex items-center justify-center">
    <img src={ data } style={ { maxHeight: 100 } } alt="LogoSystem"/>
  </div>
);

export default SystemLogo;