import { StyleSheet ,Text, FlatList,View} from 'react-native';
import ChatListItem from '../components/ChatListItem';

import ChatRooms from '../assets/WhatsApp Asset Bundle/ChatRooms';
import NewMessageButton from '../components/NewMessageButton';



export default function ChatScreen() {
  
  

  return (
    <View style={styles.container}>

      {/* render all the chats */}
      <FlatList
        data={ChatRooms}
        renderItem={({ item })=>(
          <ChatListItem chatRoom={item}/>
        )}
        keyExtractor={item=>item.id}
        
      />
      <NewMessageButton/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
 
});
