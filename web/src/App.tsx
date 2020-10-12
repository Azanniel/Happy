import React from 'react';

import { Routes } from './routes/routes';

import { GlobalStyles } from './styles/globalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
}

export { App };
