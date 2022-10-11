import { StyleSheet, View, Text } from 'react-native';

function Visor() {
  return (

 <View style={styles.visor} >
  <Text style ={styles.minivisor}>308  x  42</Text>
  <Text style={styles.text}>12936</Text>
 </View>
   

  )
}
const styles = StyleSheet.create ({
  visor: {
    flex:0.35 , 
    backgroundColor:'#22252d',
    justifyContent:'flex-end',
    position:'relative',
   
  },

text:{
  color:'white',
  fontSize:70,
  textAlign:'right',
  fontWeight:'bold'

},
  minivisor: {
    color:'white',
    fontSize: 30,
    textAlign:'right',
  },
});


export default Visor
