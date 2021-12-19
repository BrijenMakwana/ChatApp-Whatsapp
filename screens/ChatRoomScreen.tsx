import { useRoute } from '@react-navigation/native';
import { StyleSheet ,Image, Text,View,ImageBackground, FlatList} from 'react-native';
import MessageComponent from '../components/MessageComponent';

import Chats from '../assets/WhatsApp Asset Bundle/Chats';

export default function ChatRoomScreen() {
    const route = useRoute();

  return (
    <View style={styles.container}>
        <ImageBackground source={{
            uri: '/Users/brijenmakwana/ChatAppWhatsApp/assets/WhatsApp Asset Bundle/BG.png'
        }} resizeMode="cover" style={styles.image}>
          <FlatList
            data={Chats.messages}
            renderItem={({item})=><MessageComponent chats={item}/>} 
            keyExtractor={item=>item.id}
          />

        </ImageBackground>
    </View>
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
