import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Pressable} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      contador: 0,
    };
    
    this.contar = this.contar.bind(this);
  }
 
  contar(sinal){
    if (sinal == '+'){
      this.setState({contador: this.state.contador + 1});
    }
    else if (this.state.contador > 0){
      this.setState({contador: this.state.contador - 1});
    }
  }
 
  render(){
    return(
      <View style={styles.area}>
 
        <Text style={styles.titulo}>CONTADOR DE PESSOAS</Text>

        <Text style={styles.texto}> {this.state.contador} </Text>

        <Pressable style={[styles.botaomais, {backgroundColor: 'green'}]} onPress={() => {this.contar('+')}}>
          <Text style={styles.textoBotao}>+</Text>
        </Pressable>

        <Pressable style={[styles.botaomenos, {backgroundColor: 'red'}]} onPress={() => {this.contar('-')}}>
          <Text style={styles.textoBotao}>-</Text>
        </Pressable>
 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  titulo:{
    textAlign: 'center',
    fontSize: 30,
    marginTop: 40,
    fontWeight: "bold",
    color:"blue",
    textDecorationLine: 'underline',
  },
  botaomais:{
    width: 290,
    height: 70,
    marginTop: 120,
    marginStart: 35,
  },
  botaomenos:{
    width: 290,
    height: 70,
    marginTop: 70,
    marginStart: 35,
  },
  textoBotao:{
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 45,
    fontSize: 45,
    fontWeight: "bold",
  },
  texto:{
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 220,
    fontSize: 180,
    marginTop: 40,
    fontWeight: 'bold',
  },
})
 
export default App;