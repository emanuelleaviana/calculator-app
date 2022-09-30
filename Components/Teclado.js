import { StyleSheet, Text, View } from 'react-native';
import Botao from './Botao';

export default function Teclado() {
    return (
        <View style={styles.teclado}>
        <View style={styles.grade}>
            <Botao />
            <Botao />
            <Botao />
            <Botao />
        </View>

        <View style={styles.grade}>
            <Botao />
            <Botao />
            <Botao />
            <Botao />
        </View>

        <View style={styles.grade}>
            <Botao />
            <Botao />
            <Botao />
            <Botao />
        </View>

        <View style={styles.grade}><Botao />
            <Botao />
            <Botao />
            <Botao />
        </View>

        <View style={styles.grade}><Botao />
            <Botao />
            <Botao />
            <Botao />
        </View>

        </View>      
    );
}

const styles = StyleSheet.create({
    
    teclado: {
        flex:0.55,
        alignItems:'center',
        alignContent:'flex-end',
        backgroundColor:'#292d36',
        marginTop:'auto',
        borderTopStartRadius:40,
        borderTopEndRadius:40,
    },
    grade: {
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:20,
    },
})