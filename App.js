import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text>Show</Text>
        </View>  
      <View style={styles.view2}>
      <Text>Show</Text>
      <Button></Button>
      <Button></Button>
      <Image source={ require('./assets/icon.png')  
      }
        style={{width:'100px', height:'100px'}}
      ></Image>
        </View>  
      <View style={styles.view3}><Text>Show</Text></View>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(45deg, #ff0000, #0000ff)',
   
  },
  view1:{
    flex: 2
  },
  view2:{
    flex: 6,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-around'
  }, view3:{
    flex: 2
  }
});
