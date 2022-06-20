import { StyleSheet, Text, View, Dimensions,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Locationcard = ({data, navigation}) => {
  console.log(data)
  return (
    <View style={styles.card}>
      <View>
        <Image source={{uri:data.imageUrl }} style={styles.image}/>
      </View>
      <View style={{marginLeft:5, marginTop:4}}>
        <Text style={{fontSize:18, fontWeight:"bold", color:"gray"}}>
          {data.name}
        </Text>
        <Text>
          50 bikes
        </Text>
      </View>
      <View style={{marginTop:8, alignItems:"center", justifyContent:"center"}}>
        <TouchableOpacity onPress={() => navigation.navigate("DetailPage", data)}>
          <View style={styles.button}>
            <Text style={{color:"white"}}>
              View Location
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Locationcard

const styles = StyleSheet.create({
  card :{
    width: Math.ceil(((Dimensions.get('window').width)-40) / 2),
    height: 250,
    borderRadius: 15,
    backgroundColor:"white",
  },
  image:{
    width: Math.ceil(((Dimensions.get('window').width)-40) / 2),
    height: 130,
    resizeMode:"cover",
    borderTopLeftRadius:15,
    borderTopRightRadius: 15
  },
  button:{
    height:30,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:15,
    width: Math.ceil(((Dimensions.get('window').width)-60) / 2),
    backgroundColor:"#236AD6"
  }
})