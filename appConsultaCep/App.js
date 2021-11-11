import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button
}
from 'react-native';

import axios from 'axios';

const service = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
})

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      mostrarDados: false,
      cep: '',
      dados: {
        cep: '',
        logradouro: '',
        bairro: '',
        localidade: '',
        uf: ''
      }
    }

    this.consultar = this.consultar.bind(this);
  }

  consultar() {
    if(this.state.cep.length < 8)
      return alert('Cep inválido.');

    service.get(`${this.state.cep}/json`).then((res) => {
      if(res.data.erro)
        return alert('CEP não encontrado...');
      
      let data = res.data;

      this.setState({
        dados: {
          cep: data.cep,
          logradouro: data.logradouro,
          bairro: data.bairro,
          localidade: data.localidade,
          uf: data.uf
        },
        mostrarDados: true
      })
    })
  }

  render() {
    return (
      <View>
        <View style={styles.main_container}>
          <Text style={styles.header}>Consulta de CEP</Text>
          <TextInput style={styles.input} onChangeText={(value) => this.setState({cep: value, mostrarDados: false})} placeholder="Digite o CEP" />
          <View style={styles.btn}>
            <Button onPress={this.consultar} title="Consultar" color="green" />
          </View>
        </View>
        {/*  */}
        {this.state.mostrarDados && 
          <View style={styles.resultContainer}>
            <Text style={styles.header_two}>Resultados da busca</Text>

            <Text style={ styles.label }>CEP:</Text>
            <Text style={ styles.text }>{this.state.dados.cep}</Text>

            <Text style={ styles.label }>Rua:</Text>
            <Text style={ styles.text }>{this.state.dados.logradouro}</Text>

            <Text style={ styles.label }>Bairro:</Text>
            <Text style={ styles.text }>{this.state.dados.bairro}</Text>

            <Text style={ styles.label }>Cidade:</Text>
            <Text style={ styles.text }>{this.state.dados.localidade}</Text>

            <Text style={ styles.label }>Estado:</Text>
            <Text style={ styles.text }>{this.state.dados.uf}</Text>
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'green',
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10
  },

  header_two: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  label: {
    fontWeight: 'bold'
  },

  text: {
    marginBottom: 15
  },

  input: {
    padding: 5,
    fontSize: 15,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1
  },

  btn: {
    marginVertical: 5,
    marginHorizontal: 5,
  },

  resultContainer: {
    padding: 20,

  },

  main_container: {
    
  }
});