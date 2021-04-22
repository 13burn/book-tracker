import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import listScreen from "./src/screens/listScreen";
import searchScreen from "./src/screens/searchScreen";
import { NavigationContainer } from "@react-navigation/native";
import TabBar from "./src/components/TabBar";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator initialRouteName="Home" tabBar={props => <TabBar {...props}/>} >
          <Tab.Screen name="Home" component={searchScreen} />
          <Tab.Screen name="BookList" component={listScreen} />
        </Tab.Navigator>      
    </NavigationContainer>
  );
}
