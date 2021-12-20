import React, { useState } from 'react';
import {View,Text,StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { MaterialIcons, Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';




export default function MessageInput(){
    const [input,setInput] = useState("");
    
    return(
      
            <View style={styles.container}>

                {/* white container */}
                <View style={styles.input}>
                    <Entypo name="emoji-happy" size={24} color="grey" />
                    <TextInput 
                        placeholder='Type a message'
                        style={styles.inputText}
                        onChangeText={(text)=>setInput(text)}
                        value={input}
                        multiline
                    />
                    {/* icons */}
                    <View style={styles.inputIcons}>
                        <Entypo name="attachment" size={24} color="grey" />
                        {/* camera icon will dissappear when user starts typing */}
                        {!input && <MaterialCommunityIcons name="camera" size={24} color="grey" />}
                    </View>
                </View>

                {/* send and audio buttons */}
                <TouchableOpacity>
                    <View style={styles.button}>
                        {/* if user types anything, mic icon will change to send icon */}
                        { input ? <Ionicons name="send" size={22} color="white" /> : <MaterialIcons name="mic" size={24} color="white"/>}
                    </View>
                </TouchableOpacity>    
               
            </View>
       
    )

}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
        padding: 5
    
    },
    input:{
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 50,
        height: "100%",
        alignItems: "center"
    },
    inputText:{
       flex: 1,
       marginLeft: 10
    },
    inputIcons:{
        flexDirection: "row",
        width: 90,
        justifyContent: "space-around"
    },
    button:{
        backgroundColor: "#0C6157",
        width: 50,
        height: 50,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5
    }
  }); 