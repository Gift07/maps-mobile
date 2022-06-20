import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity,ActivityIndicator} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

// redux imports'
import { connect } from 'react-redux';
import { authLoaduser,authSignin } from '../../features/auth/actions';

const Login = ({login,load,auth,navigation}) => {
  const [phone,setPhone] = React.useState("")
  const [password,setPassword] = React.useState("")

  React.useEffect(()=>{
    load()
  },[])

  if (auth.is_authenticated) return navigation.navigate("Page")

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
            onChangeText={(text) => setPassword(text)} 
            style={styles.input} 
            value={password}
            placeholder='password'/>
          <View style={{alignItems:"center", justifyContent:"center", marginVertical:12}}>
            <TouchableOpacity onPress={() => login({phone,password})}>
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
                    Login
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{alignItems:"center", justifyContent:"center", marginVertical:10}}>
        <TouchableOpacity onPress={()=> navigation.navigate("SignUp")}>
          <Text>
            Dont have an account? SignUp!
          </Text>
        </TouchableOpacity>
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
    login: (body) => dispatch(authSignin(body))
  }
}
let LoginContainer =  connect(mapStateToProps,mapDispatchToProps)(Login)

export default LoginContainer


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