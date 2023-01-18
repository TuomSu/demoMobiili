import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import { useState } from 'react';
import {Image} from 'react-native';



export default function App() {

const [text, setText] = useState('')

const pressed = () => {
  Alert.alert('You typed' + text)
};

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: 'https://www.sttinfo.fi/data/images/00304/be7db042-6b61-49f9-9bcd-7fd41b7bc35d.jpg'}} />
     <TextInput
     style={styles.input}
     onChangeText={text => setText(text)}
     value={text}
     />
      <Button title="Press me" onPress={pressed}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{ width:200, 
    height: 100
  },
  input:{ width:200, 
    borderColor:'grey', 
    borderWidth: 1
  },

});
