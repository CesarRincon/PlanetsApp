import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from './src/screens/Detail/Detail';
import { ContextProvider } from './src/context/Context';
import Favorites from './src/screens/Favorites/Favorites';
import HeartIcon from './src/components/Icons/HeartIcon';
import PlanetIcon from './src/components/Icons/PlanetIcon';
import Landing from './src/components/Landing/Landing';
import Home from './src/screens/Home/Home';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="PlanetList">
      <Stack.Screen name="PlanetList"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="PlanetDetail"
        component={Detail}
        options={{
          headerShown: false
        }} />
    </Stack.Navigator>
  );
}

function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          letterSpacing: 1
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#A9A9A9',
        tabBarStyle: {
          backgroundColor: '#33384C',
          height: 55,
          borderColor: '#33384C',
        },
      }}
    >
      <Tab.Screen
        name="Planets"
        component={StackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <PlanetIcon color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <HeartIcon size={32} color={color === "#FFFFFF" ? "red" : color} backgroundColor={color === "#FFFFFF" ? "red" : "#33384C"} />
          ),
        }} />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {

  const [landingScreen, setLandingScreen] = useState(true)

  return (
    <NavigationContainer>
      <ContextProvider>
        <SafeAreaView style={{ flex: 1 }}>
          {
            landingScreen ?
              <Landing setLanding={setLandingScreen} />
              :
              <AppTabs />
          }
        </SafeAreaView>
      </ContextProvider>
    </NavigationContainer>
  );
}

export default App;
