import React from "react";
import MainContext from "../context/MainContext";
import searchScreen from "./searchScreen";
import addBookScreen from "./addBookScreen";
import { useContext } from "react/cjs/react.development";
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

const Stack = createNativeStackNavigator();

const TransitionScreen = () => {
    const {setScanStatus, scanStatus} = useContext(MainContext)

    //NOTE to self: don't code after 4 am.
    return(
        <Stack.Navigator initialRouteName="search">
            <Stack.Screen name="search" component={searchScreen}/>
            <Stack.Screen name="add" component={addBookScreen}/>
        </Stack.Navigator>
    )

}

export default TransitionScreen;