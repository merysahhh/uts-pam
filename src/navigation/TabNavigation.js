import * as React from 'react';
import { Appearance } from 'react-native-appearance';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../constants';

// grabs stacks
import StackHome from './StackHome';
import StackMulti from './StackDetail';
import StackStats from './StackProfile';

// icons
import SvgHome from '../icons/Svg.Home';
import SvgPages from '../icons/Svg.Detail';
import SvgStats from '../icons/Svg.Profile';

const Tab = createBottomTabNavigator();

// activeTintColor: {
//   light: colors.darkColor,
//   dark: colors.grey
// },
// inactiveTintColor: {
//   light: colors.grey,
//   dark: colors.white20
// }

export default () => {
  // get system preference
  const colorScheme = Appearance.getColorScheme();
  console.log('react-native-appearance::Appearance', colorScheme);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: 'maroon',
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.inactiveGrey,
        tabBarStyle: {
          backgroundColor: 'crimson',
          borderTopColor: '#fff'
        },
        tabBarItemStyle: {
        }
      }}
    >
      <Tab.Screen
        name="StackHome"
        component={StackHome}
        options={{
          tabBarIcon: ({ focused }) => <SvgHome active={focused} />,
          tabBarLabel: 'Home'
        }}
      />
      <Tab.Screen
        name="StackMulti"
        component={StackMulti}
        options={{
          tabBarIcon: ({ focused }) => <SvgPages active={focused} />,
          tabBarLabel: 'Detail'
        }}
      />
      <Tab.Screen
        name="StackStats"
        component={StackStats}
        options={{
          tabBarIcon: ({ focused }) => <SvgStats active={focused} />,
          tabBarLabel: 'Profile'
        }}
      />
    </Tab.Navigator>
  );
};
