import { useRoute } from '@react-navigation/native';
import { StyleSheet ,Image, Text,View,ImageBackground, FlatList, KeyboardAvoidingView} from 'react-native';
import MessageComponent from '../components/MessageComponent';

import Chats from '../assets/WhatsApp Asset Bundle/Chats';
import MessageInput from '../components/MessageInput';

export default function ChatRoomScreen() {
    const route = useRoute();

  return (
    <KeyboardAvoidingView behavior= "padding" style={styles.container} >

      {/* background */}
        <ImageBackground source={{
            uri: '/Users/brijenmakwana/ChatAppWhatsApp/assets/WhatsApp Asset Bundle/BG.png'
        }} resizeMode="cover" style={styles.image}>
          
          {/* render messages */}
          <FlatList
            data={Chats.messages}
            renderItem={({item})=><MessageComponent chats={item}/>} 
            keyExtractor={item=>item.id}
          />
          <MessageInput/>
        
        </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1
  },
  image:{
    flex: 1,
    
  }
});
