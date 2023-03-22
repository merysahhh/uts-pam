import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import MultiBaseScreen from '../screens/Detail';

// components
import NavigationBack from '../components/NavigationBack';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="MultiBase"
      component={MultiBaseScreen}
      options={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: 'crimson' },
        title: 'Detail Item'
      }}
    />
  </Stack.Navigator>
);
