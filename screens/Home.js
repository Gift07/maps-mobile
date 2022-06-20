import React from 'react';
import { StyleSheet, Text, View,Image, TextInput,ScrollView,ActivityIndicator, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EvilIcons } from '@expo/vector-icons';
import Card from '../components/Home/Card';
import Bike from '../components/Home/bike';

// // redux imports
import { fetchBikes } from '../features/bikes/action';
import { fetchLocation } from '../features/locations/actions';
import { authLoaduser } from '../features/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../utils/color';

const Home = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch()
  const locations = useSelector(state => state.location)

  const auth = useSelector((state)=> state.auth)
 console.log(auth)
  const bikes = useSelector(state => state.bikes)

  React.useEffect(()=>{
    dispatch(fetchLocation())
    dispatch(fetchBikes())
  },[dispatch])

  React.useEffect(()=>{
    dispatch(authLoaduser())
  },[dispatch])

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.firstView}>
        <Text style={{fontSize:14}}>Bikes renting</Text>
        <View style={styles.profileView}>
          {auth.is_authenticated ? (
            <Image 
              style={styles.profilePhoto} 
              source={require('../assets/jona.jpg')} />
          ): (
            <TouchableOpacity onPress={() => navigate("Login")}>
              <View style={styles.loginButton}>
                <Text style={{color:"white"}}>
                  Login
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.secondView}>
        <Text style={styles.welcomeText}>Hello,Madega</Text>
        <Text style={styles.boldtext}>Where are you going today!</Text>
      </View>
      <View style={styles.textView}>
        <TextInput
        style={styles.input}
        placeholder="Search in Locations"
        />
        <EvilIcons name="search" size={28} color="black" />
      </View>
      <ScrollView style={styles.thirdView} showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.lister}>
            <Text style={{fontSize:23, fontWeight:"bold", color:"gray"}}>
              Top Locations
            </Text>
            <View style={styles.moreContainer}>
              <Text style={{color:"white"}}>
                More
              </Text>
              <MaterialIcons name="arrow-right" size={18} color="white" />
            </View>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {locations.is_loading ? (
              <View style={{height:200, width:"100%", alignItems:"center", justifyContent:"center"}}>
                  <ActivityIndicator
                  animating = {locations.is_loading}
                  color = "236AD6"
                  size = "large"
                  style = {styles.activityIndicator}/>
              </View>
            ) : locations.error ? (
              <View>
                <Text>
                  {error.message}
                </Text>
              </View>
            ):(
              locations.locations.map((item) => <Card item={item} key={item._id} navigate={navigate}/>)
            )}
          </ScrollView>
        </View>
        <View style={{marginBottom:130}}>
        <View style={styles.lister}>
          <Text style={{fontSize:23, fontWeight:"bold", color:"gray"}}>
            Most rented
          </Text>
          <View style={styles.moreContainer}>
            <Text style={{color:"white"}}>
              More
            </Text>
            <MaterialIcons name="arrow-right" size={18} color="white" />
          </View>
        </View>
        <View>
          {bikes.is_loading ? (
            <View style={{height:200, width:"100%", alignItems:"center", justifyContent:"center"}}>
              <ActivityIndicator
                animating = {bikes.is_loading}
                color = "236AD6"
                size = "large"
                style = {styles.activityIndicator}/>
            </View>
          ): bikes.error ? (
            <View>
              <Text>
                {error.message}
              </Text>
            </View>
          ) : ( bikes.bikes.map((d) => <Bike data={d} key={d._id}/>))}
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  firstView:{
    paddingHorizontal:20,
    marginTop:10,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  profileView:{
    width:35,
    height:35,
    borderRadius:15
  },
  profilePhoto:{
    width:35,
    height:35,
    borderRadius:15,
    resizeMode:'cover'
  },
  secondView:{
    marginTop:5,
    paddingHorizontal:20,
  },
  welcomeText:{
    fontSize:24
  },
  boldtext:{
    fontSize:24,
    fontWeight:"bold",
    color:"#6E5DCF"
  },
  textView:{
    margin:12,
    padding:5,
    alignItems:"center", 
    paddingHorizontal:20,
    flexDirection:'row',
    backgroundColor:"lightgray",
    borderRadius:12
  },
  input: {
    height:40,
    backgroundColor:"lightgray",
    padding:10,
    flex:1
  },
  thirdView:{
    height:300,
    paddingHorizontal:20
  },
  moreContainer:{
    backgroundColor:"#236AD6",
    flexDirection:"row",
    alignItems:"center",
    height:25,
    padding:4,
    borderRadius:12
  },
  lister:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  activityIndicator: {
    color:"#236AD6",
    height: 80
 },
 loginButton:{
  height:28,
  width:52,
  marginRight:5,
  borderRadius:8,
  backgroundColor:"#236AD6",
  alignItems:"center",
  justifyContent:"center"
 }
});