import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Visor from './Components/Visor';
import Teclado from './Components/Teclado';


export default function App() {
  return (
      <View style={styles.fundo}>
    <><StatusBar /><><Visor></Visor><Teclado></Teclado></></> 
    </View>
  );
}
const styles = StyleSheet.create ({
  fundo:{
    flex:1,
    backgroundColor:'#22252d'
  },
});



