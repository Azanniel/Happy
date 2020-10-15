import React from 'react';
import 'leaflet/dist/leaflet.css';

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
