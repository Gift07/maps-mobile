import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import COLORS from '../utils/color'

const Lister = ["AddBikes", "renteBikes", "rent"]

// redux imports 
import {authLoaduser} from "../features/auth/actions"
import {useDispatch,useSelector} from "react-redux"

const Profile = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const auth = useSelector(state => state.auth)

  const dispatch = useDispatch()

  React.useEffect(()=>{
    dispatch(authLoaduser())
  },[dispatch])

  return (
    <View style={{flex:1}}>
      <View style={styles.topContainer}/>
      <View style={styles.imageContainer}>
        <View style={styles.image}>
          <Text style={{fontSize:24, position:"absolute",left:12,bottom:12}}>
            {auth.firstname.charAt(0)}
          </Text>
        </View>
        <View style={{marginTop:50}}>
          <Text>{`${auth.firstname}` +" "+ `${auth.lastname}`}</Text>
          <Text style={{textAlign:"center"}}>{auth.phone}</Text>
        </View>
      </View>
      <View style={styles.lister}>
        {Lister.map((item, index)=>(
          <TouchableOpacity key={index} onPress={() => setSelectedIndex(index)}>
            <Text style={[styles.text,
              selectedIndex === index && styles.categoryTextSelected ]}>
                {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>

      </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  topContainer:{
    height:150,
    backgroundColor:"#236AD6"
  },
  imageContainer:{
    height:70,
    alignItems:"center",
    justifyContent:"center"
  },
  image:{
    height:56,
    width:56,
    borderRadius:28,
    backgroundColor:"white",
    borderWidth:3,
    borderColor:"#236AD6",
    position:"absolute",
    top:-20
  },
  lister:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginTop:16
  },
  text:{
    marginHorizontal:5,
    textTransform:'uppercase',
    fontSize:16,
    fontWeight:"bold",
    color:"gray"
  },
  categoryTextSelected:{
    color:COLORS.green,
    paddingBottom:5,
    borderBottomWidth:2,
    borderColor:COLORS.Blue
}
})