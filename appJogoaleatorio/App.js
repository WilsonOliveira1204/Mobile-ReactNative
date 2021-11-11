import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, Button, Pressable,TextInput} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero: '',
    };
    
    this.gerar = this.gerar.bind(this);
   }
   
  gerar(){   
    var num = Math.floor(Math.random() * 10)
    
    this.setState({numero: 'Número: ' + num});
  }
        

  render(){
    
    return(
      <View style={styles.container}>
      
    <Text style={styles.titulo}> NÚMERO ALEATÓRIO </Text>

   <Image
          source={{ uri: 'https://cdn.wizard.com.br/wp-content/uploads/2016/05/18172126/numeros-em-ingl%C3%AAs.jpg'}}
          style={styles.imagemCentr}/>
          

    <Text style={styles.texto}> {this.state.numero} </Text>    
        
    <Button title="Calcular" onPress={this.gerar}/>


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
    color :"blue",
    marginTop: 45,
    fontWeight: "bold",
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
    width: 400,
    height: 300,
    marginTop: 10,
    marginVertical: 50, 
},
  texto:{
  textAlign: 'center',
  fontSize: 30,
  marginTop:15,
  fontWeight: "bold",
  marginVertical: 100,
}

})
 
export default App;