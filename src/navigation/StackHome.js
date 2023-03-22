import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import HomeScreen from '../screens/Home';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: 'crimson' },
        title: 'Home'
      }}
    />
  </Stack.Navigator>
);
