import React from 'react';
import {View,Text,StyleSheet,Image, TouchableNativeFeedback} from 'react-native';
import { ChatRoom, User } from '../types';
import { useNavigation } from '@react-navigation/native';

export type ContactItemProps = {
    user: User
}

export default function ContactItem(props: ContactItemProps){

    const navigation = useNavigation();

    

    return(
        <TouchableNativeFeedback>
            <View style={styles.container}>

                {/* Avatar */}
                <Image source={{
                        uri: props.user.imageUri
                    }}
                    style={styles.avatar}
                />

                {/* user name and status */}
                <View style={styles.chatContainer}>
                    <Text style={styles.name}>{props.user.name}</Text>
                    <Text style={styles.status} numberOfLines={1}>{props.user.status}</Text>
                </View>

                
            </View>
        </TouchableNativeFeedback>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        justifyContent:"space-between",
        padding:15,
        borderBottomWidth:0.5,
        borderBottomColor:"lightgrey"
       
    },
    avatar: {
        height:55,
        width:55,
        borderRadius:55,
        marginHorizontal:2
    },
    chatContainer:{
        justifyContent:"space-around",
        flex:1,
        marginLeft:15,
        
    },
    name:{
        fontSize:19,
        fontWeight:"700"
    },
    status:{
        fontSize:15,
        color:"grey"
    }
  }); 