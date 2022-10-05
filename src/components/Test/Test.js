import React from 'react';
import style from './test.module.scss';

const Test = () => {
  return (
    <div className={`${style.box} ${style.font}`}>
      Box
    </div>
  );
};

export default Test;
