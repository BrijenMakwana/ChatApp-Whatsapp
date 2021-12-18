import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import { ChatRoom } from '../types';
import moment from 'moment';

export type ChatListItemProps = {
    chatRoom: ChatRoom
}

export default function ChatListItem(props: ChatListItemProps){

    return(
        <View style={styles.container}>
            <Image source={{
                    uri: props.chatRoom.users[1].imageUri
                }}
                style={styles.avatar}
            />
            <View style={styles.chatContainer}>
                <Text style={styles.name}>{props.chatRoom.users[1].name}</Text>
                <Text style={styles.message} numberOfLines={1}>{props.chatRoom.lastMessage.content}</Text>
            </View>
            <Text style={styles.time}>{moment(props.chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        justifyContent:"space-between",
        padding:15,
       
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
    message:{
        fontSize:15,
        color:"grey"
    },
    time:{
        fontSize:15,
        color:"grey",
    }
  }); 