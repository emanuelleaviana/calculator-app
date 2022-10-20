import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';

export default function App() {

  const buttons = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '─', 1, 2, 3, '+', "<", 0, '.', '=']
  const [currentNumber, setCurrentNumber] = useState(" ");
  const [lastNumber, setLastNumber] = useState(" ");
  const [darkMode, setDarkMode] = useState(false);
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: darkMode ? '#22252d' : '#ffffff',
    },
    backgroundKeyboard: {
      flex: 0.65,
      alignItems: 'center',
      alignContent: 'flex-end',
      backgroundColor: darkMode ? '#292d36' : '#f9f9f9',
      marginTop: 'auto',
      borderTopStartRadius: 40,
      borderTopEndRadius: 40,
    },
    keyboard: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 20,
      justifyContent: 'center',
    },
    button: {
      width: 80,
      height: 80,
      backgroundColor: darkMode ? '#272b33' : '#f7f7f7',
      margin: 5,
      borderRadius: 25,
      justifyContent: 'center',
      position: 'relative',
    },
    text: {
      textAlign: 'center',
      color: darkMode ? 'white' : '#2c2f38',
      fontWeight: 'bold',
      fontSize: 25,
    },
    greenText: {
      color: '#26f3ce',
    },
    redText: {
      color: '#d76061',
    },
    specialCharacter: {
      textAlign: 'center',
      color: darkMode ? 'white' : '#2c2f38',
      fontWeight: 'bold',
      transform: [{ rotate: '35deg' }],
    },
    display: {
      flex: 0.30,
      backgroundColor: darkMode ? '#22252d' : '#ffffff',
      justifyContent: 'flex-end',
      position: 'relative',
    },
    textDisplay: {
      color: darkMode ? 'white' : '#2c2f38',
      fontSize: 70,
      textAlign: 'right',
      fontWeight: 'bold',
    },
    miniDisplay: {
      color: darkMode ? 'white' : '#2c2f38',
      fontSize: 30,
      textAlign: 'right',
    },
    bar: {
      transform: [{ rotate: '18deg' }],
      fontWeight: 'normal',
    },
    plus: {
      fontSize: 20,
      position: 'absolute',
      marginLeft: 25,
      top: 18,
    },
    less: {
      fontSize: 25,
      position: 'absolute',
      left: 42,
      top: 28,
    },
    buttonTheme: {
      width: 60,
      height: 60,
      backgroundColor: darkMode ? '#272b33' : '#f7f7f7',
      margin: 5,
      borderRadius: 25,
      justifyContent: 'center',
    },
    buttonDarkMode: {
      textAlign: 'center',
    }
  });

  let buttonPlusLess = buttons.indexOf("+/-");
  if (buttonPlusLess !== -1) {
    buttons[buttonPlusLess] = <TouchableOpacity onPress={() => handleInput("+/-")} style={styles.button}>
      <Text style={[styles.text, styles.greenText, styles.plus]}>+</Text>
      <Text style={[styles.text, styles.greenText, styles.bar]}>/</Text>
      <Text style={[styles.text, styles.greenText, styles.less]}>-</Text>
    </TouchableOpacity>
  };

  function calculator() {
    const divisionNumbers = currentNumber.split(' ')
    const firstNumber = parseFloat(divisionNumbers[0])
    const lastNumber = parseFloat(divisionNumbers[2])
    const operator = divisionNumbers[1]

    switch (operator) {
      case '+':
        setCurrentNumber((firstNumber + lastNumber).toString())
        return
      case '─':
        setCurrentNumber((firstNumber - lastNumber).toString())
        return
      case 'x':
        setCurrentNumber((firstNumber * lastNumber).toString())
        return
      case '÷':
        setCurrentNumber((firstNumber / lastNumber).toString())
        return
      case '%':
        setCurrentNumber((firstNumber % lastNumber).toString())
        return
    }
  }

  function handleInput(buttonPressed) {
    if (buttonPressed === '+' | buttonPressed === '─' | buttonPressed === '÷' | buttonPressed === 'x' | buttonPressed === '%') {
      setCurrentNumber(currentNumber + " " + buttonPressed + " ")
      return
    }
    switch (buttonPressed) {
      case '<':
        setCurrentNumber(currentNumber.toString().substring(0, (currentNumber.length - 1)))
        return
      case '+/-':
        setCurrentNumber(currentNumber * -1)
        return
      case '=':
        setLastNumber(currentNumber + " = ")
        calculator()
        return
    }
    setCurrentNumber(currentNumber + buttonPressed)
  }

  function clearValue(buttonPressed) {
    if (buttonPressed == 'AC') {
      setLastNumber("")
      setCurrentNumber("")
    }
  }

  return (
    <View style={styles.background}>
      <View style={styles.display}>
        <TouchableOpacity style={styles.buttonTheme}>
          <Entypo name={darkMode ? 'light-up' : 'moon'} size={35} color={darkMode ? "white" : 'black'} style={styles.buttonDarkMode} onPress={() => darkMode ? setDarkMode(false) : setDarkMode(true)} />
        </TouchableOpacity>
        <Text style={styles.miniDisplay}>{lastNumber}</Text>
        <Text style={styles.textDisplay}>{currentNumber.toString().substring(0, 9)}</Text>
      </View>
      <View style={styles.backgroundKeyboard}>
        <View style={styles.keyboard}>
          {buttons.map((button) =>
            button == '=' | button == '+' | button == '─' | button == 'x' | button == '÷' ?
              <TouchableOpacity onPress={() => handleInput(button)} key={button} style={styles.button}><Text style={[styles.text, styles.redText]}>{button}</Text></TouchableOpacity>
              :
              button == '+/-' | button == '%' ?
                <TouchableOpacity onPress={() => handleInput(button)} key={button} style={styles.button}><Text style={[styles.text, styles.greenText]}>{button}</Text></TouchableOpacity>
                :
                currentNumber != 0 && button == 'AC' ?
                  <TouchableOpacity onPress={() => clearValue(button)} key={button} style={styles.button}><Text style={[styles.text, styles.greenText]}>C</Text></TouchableOpacity>
                  :
                  button == 'AC' ?
                    <TouchableOpacity onPress={() => clearValue(button)} key={button} style={styles.button}><Text style={[styles.text, styles.greenText]}>{button}</Text></TouchableOpacity>
                  :
                  button == '<' ?
                  <TouchableOpacity onPress={() => handleInput("<")} style={styles.button}><Text style={styles.specialCharacter}><MaterialCommunityIcons name="restore" size={25} /></Text></TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button]}><Text style={styles.text}>{button}</Text></TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}