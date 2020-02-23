import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HeartToHeartScreen from '../screens/HeartToHeartScreen';
import ResourcesScreen from '../screens/ResourcesScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'HeartToHeart';


export default function BottomTabNavigator2({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html

   navigation.setOptions({ headerTitle: '' });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
    <BottomTab.Screen
    name="Heart To Heart"
    component={HeartToHeartScreen}
    options={{
      title: 'Heart To Heart',
      headerTitle: 'together;',
      tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-heart" />,
    }}
    />
    <BottomTab.Screen
    name="Resources"
    component={ResourcesScreen}
    options={{
      title: 'Resources',
      tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-bookmark" />,
    }}
    />

    </BottomTab.Navigator>
    );
}
