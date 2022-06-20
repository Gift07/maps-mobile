import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Bike = ({data}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{uri:data.imageUrl}}/>
      </View>
      <View style={{padding:4}}>
        <Text style={{fontSize:18, fontWeight:"bold", color:"gray"}}>
            {data.name}
        </Text>
        <Text>
            Kimara
        </Text>
        <Text>
            Ramadhan Madega
        </Text>
      </View>
    </View>
  )
}

export default Bike

const styles = StyleSheet.create({
    container:{
        height:100,
        marginTop:8,
        borderRadius:15,
        backgroundColor:"white",
        shadowColor:"#7F5DF0",
        shadowOffset:{
          width:0,
          height: 10
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation: 5,
        flexDirection:"row",
        alignItems:"center"
    },
    image:{
        height:100,
        width:150,
        borderBottomLeftRadius:15,
        borderTopLeftRadius:15,
        resizeMode:"cover"
    }
})