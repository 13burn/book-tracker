import { StatusBar } from 'expo-status-bar';
import React, {createContext, useContext} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import listScreen from "./src/screens/listScreen";
import searchScreen from "./src/screens/searchScreen";
import addBookScreen from "./src/screens/addBookScreen";
import { NavigationContainer } from "@react-navigation/native";
import TabBar from "./src/components/TabBar";

const Tab = createBottomTabNavigator();

const appContext = createContext()


export default function App() {
  const {count} = useContext(appContext)

  return (
    <NavigationContainer>
        <Tab.Navigator initialRouteName="Home" tabBar={props => <TabBar {...props}/>} >
          <Tab.Screen name="Home" component={searchScreen} />
          <Tab.Screen name="BookList" component={listScreen} />
          <Tab.Screen name="AddBook" component={addBookScreen} />
        </Tab.Navigator>      
    </NavigationContainer>
  );
}
