import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import Login from './Screen/components/Login';
import Reg from './Screen/components/Reg';
import DrawerContent from './Screen/drawerDisplay/DrawerContent';
import CourseDetails from './Screen/drawerScreen/CourseDetails';
import ForgotPass from './Screen/components/forgotPass';

// Create a Reference of the Stack which will display in the screen stack wise
const Stack = createNativeStackNavigator();

// This is the Class Which extends the React Components
// and Render function is the Compulsary in the React.Components class
class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registration" component={Reg} />
          <Stack.Screen name="ForgotPass" component={ForgotPass} />
          {/* This is the Stack screen of the DrawerContent which display the Drawer 
          This is Outside of Dashbaord */}
          <Stack.Screen name="DrawerContent" component={DrawerContent} />
          <Stack.Screen name="CourseDetails" component={CourseDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
