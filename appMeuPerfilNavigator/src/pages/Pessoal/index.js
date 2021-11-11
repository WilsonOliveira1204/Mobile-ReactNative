import React from 'react';
import { View, Text } from 'react-native';
import {styles} from './style'
import Header from '../../components/Header/header'
 
export default function Pessoal() {
 return (
   <View style={styles.container}>
    <Header />
    <Text style={styles.titlePage}>Dados Pessoais</Text>
    <View style={styles.conteudo}>

      <View style={styles.txtLbl}>
        <Text style={styles.label}>Idade</Text>
        <Text style={styles.text}>20 anos</Text>
      </View>

      <View style={styles.txtLbl}>
        <Text style={styles.label}>Ocupação</Text>
        <Text style={styles.text}>Estudante</Text>
      </View>

      <View style={styles.txtLbl}>
        <Text style={styles.label}>Localização</Text>
        <Text style={styles.text}>São Vicente - SP</Text>
      </View>

      <View style={styles.txtLbl}>
        <Text style={styles.label}>Objetivos Pessoais</Text>
        <Text style={styles.textList}>- Obter conhecimentos na área de desenvolvedor;</Text>
        <Text style={styles.textList}>- Conseguir um emprego nessa área;</Text>
        <Text style={styles.textList}>- Concluir a faculdade;</Text>
        <Text style={styles.textList}>- Fazer cursos para me qualificar no mercado de trabalho.</Text>
      </View>

    </View>     
   </View>
  );
}
