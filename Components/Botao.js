import { StyleSheet, Text, View } from 'react-native';

export default function Botao(props) {
    return (
        <View style={styles.estilo}>
            <Text style={styles.texto}>3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    estilo: {
        width:70,
        height:70,
        backgroundColor: '#272b33',
        margin:5,
        borderRadius:25,
        justifyContent:'center',
    },
    texto:{
        textAlign:'center',
        color:'white',
    }
})