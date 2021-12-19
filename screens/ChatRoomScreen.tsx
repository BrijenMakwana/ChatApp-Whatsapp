import { useRoute } from '@react-navigation/native';
import { StyleSheet ,Image, Text,View} from 'react-native';



export default function ChatRoomScreen() {
    const route = useRoute();

  return (
    <View style={styles.container}>
      <Text>{route.params.name}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
  }
});
