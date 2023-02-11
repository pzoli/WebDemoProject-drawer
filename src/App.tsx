import React from 'react';
import HomeScreen from './screens/HomeScreen';
import AdminScreen from './screens/AdminScreen';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './screens/RootStackParamList';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen}
        />
        <Drawer.Screen name="Admin" component={AdminScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>);
};

export default App;
