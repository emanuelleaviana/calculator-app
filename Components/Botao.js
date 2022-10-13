import {StyleSheet, Text, View, button, Touchable, TouchableOpacity } from 'react-native';
import {valorEntrada} from './Calculadora';

export default function Botao(props) {
    return (
        <TouchableOpacity onPress={() => valorEntrada()} style={styles.estilo} >
            <Text style={styles.texto}>{props.number}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    estilo: {
        width:80,
        height:80,
        backgroundColor: '#272b33',
        margin:5,
        borderRadius:25,
        justifyContent:'center',
    },
    texto:{
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
        fontSize:25,
    }
})