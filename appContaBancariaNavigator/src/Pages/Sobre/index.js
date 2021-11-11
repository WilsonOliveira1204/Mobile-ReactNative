import React from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../Sobre/style'


export default function Sobre( {route} ){

  const navigation = useNavigation();

  const {nome, idade, genero, escolaridade, nvlEscolaridade, conta, nacionalidade} = route.params

  function voltar(){
    
  }
  
  return(
    <View style={styles.container}>

      <Text style={styles.subTitle}>
        Informações cadastradas 
      </Text>

      <View style={styles.cardInfo}>
        <Text style={styles.labelInfo}>Nome Completo:</Text>
        <Text style={styles.infoValue}>{nome}</Text>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.labelInfo}>Idade:</Text>
        <Text style={styles.infoValue}>{idade} anos</Text>
        <Text style={styles.labelInfo}>Gênero:</Text>
        <Text style={styles.infoValue}>{genero}</Text>
      </View>
      
      <View style={styles.cardInfo}>
        <Text style={styles.labelInfo}>Escolaridade:</Text>
        <Text style={styles.infoValue}>{escolaridade}</Text>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.labelInfo}>Situação:</Text>
        <Text style={styles.infoValue}>{nvlEscolaridade}</Text>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.labelInfo}>Limite da Conta:</Text>
        <Text style={styles.infoValue}>{conta}</Text>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.labelInfo}>Nacionalidade:</Text>
        <Text style={styles.infoValue}>{nacionalidade}</Text>
      </View>
 
      <View style={styles.areaButton}>
        <Pressable
        style={styles.btnBack}
        onPress={ () => navigation.goBack()}>
          <Text style={styles.textBtn}>Voltar</Text>
        </Pressable>
      </View>

    </View>
  )
}
