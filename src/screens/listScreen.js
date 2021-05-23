import React, { useState } from "react";
import HTMLView from 'react-native-htmlview';
import Dialog, { SlideAnimation, DialogContent, DialogFooter, DialogButton, DialogTitle } from 'react-native-popup-dialog';
import { Button, StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity, FlatList } from "react-native";
import { useContext } from "react/cjs/react.development";
import Constants from 'expo-constants';
import MainContext from "../context/MainContext"


//for later
//marginTop:StatusBar.currentHeight

const listScreen = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [selectedItem, setSelectedItem] = useState({})
    const [dialState, setDialState] = useState(false)
    const context = useContext(MainContext);
    const image = require("../../assets/images/unam.jpeg");
    //context.getData()

    return (
        <SafeAreaView style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
            <Button
                title="clear"
                onPress={() => context.storeData([])}
            />
            <ImageBackground source={image} style={{ height: "100%", width: "100%", flex: 1 }}>
                <FlatList
                    data={context.bookList}
                    renderItem={({ item }) => {
                    extraData={selectedId}
                        return (

                            <View style={{ flex: 1 }}>{/* this is the main view */}

                                <TouchableOpacity
                                    onLongPress={() => {
                                        setSelectedId(item.id)
                                        setSelectedItem(item)
                                        //console.log("item", item)
                                        //console.log("selectedItem:", selectedItem)
                                        setDialState(!dialState)
                                    }}
                                >
                                    <View style={{ flexDirection: "row", flex: 1, }}>

                                        <View style={styles.card}>{/* in here goes the pre selected info and the image*/}
                                            {/* image goes here */}
                                            <View>

                                                {typeof (item.volumeInfo.imageLinks) == "undefined" || !item.volumeInfo.imageLinks.smallThumbnail ?
                                                    <Image
                                                        style={{ height: 65, width: 40, borderRadius: 5 }}
                                                        source={require("../../assets/images/NA1.jpg")}
                                                    />
                                                    :
                                                    <Image
                                                        style={{ height: 65, width: 40, borderRadius: 5 }}
                                                        source={{
                                                            uri: item.volumeInfo.imageLinks.smallThumbnail
                                                        }}
                                                    />}
                                            </View>
                                            <View style={{ margin: 5, width: "80%" }}>
                                                <Text numberOfLines={2} style={{ flex: 1 }}>{item.volumeInfo.title}</Text>
                                                {item.volumeInfo.authors ?
                                                    <Text>{item.volumeInfo.authors[0]}</Text>
                                                    :
                                                    <Text>No author informaton available</Text>

                                                }
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                {/* if the view is selected the info goes here */}
                                {/*item.id === selectedId ?null:null*/}
                            </View>
                        )
                    }
                    }



                />

                <Dialog
                    visible={dialState}
                    onTouchOutside={() => {
                        setDialogState(!dialState);
                        console.log("dialog closed")
                        //console.log("selected Item:", selectedItem)
                    }}
                    dialogAnimation={new SlideAnimation({
                        slideFrom: 'bottom',
                    })}
                >
                    <DialogContent>
                        {selectedItem.volumeInfo ?
                            <View>

                                <DialogTitle
                                    title={selectedItem.volumeInfo.title}
                                />
                                {selectedItem.searchInfo?
                                    <HTMLView
                                    value={selectedItem.searchInfo.textSnippet}
                                />
                                :
                                <Text>No description available</Text>
                                }
                                


                            </View>
                            :
                            <Text>nothing here yet</Text>
                        }
                    </DialogContent>
                    <DialogFooter>
                        <DialogButton
                            text="Save this book"
                            onPress={() => {
                                //context.appendData(selectedItem)
                                //console.log("item:", selectedItem)
                                setDialState(false)

                            }}
                        />
                        <DialogButton
                            text="close"
                            onPress={() => {
                                setDialState(false)
                            }}
                        />
                    </DialogFooter>
                </Dialog>

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
        flex: 1,
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

export default listScreen;
