import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';

class App extends Component{
  render(){
 
    let nome = 'Samuel Higor';

 
    return(
      <View>
 
       <Imagem largura={250} altura={250} />
       
       <View>

       <Text style={{ fontSize: 18, textAlignVertical: "center",textAlign: "center", fontWeight: 'bold', margin: 5 }}> Dados Pessoais: </Text>

       <Text style={{margin: 2, fontSize: 14 }}> Nome: Samuel Higor yarCorreia da Silva </Text>
       <Text style={{margin: 2, fontSize: 14 }}> Idade: 20 Anos </Text>
       <Text style={{margin: 2, fontSize: 14 }}> Data Nasc.: 24/05/2001 </Text>

       </View>
       
       <View>

       <Text style={{ fontSize: 18, textAlignVertical: "center",textAlign: "center", fontWeight: 'bold', margin: 5 }}> Formação: </Text>

       <Text style={{margin: 2, fontSize: 14 }}> Educação: Ensino Superior Cursando </Text>
       <Text style={{margin: 2, fontSize: 14 }}> Cursos: Informática, Inglês, Gestão Empresarial </Text>

       </View>

       <View>
       <Text style={{ fontSize: 18, textAlignVertical: "center",textAlign: "center", fontWeight: 'bold', margin: 5 }}> Experiência: </Text>

       <Text style={{margin: 2, fontSize: 14 }}> - Exército Brasileiro - Administração </Text>

       </View>

       <View>

       <Text style={{ fontSize: 18, textAlignVertical: "center",textAlign: "center", fontWeight: 'bold', margin: 5 }}> Projetos: </Text>

       <Text style={{margin: 2, fontSize: 14 }}> - Sistema de Pesquisa de Produtos na WEB</Text>
       

       </View>


      </View>
    )
  }
}

class Imagem extends Component{
  render() {
    return(

      <Image 
      source={{uri: 'https://i.imgur.com/tkjGSYD.jpg'}}
      style={{ width: this.props.largura, height: this.props.altura, margin: 50, left: 20}}
      />
    )
  }
}

export default App;