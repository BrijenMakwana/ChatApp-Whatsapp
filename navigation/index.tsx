/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable,View ,Text,Image} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import ChatScreen from '../screens/ChatScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import { Ionicons,MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ContactScreen from '../screens/ContactScreen';



export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();



function RootNavigator() {

  const navigation = useNavigation();
  

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {backgroundColor:Colors.light.tint},
      headerTintColor: Colors.light.background,
      headerTitleStyle: {
        fontWeight:"bold"
      },
      headerTitleAlign:"left",
      headerShadowVisible: false
    }}>
      <Stack.Screen name="Root" component={MainTabNavigator} options={{ 
         title:"WhatsApp",
         headerRight: ()=>(
           <View style={{
             flexDirection:"row",
             width:60,
             justifyContent:"space-between"
             }}>
             <Ionicons name="search" size={22} color={Colors.light.background}/>
             <MaterialCommunityIcons name="dots-vertical" size={22} color={Colors.light.background} />
           </View>
         )

          
        }} />
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} options = {({ route }) =>({ 

          title: "",
          headerLeft: ()=>(
            <View style={{flexDirection: "row",alignItems:"center"}}>
              <Ionicons name="arrow-back" size={24} color={Colors.light.background} onPress={()=>navigation.goBack()}/>
              <Image
                source={{
                  uri: route.params.imageUri
                }}
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 30,
                  marginRight:10
                }}
              />
              <View style={{justifyContent:"center"}}>
                <Text style={{color:"white",fontWeight:"bold",fontSize:15}}>{route.params.name}</Text>
              </View>
            </View>
          ),
          headerRight: ()=>(
            <View style={{
              flexDirection:"row",
              width:130,
              justifyContent: "space-between",
              alignItems: "center",
              
            }}>
              <Ionicons name="videocam" size={24} color={Colors.light.background} />
              <Ionicons name="md-call" size={24} color={Colors.light.background} />
              <MaterialCommunityIcons name="dots-vertical" size={24} color={Colors.light.background}/>
            </View>
          )
       })} />
       <Stack.Screen name="Contact" component={ContactScreen} options={{
         title: "Select contact",
         headerBackTitleVisible: false,
         headerTitleAlign: "left"
       }}/>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const MainTab = createMaterialTopTabNavigator<RootTabParamList>();

function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tabIconSelected,
        tabBarStyle: { backgroundColor: Colors[colorScheme].tint },
        tabBarLabelStyle: { fontWeight:"bold",fontSize:13 },
        tabBarIndicatorStyle:{borderColor:Colors[colorScheme].background,borderWidth:1.5},
        tabBarContentContainerStyle:{height:55},
      
      }}>
      <MainTab.Screen
        name="Camera"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'Camera'>) => ({
          tabBarIcon: ({ color }) => <FontAwesome name="camera" size={18} color={color} />,
          tabBarShowLabel: false,
        })}
      />
      <MainTab.Screen 
        name="Chats"
        component={ChatScreen}
        options={{
          title: 'CHATS',
        }}
      />
      <MainTab.Screen
        name="Status"
        component={TabOneScreen}
        options={{
          title: 'Status',
        }}
      />
      <MainTab.Screen
        name="Calls"
        component={TabOneScreen}
        options={{
          title: 'Calls',
        }}
      />
    </MainTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

