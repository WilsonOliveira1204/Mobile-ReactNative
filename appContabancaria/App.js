import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text, TextInput, Switch, ScrollView, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { styles } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      exibirNome: '',
      idade: '',
      exibirIdade: '',
      genero: 0,

      generos: [
        { nome: '   Selecione seu Sexo' },
        { nome: 'Masculino' },
        { nome: 'Feminino' },
      ],

      exibirGenero: '',
      escolaridade: 0,

      tpEscolaridade: [
        { nome: '   Selecione sua Escolaridade' },
        { nome: 'Ensino Fundamental' },
        { nome: 'Ensino Médio' },
        { nome: 'Ensino Superior' },
      ],

      exibirEscolaridade: '',

      valor: 0,
      exibirValor: '',
      status: false,
      exibirStatus: '',
    }

    this.verificar = this.verificar.bind(this);

  }

  verificar = () => {
    if ((this.state.nome === '') || (this.state.idade === '')) {
      alert('Preencha todos os campos')
    } else if ((this.state.genero === 0) || (this.state.escolaridade === 0) || (this.state.nivelEscolaridade === 0)) {

      alert('Selecione as opções')

    } else if (this.state.valor === 0) {

      alert('Informe o limite da sua conta')

    } else {
      this.setState({
        exibirNome: 'Nome: ' + this.state.nome
      })
      this.setState({
        exibirIdade: 'Idade: ' + this.state.idade + ' anos'
      })
      this.setState({
        exibirGenero: 'Genero: ' + this.state.generos[this.state.genero].nome
      })
      this.setState({
        exibirEscolaridade: 'Escolaridade: ' + this.state.tpEscolaridade[this.state.escolaridade].nome
      })

      this.setState({
        exibirValor: 'Limite da conta: R$ ' + this.state.valor.toFixed(2)
      })
      this.setState({
        exibirStatus: 'Nacionalidade: ' + ((this.state.status) ? "Brasileiro" : "Estrangeiro")
      })
    }
  }

  render() {

    let generosItem = this.state.generos.map((valor, chave) => {
      return <Picker.Item key={chave} value={chave} label={valor.nome} />
    })

    let tpEscolaridadeItem = this.state.tpEscolaridade.map((valor, chave) => {
      return <Picker.Item key={chave} value={chave} label={valor.nome} />
    })

    return (

      <View style={styles.container}>

        <View style={styles.headerArea}>
          <StatusBar style="auto" />
          <Text style={styles.textHeader}>Abertura de Conta</Text>
        </View>
        <ScrollView>

          {/* VIEW INPUT NOME */}

          <View style={styles.form}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput
              style={styles.input}
              autoCapitalize='words'
              placeholderTextColor={'#888'}
              placeholder={'Digite seu nome aqui'}
              onChangeText={(texto) => this.setState({ nome: texto })} />
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>Idade:</Text>
            <TextInput
              style={styles.input}
              keyboardType='numeric'
              placeholderTextColor={'#888'}
              placeholder={'Digite sua idade aqui'}
              onChangeText={(texto) => this.setState({ idade: texto })} />
          </View>

          <View style={styles.pickerArea}>
            <Picker
              style={styles.picker}
              selectedValue={this.state.genero}
              onValueChange={(itemValue, itemIndex) => this.setState({ genero: itemValue })}
            >
              {generosItem}
            </Picker>

            <Picker
              style={styles.picker}
              selectedValue={this.state.escolaridade}
              onValueChange={(itemValue, itemIndex) => this.setState({ escolaridade: itemValue })}
            >
              {tpEscolaridadeItem}
            </Picker>

          </View>

          {/* VIEW SLIDER */}

          <View style={styles.slider}>
            <Text style={styles.sliderLabel}>Limite da Conta</Text>
            <Slider
              style={styles.sliderSpace}
              minimumValue={0}
              maximumValue={1080}
              minimumTrackTintColor='#808080'
              maximumTrackTintColor='#D3D3D3	'
              thumbTintColor='#333'
              step={10}
              onValueChange={(valorSelecionado) => this.setState({ valor: valorSelecionado })}
              value={this.state.valor}
            />

            <Text style={styles.sliderText}>R$ {this.state.valor.toFixed(2)}</Text>
          </View>

          {/* VIEW SWITCH */}

          <View style={styles.switchArea}>

            <Text style={{ textAlign: 'center', fontSize: 25 }}>
              {(this.state.status) ? "Brasileiro" : "Estrangeiro"}
            </Text>

            <Switch
              trackColor={{ false: "#808080", true: "#808080" }}
              thumbColor={(this.state.status) ? "#87CEFA" : "#00008B"}
              value={this.state.status}
              onValueChange={(valorSwitch) => this.setState({ status: valorSwitch })}
            />
            
          </View>

          <View style={styles.areaBotao}>
            <Pressable onPress={this.verificar} style={styles.botao}>
              <Text style={styles.textBotao}>Confirmar</Text>
            </Pressable>
          </View>

          <View style={styles.areaResultado}>
            <Text style={styles.headerResultado}>Dados Informados:</Text>
            <Text style={styles.textResultado}>{this.state.exibirNome}</Text>
            <Text style={styles.textResultado}>{this.state.exibirIdade}</Text>
            <Text style={styles.textResultado}>{this.state.exibirGenero}</Text>
            <Text style={styles.textResultado}>{this.state.exibirEscolaridade}</Text>
            <Text style={styles.textResultado}>{this.state.exibirNvlEscolaridade}</Text>
            <Text style={styles.textResultado}>{this.state.exibirValor}</Text>
            <Text style={styles.textResultado}>{this.state.exibirStatus}</Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}

export default App;