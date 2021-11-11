import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, Button, Pressable,TextInput} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      alcool: '',
      gasolina:'',
      resultado:'',
    };
    
    this.calcular = this.calcular.bind(this);
   }

  calcular(){
   
    if ( (this.state.alcool === '') || (this.state.gasolina === '') ){
      alert('Preencha todos os campos!')
      return;
    } 
   var r = this.state.alcool / this.state.gasolina;
     if (r < 0.7){
      this.setState({resultado: 'Melhor abastecer com: ETANOL '});
      } else{ this.setState({resultado:'Melhor abastecer com: GASOLINA'})
      }

  }
        
  render(){
    
    return(
      <View style={styles.container}>
      
    <Text style={styles.titulo}>ÁLCOOL OU GASOLINA </Text>

    <Image
          source={{ uri: 'http://complemento.veja.abril.com.br/economia/calculadora-combustivel/img/abre.jpg'}}
          style={styles.imagemCentr}/>

    <TextInput
      style={styles.input}
      placeholder="Valor inteiro do Álcool"
      keyboardType="numeric"
      onChangeText={ (texto) => this.setState({alcool: texto})}
      />

    <TextInput
        style={styles.input}
        onChangeText={ (texto) => this.setState({gasolina : texto})}
        placeholder="Valor inteiro da Gasolina"
        keyboardType="numeric"
      />
        
        
    <Button title="Calcular" onPress={this.calcular} />

    <Text style={styles.texto}> {this.state.resultado} </Text>

            


      </View>
    );
  }
}
 

const styles = StyleSheet.create({
  container:{

    flex:1,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  titulo:{
    textAlign: 'center',
    fontSize: 25,
    marginTop: 40,
    marginBottom: 15,
    fontWeight: "bold",
  },
  botao:{
    width: 200,
    height: 50,
    margin: 20,
    backgroundColor: '#999'
  },
  textoBotao:{
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 45,
    fontSize: 16,
    marginTop:20,
  },
  imagemCentr: {
    alignItems: 'center',
    width: 360,
    height: 220,
    marginBottom: 15,
},
  texto:{
  textAlign: 'center',
  fontSize: 22,
  fontWeight: "bold",
  marginTop: 20,
  textDecorationLine: 'underline',
}



})
 
export default App;