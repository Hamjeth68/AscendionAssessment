import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppContextProvider } from './src/context/AppContext';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import CalculatorScreen from './src/screens/CalculatorScreen';
import NavbarScreen from './src/screens/NavbarScreen';
import TwoSumScreen from './src/screens/TwoSumScreen';

// Components
import Navbar from '@/components/Navbar/NavBar';

const Stack = createNativeStackNavigator();

// Custom theme for React Native Paper
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee',
    accent: '#03dac4',
    background: '#f5f5f5',
    surface: '#ffffff',
    text: '#000000',
    onSurface: '#000000',
  },
};

const App = () => {
  return (
    <AppContextProvider>
      <PaperProvider theme={theme}>
        <StatusBar 
          barStyle="light-content" 
          backgroundColor="#6200ee" 
          translucent={false}
        />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              header: (props) => <Navbar {...props} />,
              headerShown: true,
            }}
          >
            <Stack.Screen 
              name="Home" 
              component={HomeScreen}
              options={{ 
                title: 'Assessment Hub',
                headerShown: true 
              }}
            />
            <Stack.Screen 
              name="Calculator" 
              component={CalculatorScreen}
              options={{ 
                title: 'Calculator Challenge',
                headerShown: true 
              }}
            />
            <Stack.Screen 
              name="Navbar" 
              component={NavbarScreen}
              options={{ 
                title: 'Navbar Challenge',
                headerShown: true 
              }}
            />
            <Stack.Screen 
              name="TwoSum" 
              component={TwoSumScreen}
              options={{ 
                title: 'Two Sum Challenge',
                headerShown: true 
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </AppContextProvider>
  );
};

export default App;