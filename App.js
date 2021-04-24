import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import listScreen from "./src/screens/listScreen";
import searchScreen from "./src/screens/searchScreen";
import addBookScreen from "./src/screens/addBookScreen";

import TabBar from "./src/components/TabBar";


const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
        <Tab.Navigator initialRouteName="Home" tabBar={props => <TabBar {...props}/>} >
          <Tab.Screen name="Home" component={searchScreen} info="one" />
          <Tab.Screen name="BookList" component={listScreen} info="two"/>
          <Tab.Screen name="AddBook" component={addBookScreen} info="three"/>
        </Tab.Navigator>      
    </NavigationContainer>
  );
}
