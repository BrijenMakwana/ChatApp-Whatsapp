
import { StyleSheet ,Image, Text,View} from 'react-native';
import { LastMessage } from '../types';
import moment from 'moment';

export type MessageComponentProps ={
    chats: LastMessage
}

export default function MessageComponent(props: MessageComponentProps) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.chats.user.name}</Text>
      <Text style={styles.message}>{props.chats.content}</Text>
      <Text style={styles.time}>{moment(props.chats.createdAt).format("HH:mm")}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding:10,
    width: "75%",
    borderRadius: 7,
    marginLeft: 15,
    marginVertical: 5
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
