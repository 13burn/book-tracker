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

  const mainValues ={
    setSearchTerm,
    searchTerm,
    setSearchList,
    searchList
  }
  const [searchState, setSearchState] = useState()
  console.log(searchTerm)
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
