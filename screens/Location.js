import { StyleSheet, Text, View, ScrollView,FlatList,ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

// redux imports 
import { fetchLocation } from '../features/locations/actions';
import { useDispatch, useSelector } from 'react-redux';
import Locationcard from '../components/Location/Locationcard';

const Location = ({navigation}) => {
  const location = useSelector(state => state.location)
  const dispatch = useDispatch()

  React.useEffect(()=>{
    dispatch(fetchLocation())
  },[dispatch])

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{paddingHorizontal:15, margin:10}}>
        <Text style={{fontSize:22, fontWeight:"bold", color:"gray"}}>
          Available Locations
        </Text>
      </View>
      {location.is_loading ? (
        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
            <ActivityIndicator
              animating = {location.is_loading}
              color = "236AD6"
              size = "large"
              style = {styles.activityIndicator}/>
        </View>
      ) : location.error ? (
        <View>
          <Text>{location.error}</Text>
        </View>
      ) : (
        <View style={{paddingHorizontal:15}}>
            <FlatList 
              columnWrapperStyle={{justifyContent:"space-between"}}
              numColumns={2} 
              contentContainerStyle={{
                marginTop:10,
                paddingBottom:50
              }}
              showsVerticalScrollIndicator={false}
              data={location.locations}
              renderItem={({item}) => {
                return <Locationcard data={item} navigation={navigation}/>   
              }}
                  />
        </View>
      )}
    </SafeAreaView>
  )
}

export default Location

const styles = StyleSheet.create({})