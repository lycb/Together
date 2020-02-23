import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HeartToHeartScreen from '../screens/HeartToHeartScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import UnsentLettersScreen from '../screens/UnsentLettersScreen';
import InputScreen from '../screens/InputScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'HeartToHeart';


export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html

   //Maybe do logo here :
   navigation.setOptions({ headerTitle: 'together;', headerStyle: {
            backgroundColor: '#f5ac41', }, headerTintColor: '#fff', headerTitleStyle: {
            fontWeight: 'bold',
          }});


  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
    <BottomTab.Screen
    name="Heart To Heart"
    component={HeartToHeartScreen}
    options={{
      title: 'Heart To Heart',
      backgroundColor: '#f5ac41',
      tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-heart" />,
    }}
    />
    <BottomTab.Screen
    name="Unsent Letters"
    component={UnsentLettersScreen}
    options={{
      title: 'Unsent Letters',
      tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
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

    <BottomTab.Screen
    name="Input"
    component={InputScreen}
    options={{
      title: 'Input',
      tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
    }}
    />

    </BottomTab.Navigator>
    );
}
