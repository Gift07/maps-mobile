import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity,ActivityIndicator} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

// redux imports'
import { connect } from 'react-redux';
import { authLoaduser, authSignup } from '../../features/auth/actions';

const SignUp = ({signup,load,auth,navigation}) => {
  const [phone,setPhone] = React.useState("")
  const [firstname,setFirstname] = React.useState("")
  const [lastname,setLastname] = React.useState("")
  const [nationalId,setNationalId] = React.useState("")
  const [password,setPassword] = React.useState("")

  React.useEffect(()=>{
    load()
  },[])

  if (auth.is_authenticated) return navigation.navigate("Page")

  if (auth.message) return navigation.navigate("Verify")

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.topContainer}>
        <Text style={{fontSize:30, fontWeight:"bold", color:"#236AD6"}}>
          Welcome back!
        </Text>
        <Text>
          Bikes renting system
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.loginBox}>
          <Text style={{marginLeft:10, fontSize:16, marginTop:12, marginBottom:8, fontWeight:"bold"}}>
            Login into your account
          </Text>
          <TextInput
            onChangeText={(text) => setPhone(text)} 
            style={styles.input}
            value={phone} 
            placeholder='phone number'/>
            <TextInput
            onChangeText={(text) => setFirstname(text)} 
            style={styles.input}
            value={firstname} 
            placeholder='firstname'/>
            <TextInput
            onChangeText={(text) => setLastname(text)} 
            style={styles.input}
            value={lastname} 
            placeholder='lastname'/>
            <TextInput
            onChangeText={(text) => setNationalId(text)} 
            style={styles.input}
            value={nationalId} 
            placeholder='Nida number'/>
          <TextInput 
            onChangeText={(text) => setPassword(text)} 
            style={styles.input} 
            value={password}
            placeholder='password'/>
          <View style={{alignItems:"center", justifyContent:"center", marginVertical:12}}>
            <TouchableOpacity onPress={() => signup({phone,firstname,lastname,nationalId,password})}>
              <View style={styles.button}>
                {auth.is_loading ? (
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                      <ActivityIndicator
                      animating = {auth.is_loading}
                      color = 'white'
                      size = "large"
                      style = {styles.activityIndicator}/>
                      <Text style={{marginLeft:4, fontSize:18, color:"white"}}>
                        Loading...
                      </Text>
                  </View>
                ) : (
                  <Text style={{color:"white", fontSize:16}}>
                    SIGN UP
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems:"center", justifyContent:"center", marginVertical:10}}>
        <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
          <Text>
            Already have an account? SignIn!
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  )
}

const mapStateToProps = (state) =>{
  return{
    auth:state.auth
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    load: () => dispatch(authLoaduser()),
    signup: (body) => dispatch(authSignup(body))
  }
}
let SignUpContainer = connect(mapStateToProps,mapDispatchToProps)(SignUp)

export default SignUpContainer


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topContainer:{
    height:200,
    alignItems:"center",
    justifyContent:"center"
  },
  inputContainer:{
    alignItems:"center",
    justifyContent:"center"
  },
  loginBox:{
    width: Math.ceil((Dimensions.get('window').width) -30),
    padding:5,
    borderRadius:15,
    backgroundColor:"white"
  },
  input:{
    height:50,
    margin:8,
    borderRadius:14,
    padding:4,
    backgroundColor:"lightgray"
  },
  button:{
    height:40,
    width:250,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:15,
    backgroundColor:"#236AD6"
  }
})