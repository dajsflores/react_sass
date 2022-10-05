import React from 'react';
import style from './boxPlus.module.scss';

const BoxPlus = () => {
  const { box, containerBox } = style;
  return (
    <div className={containerBox}>
      <div className={box}>
        <p>Caja 1</p>
      </div>
      <div className={box}>
        <p>Caja 2</p>
      </div>
    </div>
  );
};

export default BoxPlus;
