import React, { useContext } from "react"
import {View,Text, StyleSheet, TouchableOpacity} from "react-native"
import MainContext from  "../context/MainContext"



const BookView = ( data) => {
    console.log("--------------------------------------------------------------------")
    console.log("context: ",  data)

    return(
        
      <View style={styles.card}>
        
        
      {data.item.id === selectedId ?
        null
        :
        null
      }
      {data.item.volumeInfo.description ?
            <View style={styles.selectedCard}>
              <ScrollView
                style={{ height: 200, margin:10}}
              >

                <Text style={{height:200}}>{data.item.volumeInfo.description}</Text>
              </ScrollView>
            </View>
            :
            <View style={styles.noData}>
              <ScrollView
                style={{ height: 40 }}
              >

                <Text>No description available</Text>
              </ScrollView>
            </View>

          }
    </View>





  
        
    )
}

const styles = StyleSheet.create({
    card:{
        height:50, 
        backgroundColor: "rgb(255, 255, 240)",
        margin:3,
        elevation:3,
        borderRadius:15,
        padding:5
    }
})

export default BookView;