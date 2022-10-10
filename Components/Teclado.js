import { View, StyleSheet } from "react-native"
import Botao from "./Botao";


export default function Teclado() {
    return (
        <View style={styles.teclado}>
        <View style={styles.grade}>
            <Botao number='AC'/>
            <Botao number='+/-'/>
            <Botao number='%'/>
            <Botao number='÷'/>
        </View>

        <View style={styles.grade}>
            <Botao number='7'/>
            <Botao number='8'/>
            <Botao number='9'/>
            <Botao number='x'/>
        </View>

        <View style={styles.grade}>
            <Botao number='4'/>
            <Botao number='5'/>
            <Botao number='6'/>
            <Botao number='-'/>
        </View>

        <View style={styles.grade}>
            <Botao number='1'/>
            <Botao number='2'/>
            <Botao number='3'/>
            <Botao number='+'/>
        </View>

        <View style={styles.grade}>
            <Botao number='1'/>
            <Botao number='0'/>
            <Botao number='.'/>
            <Botao number='='/>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
})