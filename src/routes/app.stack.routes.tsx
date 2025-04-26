import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Detail } from '../screens/Detail';
import { StackParamList } from './types';

const Stack = createNativeStackNavigator<StackParamList>();

function AppStackRoutes(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

export { AppStackRoutes };
