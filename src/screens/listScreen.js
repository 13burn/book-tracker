import React, { useState } from "react";
import { Button, StyleSheet, Text, SafeAreaView, ImageBackground, FlatList } from "react-native";
import { useContext } from "react/cjs/react.development";
import Constants from 'expo-constants';
import MainContext from "../context/MainContext"


//for later
//marginTop:StatusBar.currentHeight

const listScreen = () => {
    const context = useContext(MainContext);
    const image = require("../../assets/images/unam.jpeg");
    console.log("bookList: ",context.bookList)

    return (
        <SafeAreaView style={{ flex: 1, marginTop:Constants.statusBarHeight}}>
            <Button
                    title="clear"
                    onPress={context.storeData}
                />
            <ImageBackground source={image} style={{ height: "100%", width: "100%", flex: 1 }}>
                <FlatList
                    data={context.bookList}
                    renderItem={() => {
                        return(
                            <Text>this is a book</Text>
                        )
                    }}
                />
                
            </ImageBackground>
        </SafeAreaView>
    )
};

const Styles = StyleSheet.create({
    text:{
        marginTop:0
    }
});

export default listScreen;
