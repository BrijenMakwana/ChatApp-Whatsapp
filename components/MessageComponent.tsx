
import { StyleSheet ,Image, Text,View} from 'react-native';
import { LastMessage } from '../types';
import moment from 'moment';

export type MessageComponentProps ={
    chats: LastMessage
}

export default function MessageComponent(props: MessageComponentProps) {
  
  const isMyMessage = () =>{
    return props.chats.user.id === "u1"
  }

  return (
    <View style={[styles.container,{
      backgroundColor: isMyMessage() ? "#DCF8C5" : "white"
    },{
      marginLeft: isMyMessage() ? 82 : 15
    }]}>
      {!isMyMessage() && <Text style={styles.name}>{props.chats.user.name}</Text>}
      <Text style={styles.message}>{props.chats.content}</Text>
      <Text style={styles.time}>{moment(props.chats.createdAt).format("HH:mm")}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    width: "75%",
    borderRadius: 7,
    marginVertical: 5,
   
  },
  name:{
    color: "#75C0BD",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 3
  },
  message:{
    fontSize:18
  },
  time:{
    color: "gray",
    textAlign: "right"
  }
});
