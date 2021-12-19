import { StyleSheet ,Image, FlatList,View} from 'react-native';
import ChatListItem from '../components/ChatListItem';

import ChatRooms from '../assets/WhatsApp Asset Bundle/ChatRooms';



export default function ChatScreen() {
  
  

  return (
    <View style={styles.container}>
      <FlatList
        data={ChatRooms}
        renderItem={({ item })=>(
          <ChatListItem chatRoom={item}/>
        )}
        keyExtractor={item=>item.id}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
  avatar: {
    height:30,
    width:30
  },
});
