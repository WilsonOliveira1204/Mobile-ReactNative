import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import styles from './src/components/Anuncios/styles'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anuncios: [
        { id: 1, nome: 'Bola Jabulani', preco: 20.90, tipo: 'Jogo', source: require('./assets/jabulani.jpg') },
        { id: 2, nome: 'Caixa de Som POTENTE', preco: 150.90, tipo: 'Jogo', source: require('./assets/caixasom.jpg') },
        { id: 3, nome: 'Mizuno Primeira-Linha', preco: 85.90, tipo: 'Jogo', source: require('./assets/tenischave.jpg') },
        { id: 4, nome: 'Monitor de PC Funcionando Bem', preco: 100.90, tipo: 'Jogo', source: require('./assets/monitor.jpg') },
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.areaHeader}>
          <Text style={styles.textHeader}></Text>
          <Text style={styles.textHeader}>FEIRA DO ROLO</Text>
        </View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={this.state.anuncios}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Anuncio data={item} />}
        />
      </View>
    )
  }
}

class Anuncio extends Component {
  render() {
    return (
      <View style={styles.area}>
        <Image style={styles.imgAnuncio} source={this.props.data.source} />
        <Text style={styles.textoProd}>{this.props.data.nome}</Text>
        <Text style={styles.textoPreco}>{this.props.data.preco.toFixed(2)}</Text>
      </View>
    )
  }
}

export default App;