import React from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions, Text } from "react-native";

const {width} = Dimensions.get("screen")

const TabBar = ({state, navigation,info}) => {
    return(
        <View style={Styles.wraper }>
            <TouchableOpacity 
            style={Styles.searcher}
            onPress={() => navigation.navigate("Transition")}
            >
                <Text style={{alignSelf:"center"}}>Search Books</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={Styles.list}
            onPress={() => navigation.navigate("BookList")}
            >
                <Text style={{alignSelf:"center"}}>My Books</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const Styles = StyleSheet.create({
    wraper:{
        position:"absolute",
        bottom:35,
        width:"90%",
        alignSelf:"center",
        height:30,
        flexDirection:"row",
        alignContent:"center",
        
    },
    searcher:{
        height:44,
        width:200,
        borderBottomLeftRadius:22,
        borderTopLeftRadius:22,
        flex:1,
        justifyContent:"center",
        margin:1,
        backgroundColor:"rgba(255, 255, 240, .7)",
        elevation:1

    },
    
    list:{
        height:44,
        width:200,
        borderBottomRightRadius:22,
        borderTopRightRadius:22,
        flex:1,
        justifyContent:"center",
        elevation:1,
        margin:1,
        backgroundColor:"rgba(255, 255, 240, .7)",
    }
})

export default TabBar;