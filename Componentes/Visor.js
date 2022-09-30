import { StyleSheet, View } from 'react-native';

function Visor (props){
  return (

 <View style={styles.visor} ></View>
   

  )
}

const styles = StyleSheet.create ({
  visor: {
    width:'100%',
    height:'50%',
    flex: 1,
    backgroundColor:'#22252d'
  }
});


export default Visor
