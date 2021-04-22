import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import listScreen from "./src/screens/listScreen";
import searchScreen from "./src/screens/searchScreen";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={searchScreen} />
        <Tab.Screen name="BookList" component={listScreen} />
      </Tab.Navigator>
      <Text>the ads go here</Text>
    </NavigationContainer>
  );
}

