import React from 'react';
import HomeScreen from './screens/HomeScreen';
import AdminScreen from './screens/AdminScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './screens/RootStackParamList';
import 'react-native-gesture-handler';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
        />
        <Stack.Screen name="Admin" component={AdminScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>);
};

export default App;
