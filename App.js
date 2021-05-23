import { StatusBar } from 'expo-status-bar';
import React, {createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import searchScreen from "./src/screens/searchScreen";
import { NavigationContainer } from "@react-navigation/native";
import TabBar from "./src/components/TabBar";
import TransitionScreen from "./src/screens/TransitionScreen";
import listScreen from "./src/screens/listScreen";
import { useEffect, useState } from 'react/cjs/react.development';
import MainContext from  "./src/context/MainContext"

const Tab = createBottomTabNavigator();

export default function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchList, setSearchList] = useState([])
  const [scanStatus, setScanStatus] = useState(false)
  const [bookList, setBooklist] = useState([])

  const getData = async () => {
    try {
      let jsonValue = await AsyncStorage.getItem('bookList')
      console.log("--------------------------")
      console.log("pre:", jsonValue)
      setBooklist(jsonValue)
      console.log("pos:", jsonValue)
      //return jsonValue = JSON.parse(jsonValue);
      
    } catch(e) {
      console.log("Error:", e)
      // error reading value
    }
  }

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('bookList', jsonValue)
      setBooklist(value)
    } catch (e) {
      // saving error
    }
  }

  const appendData = async (newVal) => {
    //let netList = getData().concat(newVal)
    try {
      console.log("-----------------------------------------------------------------------------------")

      //console.log("type:", typeof(newVal))      
      let nuArr = bookList.concat( newVal);
      
      //console.log("nuArr length:", length(nuArr))
      nuArr = [...new Set(nuArr)]
      setBooklist(nuArr)
      const jsonValue = JSON.stringify(nuArr);
      console.log("booklist:", bookList)
      await AsyncStorage.setItem('bookList', jsonValue);
    } catch (e) {
      console.log("Error:", e)
      // saving error
    }

  }

  const mainValues ={
    searchTerm,
    setSearchTerm,//this two are used to set the term that will be used in the api search
    searchList,
    setSearchList,//this will be used to get/set the book list from the api response
    //a personal book list variable will be saved in firebase, login will be required
    setScanStatus,
    scanStatus,//TODO: add use later
    bookList,
    setBooklist,
    appendData,
    storeData,
    getData
  }
  const [searchState, setSearchState] = useState()
  
  useEffect(async () =>{
    try {
      let jsonValue = await AsyncStorage.getItem('bookList')
      console.log("--------------------------")
      jsonValue = JSON.parse(jsonValue)
      setBooklist(jsonValue)
      console.log("pos:", jsonValue)
      console.log("bookList:", bookList)
      //return jsonValue = JSON.parse(jsonValue);
      
    } catch(e) {
      console.log("Error:", e)
      // error reading value
    }}, [])
  

  return (
    <MainContext.Provider value={mainValues} >
      <NavigationContainer>
          <Tab.Navigator initialRouteName="Transition" tabBar={props => <TabBar {...props}/>} >
          <Tab.Screen name="Transition" component={TransitionScreen} />
          <Tab.Screen name="BookList" component={listScreen} />
            {/* 
            <Tab.Screen name="Home" component={searchScreen} />
              
              <Tab.Screen name="AddBook" component={addBookScreen} />
             */}
          </Tab.Navigator>      
      </NavigationContainer>
    </MainContext.Provider>
  );
}
