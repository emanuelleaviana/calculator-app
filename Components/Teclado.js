import { StyleSheet, Text, View } from 'react-native';
import Botao from './Botao';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function Teclado() {
    return (
        <View style={styles.teclado}>
        <View style={styles.grade}>

        <View style={styles.estilo}>
            <Text style={styles.textoVerde}>AC</Text>
        </View>

        <View style={styles.estilo}>
            <Text style={styles.textoVerde}>+/-</Text>
            
        </View>

        <View style={styles.estilo}>
            <Text style={styles.textoVerde}>%</Text>
            
        </View>

        <View style={styles.estilo}>
            <Text style={styles.textoVermelho}>÷</Text>
            
        </View>
        </View>

        <View style={styles.grade}>
            <Botao number='7' id='7'/>
            <Botao number='8' id='8'/>
            <Botao number='9' id ='9'/>
            <View style={styles.estilo}>
            <Text style={styles.textoVermelho}>x</Text>
        </View>
        </View>

        <View style={styles.grade}>
            <Botao number='4' id='4'/>
            <Botao number='5' id='5'/>
            <Botao number='6' id='6'/>
            <View style={styles.estilo}>
                <Text style={styles.textoVermelho}>━</Text>
            </View>
        </View>

        <View style={styles.grade}>
            <Botao number='1'/>
            <Botao number='2'/>
            <Botao number='3'/>
            <View style={styles.estilo}>
            <Text style={styles.textoVermelho}>
                <Entypo name="plus" size={25}/>
            </Text>
        </View>

        </View>

        <View style={styles.grade}>
            <View style={styles.estilo}>
                <Text style={styles.caractereEspecial}>
                <MaterialCommunityIcons name="restore" size={25}/>
                </Text>
            </View>
            <Botao number='0'/>
            <Botao number='.'/>
            <View style={styles.estilo}>
            <Text style={styles.textoVermelho}>=</Text>
        </View>
        </View>

       


        </View>      
    );
}

const styles = StyleSheet.create({
    
    teclado: {
        flex:0.65,
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
    estilo: {
        width:80,
        height:80,
        backgroundColor: '#272b33',
        margin:5,
        borderRadius:25,
        justifyContent:'center',
    },
    textoVerde:{
        textAlign:'center',
        color:'#26f3ce',
        fontWeight:'bold',
        fontSize:25,
    },
    textoVermelho:{
        textAlign:'center',
        color:'#d76061',
        fontWeight:'bold',
        fontSize:25,
    },
    caractereEspecial:{
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
        transform: [{ rotate: '35deg'}],
    }

})