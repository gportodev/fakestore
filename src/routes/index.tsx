import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { AppTabRoutes } from './app.tab.routes';

function Routes(): JSX.Element {
  return (
    <NavigationContainer>
      <AppTabRoutes />
    </NavigationContainer>
  );
}

export { Routes };
