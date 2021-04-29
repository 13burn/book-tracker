import React, { useState } from "react";
import { View, StyleSheet, Text, StatusBar, SafeAreaView } from "react-native";
import { useContext } from "react/cjs/react.development";
import MainContext from "../context/MainContext"

const listScreen = () => {
    const context = useContext(MainContext)
    return(
        <SafeAreaView style={{marginTop: StatusBar.currentHeight, backgroundColor:"red", flex:1 }}>
            <Text> Lister </Text>
        </SafeAreaView>
    )
};

const Styles = StyleSheet.create({

});

export default listScreen; 
