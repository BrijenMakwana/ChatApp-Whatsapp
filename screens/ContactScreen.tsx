import { StyleSheet ,Text, FlatList,View} from 'react-native';


import Users from '../assets/WhatsApp Asset Bundle/Users';

import ContactItem from '../components/ContactItem';



export default function ContactScreen() {
  
  

  return (
    <View style={styles.container}>

      {/* render all the Contacts of users */}
      <FlatList
        data={Users}
        renderItem={({item})=><ContactItem user={item}/>}
        keyExtractor={item=>item.id}
      />
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
 
});
