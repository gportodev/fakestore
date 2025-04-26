import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Favorites } from '../screens/Favorites';
import { AppStackRoutes } from './app.stack.routes';
import { FilledHeartIcon, HomeIcon } from '../assets/icons/Loader';
import { Fonts } from '../constants/fonts';
import colors from '../constants/colors';
import { TabParamList } from './types';
import { useUser } from '../context/user';
import { Loader } from '../components/Loader';

const Tab = createBottomTabNavigator<TabParamList>();

const labelStyle = {
  fontSize: 16,
  fontFamily: Fonts.roboto_regular,
};

const iconProps = {
  width: 24,
  height: 24,
  color: colors.obsidian,
};

function AppTabRoutes(): JSX.Element {
  const { list } = useUser();

  if (list.length === 0) {
    return <Loader />;
  }

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
          tabBarIcon: ({ color }) => <HomeIcon {...iconProps} color={color} />,
          tabBarLabelStyle: labelStyle,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color }) => (
            <FilledHeartIcon {...iconProps} color={color} />
          ),
          tabBarLabelStyle: labelStyle,
        }}
      />
    </Tab.Navigator>
  );
}

export { AppTabRoutes };
