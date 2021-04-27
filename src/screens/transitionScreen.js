import React from "react";
import { View } from "react-native"
import MainContext from "../context/MainContext";
import searchScreen from "./searchScreen";
import addBookScreen from "./addBookScreen";
import { useContext } from "react/cjs/react.development";

const TransitionScreen = () => {
    const {setScanStatus, scanStatus} = useContext(MainContext)
    return(
        <View>
            {scanStatus?<searchScreen/>:<addBookScreen/>}
        </View>
    )

}

export default TransitionScreen;