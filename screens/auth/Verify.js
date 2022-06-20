import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import COLORS from "../../utils/color"

// redux import 
import {connect} from "react-redux"
import { authVerifyuser, authLoaduser } from '../../features/auth/actions';

const Verify = ({load,verify,auth, navigation}) => {
  const [verificationCode, setVerificatiobCode] = React.useState("")

  React.useEffect(()=>{
    load()
  },[])

  if(auth.is_authenticated) return navigation.navigate("Page")

  return (
    <SafeAreaView style={{flex:1}}>
     <View>
      <Text>Verify your account</Text>
      <View>
      <TextInput
          onChangeText={(text) => setVerificatiobCode(text)} 
          style={styles.input}
          value={nationalId} 
          placeholder='Enter verification code'/>
      </View>
      <TouchableOpacity onPress={() => dispatch(verify({verificationCode}))}>
        <View style={styles.button}>
          {auth.is_loading ? (
            <View style={{flexDirection:"row", alignItems:"center"}}>
              <ActivityIndicator
                animating = {is_loading}
                color = 'white'
                size = "large"
                style = {styles.activityIndicator}/>
              <Text style={{marginLeft:4}}>
                  Loading...
              </Text>
            </View>
          ):(
          <Text>
            Verify account
          </Text>
        )}
        </View>
      </TouchableOpacity>
      <Text>Did not get verification code ? contact support</Text>
     </View>
    </SafeAreaView>
  )
}

const mapStateToProps = state =>{
  return {
    auth:state.auth
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    load: () => dispatch(authLoaduser()),
    verify:() => dispatch(authVerifyuser())
  }
}

let VerifyComponent = connect(mapStateToProps, mapDispatchToProps)(Verify)

export default VerifyComponent

const styles = StyleSheet.create({
  input:{
    height:50,
    margin:8,
    borderRadius:14,
    padding:4,
    backgroundColor:"lightgray"
  },
  button:{
    width: Math.ceil(Dimensions -  100),
    height:35,
    borderRadius:12,
    backgroundColor:COLORS.Blue
  }
})