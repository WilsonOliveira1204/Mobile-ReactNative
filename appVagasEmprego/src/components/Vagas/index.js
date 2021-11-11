import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

export default class Vagas extends Component {
    render() {
        return (
            <View style={styles.areaVagas}>
                <Text style={styles.titulo}>{this.props.data.vaga}</Text>
                <Text style={styles.textInfo}>Descrição: {this.props.data.dsVaga}</Text>
                <Text style={styles.textInfo}>Salário: {this.props.data.salario.toFixed(2)}</Text>
                <Text style={styles.textInfo}>Contato: {this.props.data.contato}</Text>

            </View>
        )
    }
}