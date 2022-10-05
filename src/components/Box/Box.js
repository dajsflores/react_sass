import React from 'react';
import './box.scss';

const Box = () => {
  return (
    <div className="container-box">
      <div className="box">
        <h2 className="box1">Hijo <span>Especifico</span></h2>
      </div>
      <div className="box">
        <h2 className="box1">Hijo <span className="span-extended">Especifico</span></h2>
      </div>
      <div className="box">
        <h2 className="box2">Hijo <span>Especifico</span></h2>
      </div>
      <span>No Especifico</span>
    </div>
  );
};

export default Box;
