import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      n1: '',
      n2: '',
      resultado: ''
    };
    
    this.calcular = this.calcular.bind(this);
  }
 
  
  calcular(){
    if ( (this.state.n1 === '') || (this.state.n2 === '') ){
      alert('Digite os dois valores!')
      return;
    }
    var r = this.state.n1 * this.state.n2
    this.setState({resultado: 'Resultado: ' + r});
  }

 
  render(){
    return(
      <View style={styles.area}>

        <Text style={styles.titulo}> APP MULTIPLICADOR </Text>
 
      <TextInput
      style={styles.input}
      placeholder="Digite o 1° número..."
      onChangeText={ (texto) => this.setState({n1: texto})}
      />

      <TextInput
      style={styles.input}
      placeholder="Digite o 2° número..."
      onChangeText={ (texto) => this.setState({n2: texto})}
      />
 
      <Button title="Calcular" onPress={this.calcular} />
 
      <Text style={styles.texto}> {this.state.resultado} </Text>
      </View>
    );
  }
}

 
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
    marginTop: 25,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
  },
  titulo:{
    textAlign: 'center',
    fontSize: 25,
    marginTop: 40,
    marginBottom: 20,
  }
})
 
export default App;