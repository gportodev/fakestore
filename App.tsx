import React from 'react';

import { UserProvider } from './src/context/user';
import { Routes } from './src/routes';
import useCachedResources from './src/hooks/useCachedResources';
import { Loader } from './src/components/Loader';

export default function App(): JSX.Element {
  const isLoading = useCachedResources();

  if (!isLoading) {
    return <Loader />;
  }

  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}
