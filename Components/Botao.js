import { StyleSheet, Text, View, button } from 'react-native';
import {valorEntrada} from './Calculadora';

export default function Botao(props) {
    return (
        <button style={styles.estilo} onPress={() => valorEntrada(button)}>
            <Text style={styles.texto}>{props.number}</Text>
        </button>
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