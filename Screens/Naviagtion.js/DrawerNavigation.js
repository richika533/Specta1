import React from 'react';
import {createDrawerNavigator} from '@react-naviagtion/drawer';
import TabNavigator from './TabNavigator';
import Profile from '../Screens/Profile';

const DrawerNavigator= createDrawerNavigator();

const DrawerNavigator= ()=>{
    return(
      <Drawer.Navigator>
          <Drawer.Screen name= "Home" component={TabNavigatior}/>
          <Drawer.Screen name= "Profile" component={Profile}/>
      </Drawer.Navigator> 
    );
};

export default DrawerNavigator