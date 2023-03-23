import * as React from 'react';
import 'react-native-gesture-handler';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Home from '../drawerScreen/Home';
import Course from '../drawerScreen/Course';
import {StyleSheet} from 'react-native';
import aboutUs from './../drawerScreen/aboutUs';
import ContactUs from '../drawerScreen/contactUs';
import UserData from './../drawerScreen/userData';

const Drawer = createDrawerNavigator();

class Sidebar extends React.Component {
  render() {
    return (
      // This is the Drawer Navigation which is Toggle in the Screen when we Login and in the Dashboard
      <Drawer.Navigator
        drawerContent={props => {
          return (
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
              <DrawerItem
                label="Logout"
                onPress={() => props.navigation.navigate('Login')}
              />
            </DrawerContentScrollView>
          );
        }}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            drawerLabel: 'Home',
            fontSize: 100,
            headerStyle: {
              backgroundColor: '#ff5435',
            },
            headerTitleAlign: 'center',
            headerLeft: null,
          }}
        />

        <Drawer.Screen
          name="Course"
          component={Course}
          options={{
            drawerLabel: 'Courses',
            headerTitle: 'Courses',
            headerStyle: {backgroundColor: '#ff5435'},
            headerTitleAlign: 'center',
          }}
        />

        <Drawer.Screen
          name="About Us"
          component={aboutUs}
          options={{
            drawerLabel: 'About Me',
            headerStyle: {backgroundColor: '#ff5435'},
            headerTitleAlign: 'center',
          }}
        />

        <Drawer.Screen
          name="Students"
          component={UserData}
          options={{
            drawerLabel: 'Students',
            headerStyle: {backgroundColor: '#ff5435'},
            headerTitleAlign: 'center',
          }}
        />

        <Drawer.Screen
          name="Contact Us"
          component={ContactUs}
          options={{
            drawerLabel: 'Contact Us',
            headerStyle: {backgroundColor: '#ff5435'},
            headerTitleAlign: 'center',
          }}
        />
      </Drawer.Navigator>
    );
  }
}

export default Sidebar;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
