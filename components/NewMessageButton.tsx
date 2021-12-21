import React from 'react';
import {StyleSheet,TouchableOpacity} from 'react-native';


import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';



export default function NewMessageButton(){

    

    return(
        
        // button for new messsage
            <TouchableOpacity style={styles.container}>
               <MaterialIcons name="message" size={24} color="white" />
            </TouchableOpacity>
      
    )

}

const styles = StyleSheet.create({
    container: {
        height: 55,
        width: 55,
        borderRadius: 55,
        backgroundColor: Colors.light.tint,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 30,
        right: 20
       
    },
    
  }); 