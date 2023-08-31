import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DashBoard from './components/DashBoard/DashBoard';
import Notifications from './components/Notification/Notification';
import Profile from './components/Profile/Profile';
import CreateProfile from './components/Profile/CreateProfile';
import JobDetails from './components/JobDetails/JobDetails';
import CompanyDetails from './components/CompanyDetails/CompanyDetails';
import Applications from './components/Applications/Applications';
import Login from './components/Usermanagement/Login/Login';
import Register from './components/Usermanagement/Register/Register';
import Search from './components/Search/Search';
import NavBar from './components/Commons/NavBar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
           
          <Stack.Screen name="Home" component={DashBoard} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Create" component={CreateProfile} />
          <Stack.Screen name="JobDetails" component={JobDetails} />
          <Stack.Screen name="CompanyDetails" component={CompanyDetails} />
          <Stack.Screen name="Applications" component={Applications} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
        
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#662DAF',
  },
});
