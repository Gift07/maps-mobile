import { StyleSheet, Text, View,Dimensions,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from "../../utils/color"

const Detailcard = ({data, navigation, name}) => {
  console.log(data)
  return (
    <View style={styles.cardContiner}>
      <Image style={styles.image} source={{uri:data.imageUrl}}/>
      <View style={{padding:6}}>
        <Text style={{
          fontSize:20,
          fontWeight:"bold",
          color:"gray"
        }}>
          {data.name}
        </Text>
        <Text>
          {name}
        </Text>
        <Text style={{fontSize:14, marginVertical:4}}>
          {`${data.owner.firstname} `+ " " + `${data.owner.lastname}`}
        </Text>
        <View style={[styles.accepted,
           data.is_rented ? 
           {backgroundColor:COLORS.Red} :
            {backgroundColor:COLORS.Green}]}>
          {data.is_rented ? (
            <Text style={{color:"white"}}>
              Taken
            </Text>
          ) : (
            <Text style={{color:"white"}}>
              Available
            </Text>
          )}
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <View style={styles.buton}>
            <Text style={{color:"white"}}>
              Rent The bike
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Detailcard

const styles = StyleSheet.create({
  cardContiner:{
    height:140,
    borderRadius:15,
    backgroundColor:"white",
    flexDirection:"row",
    marginBottom:12,
    shadowColor:"#7F5DF0",
    shadowOffset:{
      width:0,
      height: 10
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation: 5,
  },
  image:{
    width:140,
    height:140,
    borderTopLeftRadius:15,
    borderBottomLeftRadius:15,
    resizeMode:"cover"
  },
  buton:{
    height:30,
    width:120,
    borderRadius:10,
    backgroundColor:COLORS.Blue,
    alignItems:"center",
    justifyContent:"center",
    marginTop:4
  },
  accepted:{
    height:20,
    width:60,
    borderRadius:6,
    alignItems:"center",
    justifyContent:"center"
  }
})