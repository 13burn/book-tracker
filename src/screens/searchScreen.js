import Dialog, { SlideAnimation, DialogContent, DialogFooter, DialogButton } from 'react-native-popup-dialog';
import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ImageBackground, FlatList, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import MainContext from "../context/MainContext";

//import BookView from "../components/BookView";


const searchScreen = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [dialogState, setDialogState] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})
  const context = useContext(MainContext)


  const searcher = (term) => {
    if (term) {
      term = term.replace(" ", "+")
      let url = "https://www.googleapis.com/books/v1/volumes?q=" + term;
      fetch(url)
        .then(response => response.json())
        .then(data =>  context.setSearchList(data.items));


    } else {
      console.log("no term")
    }

  }

  

  const image = require("../../assets/images/Caesar.jpg")


  return (

    <SafeAreaView style={{ flex: 1 }} >
      <ImageBackground
        source={image}
        style={{ height: "100%", width: "100%", flex: 1 }}
      >
        <View
          //this is the search view
          style={{ marginTop: (context.searchList.length > 0) ? "5%" : "20%" }}
        >

          {/* this part of the cde is the search part */}
          <View style={{ width: "80%", alignSelf: "center" }}>
            {/* input container */}
            <View
              style={styles.search}
            >
              <FontAwesome name="search" size={24} color="black"
                style={{ marginRight: 12 }}
              />
              <TextInput
                onChangeText={(text) => {
                  context.setSearchTerm(text)
                }}
                placeholder={"Write a book name"}
              />
            </View>

            {/* buttons container */}
            <View
              style={styles.buttonView}
            >
              <TouchableOpacity
                style={styles.opacity}
                onPress={() => searcher(context.searchTerm)}
                disabled={!context.searchTerm}
              >
                <Text style={{ alignSelf: "center" }}>
                  Search {context.searchTerm.length > 0 ? `for ${context.searchTerm}` : null}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.opacity}
                onPress={() => navigation.navigate("add")}
              >
                <Text style={{ alignSelf: "center" }}>Scan Barcode</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>

        {(context.searchList.length > 0) ?
          <View style={{ margin: "10%", marginBottom: "20%", flex: 1 }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={context.searchList}
              keyExtractor={item => item.id}
              extraData={selectedId}
              renderItem={({item}) => 
              {  return(
                <View style={{flex:1}}>{/* this is the main view */}
                
                <TouchableOpacity
                  onLongPress={() => {
                    setSelectedId(item.id)
                    setSelectedItem(item)
                    
                    console.log("item", item)
                    console.log("selectedItem:", selectedItem)
                    setDialogState(!dialogState)
                  }}
                >
                  <View style={{flexDirection:"row", flex:1, }}>
        
                    <View style={styles.card}>{/* in here goes the pre selected info and the image*/}
                      {/* image goes here */}
                      <View>
        
                        { typeof(item.volumeInfo.imageLinks) == "undefined" || !item.volumeInfo.imageLinks.smallThumbnail ?
                          null
                          : 
                          <Image
                            style={{ height: 65, width: 40, borderRadius:5 }}
                            source={{
                              uri: item.volumeInfo.imageLinks.smallThumbnail
                            }}
                          />}
                      </View>
                      <View style={{margin:5, width:"80%"}}> 
                        <Text numberOfLines={2} style={{flex:1}}>{item.volumeInfo.title}</Text>
                        {item.volumeInfo.authors ?
                          <Text>{item.volumeInfo.authors[0]}</Text>
                          :
                          <Text>Information not available</Text>
        
                        }
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                {/* if the view is selected the info goes here */}
                {/*item.id === selectedId ?null:null*/}
              </View>
            )}
              }
              
            />
          </View> 
          : null}

        <Dialog
          visible={dialogState}
          onTouchOutside={() => {
            setDialogState(!dialogState);
            console.log("dialog closed")
          }}
          dialogAnimation={new SlideAnimation({
            slideFrom: 'bottom',
          })}
        >
          <DialogContent>
            <Text> This is ok </Text>
          </DialogContent>
          <DialogFooter>
            <DialogButton 
              text="Save this book"
              onPress={() =>{
                context.appendData(selectedItem)
                console.log("item:", JSON.stringify( selectedItem))
                
              }}
            />
            <DialogButton 
              text="close"
              onPress={() => {
                setDialogState(false)
              }}
            />
          </DialogFooter>
        </Dialog>
        {/* the modal goes here */}
      </ImageBackground>

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
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  opacity: {
    height: 44,
    width: "45%",
    padding: 12,
    backgroundColor: "rgb(255, 255, 240)",
    borderRadius: 12,
    alignContent: "center",
    justifyContent: "center"
  },
  search: {
    height: 44,
    flexDirection: "row",
    width: "97%",
    padding: 10,
    backgroundColor: "rgba(255, 255, 240, .7)",
    borderRadius: 22,
    alignContent: "center",
    justifyContent: "flex-start",
    margin: "3%"
  },
  card: {
    height: 80,
    backgroundColor: "rgb(255, 255, 240)",
    margin: 3,
    elevation: 3,
    borderRadius: 15,
    padding: 7,
    flex:1,
    flexDirection: "row",

  },
  selectedCard: {
    height: 250,
    backgroundColor: "rgb(137, 207, 240)",
    margin: 3,
    elevation: 3,
    borderRadius: 15,
    padding: 5
  },
  noData: {
    height: 50,
    backgroundColor: "rgb(137, 207, 240)",
    margin: 3,
    elevation: 3,
    borderRadius: 15,
    padding: 5
  }
});

export default searchScreen;