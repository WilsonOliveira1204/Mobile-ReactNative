import React from 'react';
import { View, Text } from 'react-native';
import {styles} from './style'
import Header from '../../components/Header/header'
 
export default function Pessoal() {
 return (
   <View style={styles.container}>
    <Header />
    <Text style={styles.titlePage}>Projetos</Text>
    <View style={styles.conteudo}>

      <View style={styles.txtLbl}>
        <Text style={styles.label}>Projeto UNIP Resort</Text>
        <Text style={styles.text}>
        Trabalho de Conclusão de Curso. Onde no semestre anterior levantamos todos os requisitos
        do projeto UNIP Resort e no último semestre do curso, criamos ele de fato!
        </Text>

        <Text style={styles.textList}>- FrontEnd Web (Angular Framework) </Text>
        <Text style={styles.textList}>- FrontEnd Desktop (ElectronJS) </Text>
        <Text style={styles.textList}>- FrontEnd Mobile (Ionic Framework) </Text>
        <Text style={styles.textList}>- BackEnd (Java + Springboot)</Text>
        <Text style={styles.textList}>- Banco de Dados (ElephantSQL/Postgresql) </Text>
      </View>

      <View style={styles.txtLbl}>
        <Text style={styles.label}>Web-ReactJS-NodeJS</Text>
        <Text style={styles.text}>Trabalhos simples a medianos para acrescentar a nota final.</Text>
      </View>

      <View style={styles.txtLbl}>
        <Text style={styles.label}>Mobile-ReactNative</Text>
        <Text style={styles.text}>Trabalhos simples a medianos para acrescentar a nota final. </Text>
      </View>

    </View>   

   </View>
  );
}
