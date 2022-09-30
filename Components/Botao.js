import { StyleSheet, Text, View } from 'react-native';

export default function Botao(props) {
    return (
        <View style={styles.estilo}>
            <Text>3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    estilo: {
        width:20,
        height:20,
        backgroundColor: '#272b33',
    }
})