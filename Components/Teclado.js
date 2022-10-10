import { View, StyleSheet } from "react-native"
import Botao from "./Botao";


export default function Teclado() {
    return (
        <View style={styles.grade}>
            <Botao number='1'/>
            <Botao number='0'/>
            <Botao number='.'/>
            <Botao number='='/>
        </View>
    );
}

const styles = StyleSheet.create({

})