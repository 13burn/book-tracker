import { StatusBar } from 'expo-status-bar';
import React, {createContext} from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import listScreen from "./src/screens/listScreen";
import searchScreen from "./src/screens/searchScreen";
import addBookScreen from "./src/screens/addBookScreen";
import { NavigationContainer } from "@react-navigation/native";
import TabBar from "./src/components/TabBar";
import { useState } from 'react/cjs/react.development';
import MainContext from  "./src/context/MainContext"

const Tab = createBottomTabNavigator();

export default function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchList, setSearchList] = useState(null)
  const [scanStatus, setScanStatus] = useState(false)

  const mainValues ={
    searchTerm,
    setSearchTerm,//this two are user to set the term that will be used in the api search
    searchList,
    setSearchList,//this will be used to get/set the book list from the api response
    //a personal book list variable will be saved in firebase, login will be required
    setScanStatus,
    scanStatus
  }
  const [searchState, setSearchState] = useState()
  
  return (
    <MainContext.Provider value={mainValues} >
      <NavigationContainer>
          <Tab.Navigator initialRouteName="Home" tabBar={props => <TabBar {...props}/>} >
            <Tab.Screen name="Home" component={searchScreen} />
            <Tab.Screen name="BookList" component={listScreen} />
            <Tab.Screen name="AddBook" component={addBookScreen} />
          </Tab.Navigator>      
      </NavigationContainer>
    </MainContext.Provider>
  );
}
