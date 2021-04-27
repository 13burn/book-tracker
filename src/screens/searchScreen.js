import axios from "axios";
import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, SafeAreaView, StatusBar, TextInput, TouchableOpacity, Modal } from "react-native";
import MainContext from  "../context/MainContext"



const searchScreen = ({navigation}) => {
  const searcher = (term) => {
    if (term){
      term = term.replace(" ", "+")
      let url = "https://www.googleapis.com/books/v1/volumes?q=" + term;
      console.log(url)
      fetch(url)
      .then(response => response.json())
      .then(data => console.log(data));
      
    }else{
      console.log("no term")
    }

  }

  const context = useContext(MainContext)
  console.log("searchScreen", navigation)
  const [modalState, setModalState] = useState(false)
  
  

    return(

        <SafeAreaView style={{marginTop:StatusBar.currentHeight, flex:1}} >
            <Text> Searcher </Text>
            {/* this part of the cde is the search part */}
            <View style={{width:"80%"}}>
                <TextInput 
                  onChangeText={(text) => {
                    context.setSearchTerm(text)
                  }}
                />
                <View>
                    <TouchableOpacity
                      onPress={() => searcher(context.searchTerm)}
                    >
                        <Text>Search</Text>
                    </TouchableOpacity>
                    {/* 
                      <TouchableOpacity
                          onPress={() => setModalState(!modalState)}
                      >
                          <Text>Scan Barcode</Text>
                      </TouchableOpacity>
                     */}
                </View>
            </View>
            {/* the modal goes here */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalState}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalState);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalState(!modalState)}
                    >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </Modal>
            {/* the list goes here  */}
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
});

export default searchScreen;