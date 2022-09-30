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
    grade: {
        flexDirection:'row',
        flexWrap:'wrap',
    },
    teclado: {
        alignItems:'center',
        alignContent:'flex-end',
        backgroundColor:'#292d36',
    }
})