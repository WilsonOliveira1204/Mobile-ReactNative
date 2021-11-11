import React, { useState } from 'react';
import { View, Text,  } from 'react-native';
import {styles} from './style'
import Header from '../../components/Header/header'
import Slider from '@react-native-community/slider';
import { LinearProgress } from 'react-native-elements'
 


export default function Experiencia() {
  
 return (
   <View style={styles.container}>
     <Header />
    <Text style={styles.titlePage}>Experiência Profissional</Text>
    <View style={styles.conteudo}>

      <View style={styles.txtLbl}>
        <Text style={styles.label}>Objetivo</Text>
        <Text style={styles.text}>
          Buscando obter experiência na área de T.I. para aperfeiçoar minhas habilidades.
          Assim, podendo me qualificar melhor no mercado de trabalho.
        </Text>
      </View>

      <View style={styles.txtLbl}>
        <Text style={styles.label}>Skills</Text>
        <View style={styles.legendSkill}>
          <Text>Dinâmico</Text>
          <Text>54%</Text>
        </View>
        <LinearProgress 
        color="#24ACCA" 
        trackColor="#fff"
        value={0.54} 
        variant={'determinate'} 
        style={styles.skillProgress} />

        <View style={styles.legendSkill}>
          <Text>Trabalho em Equipe</Text>
          <Text>77%</Text>
        </View>
        <LinearProgress 
        color="#24ACCA" 
        trackColor="#fff"
        value={0.77} 
        variant={'determinate'} 
        style={styles.skillProgress} />

        <View style={styles.legendSkill}>
          <Text>Faciliade em Aprender</Text>
          <Text>80%</Text>
        </View>
        <LinearProgress 
        color="#24ACCA" 
        trackColor="#fff"
        value={0.89} 
        variant={'determinate'} 
        style={styles.skillProgress} />
      </View>
   
      <View style={styles.txtLbl}>
        <Text style={styles.label}>Outras Profissões</Text>
        <Text style={styles.textList}>- Exército Brasileiro</Text>
      </View>

      <View style={styles.txtLbl}>
        <Text style={styles.label}>Metas Profissioais</Text>
        <Text style={styles.textList}>- Obter experiência na área;</Text>
        <Text style={styles.textList}>- Abrir uma empresa de Desenvolvimento</Text>
      </View>

    </View>     
   </View>
  );
}
