import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Favorites } from '../screens/Favorites/Favorites';
import { AppStackRoutes } from './app.stack.routes';
import { FilledHearIcon, HomeIcon } from '../assets/icons/Loader';
import { Fonts } from '../constants/fonts';
import colors from '../constants/colors';

const Tab = createBottomTabNavigator();

function AppTabRoutes(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 64,
        },
        tabBarInactiveTintColor: colors.obsidian,
      }}
    >
      <Tab.Screen
        name="Main"
        component={AppStackRoutes}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: Fonts.roboto_regular,
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color }) => <FilledHearIcon color={color} />,
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: Fonts.roboto_regular,
          },
        }}
      />
    </Tab.Navigator>
  );
}

export { AppTabRoutes };
