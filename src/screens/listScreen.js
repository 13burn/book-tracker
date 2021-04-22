import React, { Component } from "react";
import { View, StyleSheet, Text, StatusBar, SafeAreaView } from "react-native";

const listScreen = () => {
    return(
        <SafeAreaView style={{marginTop: StatusBar.currentHeight, backgroundColor:"red", flex:1 }}>
            <Text> Lister </Text>
        </SafeAreaView>
    )
};

const Styles = StyleSheet.create({

});

export default listScreen;
