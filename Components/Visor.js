import { StyleSheet, View, Text } from 'react-native';

function Visor() {
  return (

 <View style={styles.visor} >
  <Text style ={styles.minivisor}>400+400</Text>
  <Text style={styles.text}>800</Text>
 </View>
   

  )
}
const styles = StyleSheet.create ({
  visor: {
    flex: 0.40,
    backgroundColor:'#22252d',
    justifyContent:'flex-end',
  },

text:{
  color:'white',
  fontSize:70,
  textAlign:'right'

},
  minivisor: {
    color:'white',
    fontSize: 20,
    textAlign:'right'
  

  },
});


export default Visor
