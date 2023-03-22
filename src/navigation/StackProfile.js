import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import StatsScreen from '../screens/Profile';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Stats"
      component={StatsScreen}
      options={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: 'crimson' },
        title: 'Profile Mahasiswa'
      }}
    />
  </Stack.Navigator>
  
);
