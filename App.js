import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';
// import { Button } from "react-native-elements";

class App extends React.Component  {

    state = {
      miniDisplay:0,
      display:0,
    }

    click0 = () => {
      this.setState({
        miniDisplay: 0
      })
    }

    click1 = () => {
      this.setState({
        miniDisplay: 1
      })
    }

    render(){
  return (
    <View style={styles.background}>
      <View style={styles.display}>
        <Text style={styles.miniDisplay}>{this.state.miniDisplay}</Text>
        <Text style={styles.textDisplay}>12936</Text>
      </View>
      <View style={styles.keyboard}>
        <View style={styles.grade}>
          <TouchableOpacity style={styles.button}><Text style={[styles.text, styles.greenText]}>AC</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={[styles.text, styles.greenText, styles.plus]}>+</Text>
            <Text style={[styles.text, styles.greenText, styles.bar]}>/</Text>
            <Text style={[styles.text, styles.greenText, styles.less]}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={[styles.text, styles.greenText]}>%</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={[styles.text, styles.redText]}>÷</Text></TouchableOpacity>
        </View>

        <View style={styles.grade}>
          <TouchableOpacity style={styles.button}><Text style={styles.text}>7</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.text}>8</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.text}>9</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={[styles.text, styles.redText]}>x</Text></TouchableOpacity>
        </View>

        <View style={styles.grade}>
          <TouchableOpacity style={styles.button}><Text style={styles.text}>4</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.text}>5</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.text}>6</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={[styles.text, styles.redText]}>━</Text></TouchableOpacity>
        </View>

        <View style={styles.grade}>
          <TouchableOpacity  onPress={this.click1} style={styles.button}><Text style={styles.text}>1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.text}>2</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.text}>3</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={[styles.text, styles.redText]}>
            <Entypo name="plus" size={25} />
          </Text></TouchableOpacity>
        </View>

        <View style={styles.grade}>
          <TouchableOpacity  onPress={() => handleInput("#")} style={styles.button}><Text style={styles.specialCharacter}>
            <MaterialCommunityIcons name="restore" size={25} />
          </Text></TouchableOpacity>
          <TouchableOpacity onPress={this.click0} style={styles.button}><Text style={styles.text}>0</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.text}>.</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={[styles.text, styles.redText]}>=</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
  }
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#22252d'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyboard: {
    flex: 0.65,
    alignItems: 'center',
    alignContent: 'flex-end',
    backgroundColor: '#292d36',
    marginTop: 'auto',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
  grade: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: '#272b33',
    margin: 5,
    borderRadius: 25,
    justifyContent: 'center',
    position:'relative',
  },
  text: {
    textAlign: 'center',
    color: 'white',
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
    color: 'white',
    fontWeight: 'bold',
    transform: [{ rotate: '35deg' }],
  },
  display: {
    flex: 0.30,
    backgroundColor: '#22252d',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  textDisplay: {
    color: 'white',
    fontSize: 70,
    textAlign: 'right',
    fontWeight: 'bold',
    
  },
  miniDisplay: {
    color: 'white',
    fontSize: 30,
    textAlign: 'right',
    
  },
  bar:{
    transform: [{ rotate: '18deg' }],
    fontWeight:'normal',
  },
  plus: {
    fontSize:18,
    position:'absolute',
    left:25,
    top:20,
  },
  less: {
    fontSize:25,
    position:'absolute',
    left:42,
    top:28,
  },
});

export default App
