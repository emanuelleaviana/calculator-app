import { StyleSheet, Text, View,  } from 'react-native';
import React from 'react';
import {useState} from 'react';


export default function Calculadora() {
    const [numAtual, setNumAtual] = useState("")
    const [numAntigo, setNumAntigo] = useState("")

    function valorEntrada(buttonPressed){
        console.log(buttonPressed)
        if (buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "*" | buttonPressed === "/") {
            setNumAtual(numAtual + " " + buttonPressed + " ")
            return
        }
    }
}