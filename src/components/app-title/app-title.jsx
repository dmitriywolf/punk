import React from 'react';

const AppTitle = () => {
  // style используем только если стили динамические, а так используем css класы
  return (
      <h1 style={ {textAlign: 'right'} }>Beer library</h1>
  )
};

export default AppTitle;
