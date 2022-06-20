import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Card = ({ navigate, item }) => {
  return (
    <View style={styles.cardContainer}>
      <Image 
        style={styles.image}
        source={{uri:item.imageUrl}}/>
        <View style={{padding:8}}>
            <Text style={{fontSize:18}}>
                {item.name}
            </Text>
            <Text>
                50 bikes
            </Text>
            <TouchableOpacity onPress={() => navigate("DetailPage", item)}>
                <View style={styles.button}>
                    <Text>View Location</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    cardContainer:{
        margin:10,
        width:180,
        height:250,
        borderRadius:15,
        backgroundColor:"white",
        shadowColor:"#7F5DF0",
        shadowOffset:{
          width:0,
          height: 10
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation: 5
    },
    image:{
        width:180,
        height:150,
        resizeMode:"cover",
        borderTopRightRadius:15,
        borderTopLeftRadius:15,
    },
    button:{
        padding:8,
        backgroundColor:"#2095F2",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8,
        marginBottom:8,
        marginTop:8,
    }
})