// React Native Bottom Navigation Sourced From - 
// https://aboutreact.com/react-native-bottom-navigation/

import 'react-native-gesture-handler';

import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/HomeScreen';
import BestScreen from './pages/BestScreen';
import JobScreen from './pages/JobScreen';


//Create the stack and tabs
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Function defines Home Stack Component
function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Top"
      screenOptions={{
        headerStyle: { backgroundColor: '#5B8E7D' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Top"
        component={HomeScreen}
        options={{ title: 'Top Stories' }}
      />
      <Stack.Screen
        name="Best"
        component={BestScreen}
        options={{ title: 'Best Stories' }}
      />
      <Stack.Screen
        name="Job"
        component={JobScreen}
        options={{ title: 'Job Stories' }}
      />
    </Stack.Navigator>
  );
}

//Function defines Best Story Stack Component
function BestStack() {
  return (
    <Stack.Navigator
      initialRouteName="Best"
      screenOptions={{
        headerStyle: { backgroundColor: '#F4A259' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Top"
        component={HomeScreen}
        options={{ title: 'Top Stories' }}
      />
      <Stack.Screen
        name="Best"
        component={BestScreen}
        options={{ title: 'Best Stories' }}
      />
      <Stack.Screen
        name="Job"
        component={JobScreen}
        options={{ title: 'Job Stories' }}
      />
    </Stack.Navigator>
  );
}

// Function defines Job Story Stack Component
function JobStack() {
  return (
    <Stack.Navigator
      initialRouteName="Job"
      screenOptions={{
        headerStyle: { backgroundColor: '#BC4B51' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Top"
        component={HomeScreen}
        options={{ title: 'Top Stories' }}
      />
      <Stack.Screen
        name="Best"
        component={BestScreen}
        options={{ title: 'Best Stories' }}
      />
      <Stack.Screen
        name="Job"
        component={JobScreen}
        options={{ title: 'Job Stories' }}
      />
    </Stack.Navigator>
  );
}

// The App, Has the scaffold for the top bar and the bottom nav in it
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#8CB369',
          inactiveTintColor: '#f7f7f7',
          inactiveBackgroundColor: '#232323',
          activeBackgroundColor: '#3b3b3b' 
        }}>
        <Tab.Screen
          name="Top"
          component={HomeStack}
          options={{
            tabBarLabel: 'Top Stories',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
               name="fire" 
               color={color} 
               size={size} 

               />
            ),
          }}
        />
        <Tab.Screen
          name="Best"
          component={BestStack}
          options={{
            tabBarLabel: 'Best Stories',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="chart-bar"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Job"
          component={JobStack}
          options={{
            tabBarLabel: 'Job Stories',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="shopping"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Ecxport the app 
export default App;
