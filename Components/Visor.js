import { StyleSheet, View, Text } from 'react-native';

function Visor() {
  return (

 <View style={styles.visor} >
  <Text style={styles.text}>1234</Text>
 </View>
   

  )
}

const styles = StyleSheet.create ({
  visor: {
    flex: 0.45,
    backgroundColor:'#22252d',
    borderRadius:10,
    justifyContent:'flex-end',
  },

text:{
  color:'white',
  fontSize:45,
  textAlign:'right'

}
});


export default Visor
