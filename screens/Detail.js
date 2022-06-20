import { StyleSheet,
     Text, View,Image,
     FlatList, TouchableOpacity,
      ScrollView,
       ActivityIndicator,
    Dimensions
    } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'

// redux imports
import { connect } from 'react-redux';
import { authLoaduser } from '../features/auth/actions';
import { fetchLocationId } from '../features/locations/actions';
import Detailcard from '../components/Location/Detailcard';

const Detail = ({navigation, route, load,getLocation, auth,location:{location,bikes}}) => {
    const id = route.params._id

    React.useEffect(()=>{
        getLocation(id)
        load()
    },[id])

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={{position:"absolute"}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.arrow}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </View>
            </TouchableOpacity>
        </View>
        <Image 
            style={styles.image}
            source={{uri:location.imageUrl}}/>
      </View>
      <View style={{paddingHorizontal:20, marginTop:6}}>
        <View>
            <Text style={{fontSize:20, fontWeight:"bold", color:"gray"}}>
                Available Bikes
            </Text>
        </View>
        <ScrollView style={styles.thirdView} showsVerticalScrollIndicator={false}>
            {location.is_loading ? (
                <ActivityIndicator/>
            ): location.bikes.map((item)=> (
            <Detailcard 
                key={item._id} 
                data={item} 
                name={location.name}
                navigation={navigation}/>))
            }    
        </ScrollView>
      </View>
    </View>
  )
}

const mapStateToProps = (state) =>{
    return {
        location:state.location,
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        getLocation: (id) => dispatch(fetchLocationId(id)),
        load: () => dispatch(authLoaduser())
    }
}

let DetailContainer =  connect(mapStateToProps, mapDispatchToProps)(Detail)

export default DetailContainer

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    arrow:{
        height:34,
        width:34,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white",
        borderRadius:17,
        top:28,
        left:20,
        zIndex:1000
    },
    image:{
        width:"100%",
         height:Math.ceil((Dimensions.get('window').height)* 0.4),
          resizeMode:"cover",
          borderBottomRightRadius:18,
          borderBottomLeftRadius:18,
          zIndex:-5
    },
    thirdView:{
     height:Math.ceil((Dimensions.get('window').height)* 0.6) 
    }
})