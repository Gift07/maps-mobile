import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import { Ionicons, EvilIcons,SimpleLineIcons } from '@expo/vector-icons';
import Location from './screens/Location';
import Home from './screens/Home';
import Travels from './screens/Travels';
import Profile from './screens/Profile';
import LoginContainer from './screens/auth/Login';
import SignUp from './screens/auth/SignUp';
import Verify from './screens/auth/Verify';
import Detail from './screens/Detail';
import Cart from './screens/Cart';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { 
          position: 'absolute',
          bottom:25,
          left:20,
          right:20,
          elevatio:0,
          backgroundColor:"white",
          borderRadius:15,
          height:90,
          ...styles.shadow 
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:"center", justifyContent:"center"}}>
            <Ionicons name="md-home-outline" size={22} color={focused ? "#6E5DCF" : "black"} />
            <Text style={{color:focused ? "#6E5DCF" : "black", fontSize:12}}>Home</Text>
          </View>
        ),
        headerShown:false
      }} />
      <Tab.Screen name="Location" component={Location} options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:"center", justifyContent:"center"}}>
            <Ionicons name="md-location-outline" size={22} color={focused ? "#6E5DCF" : "black"} />
            <Text style={{color:focused ? "#6E5DCF" : "black", fontSize:12}}>Location</Text>
          </View>
        ),
        headerShown:false
      }}/>
      <Tab.Screen name="Travels" component={Travels}  options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:"center", justifyContent:"center"}}>
            <SimpleLineIcons name="handbag" size={22} color={focused ? "#6E5DCF" : "black"} />
            <Text style={{color:focused ? "#6E5DCF" : "black", fontSize:12}}>Travels</Text>
          </View>
        ),
        headerShown:false
      }}/>
      <Tab.Screen name="Profile" component={Profile}  options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:"center", justifyContent:"center"}}>
            <EvilIcons name="user" size={30} color={focused ? "#6E5DCF" : "black"} />
            <Text style={{color:focused ? "#6E5DCF" : "black", fontSize:12}}>Profile</Text>
          </View>
        ),
        headerShown:false
      }}/>
    </Tab.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Page" component={MyTabs} options={{headerShown:false}} />
      <Stack.Screen name="Login" component={LoginContainer} options={{headerShown:false}}/>
      <Stack.Screen name="Verify" component={Verify} options={{headerShown:false}}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
      <Stack.Screen name="DetailPage" component={Detail} options={{headerShown:false}}/>
      <Stack.Screen name="Cart" component={Cart} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default MyStack

const styles = StyleSheet.create({
  shadow:{
    shadowColor:"#7F5DF0",
    shadowOffset:{
      width:0,
      height: 10
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation: 5
  }
})