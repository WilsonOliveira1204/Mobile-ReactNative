import React, { useState } from 'react';
import { View, TextInput, Text, Button, Switch, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../Home/style'

import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function Home (){

  const navigation = useNavigation();

  const [inputNome, setInputNome] = useState('');

  const [inputIdade, setInputIdade] = useState('');

  const generos = [
    {desc: 'Selecione uma Opção'},
    {desc: 'Feminino'},
    {desc: 'Masculino'},
  ]

  let generoItem = generos.map( (v, k) => {
    return <Picker.Item key={k} value={k} label={v.desc} />
  })

  const [pickerGenero, setPickerGenero] = useState(0)

  const escolaridades = [
    {desc:'Selecione uma Opção'},
    {desc: 'Ensino Fundamental'},
    {desc: 'Ensino Médio'},
    {desc: 'Ensino Superior'},
  ]

  let escolaridadeItem = escolaridades.map ( (v,k) => {
    return <Picker.Item key={k} value={k} label={v.desc} />
  })

  const [pickerEscolaridade, setPickerEscolaridade] = useState(0)

  const niveisEscolaridade = [
    {desc: 'Selecione uma Opção'},
    {desc: 'Concluido'},
    {desc: 'Cursando'},
    {desc: 'Incompleto'}
  ]

  let nvlEscolaridadeItem = niveisEscolaridade.map( (v,k) => {
    return <Picker.Item key={k} value={k} label={v.desc} />
  })

  const [pickerNvlEscolaridade, setPickerNvlEscolaridade] = useState(0)
 

  const [sliderValue, setSliderValue] = useState(0)

  const [nacionalSwitch, setNacionalSwitch] = useState(true)
  
  function irSobre(){
    if ( (inputNome === '') || (inputIdade === '')) {
      alert('Prencha os campos')
    } else if((pickerEscolaridade === 0) || (pickerGenero === 0) || (pickerNvlEscolaridade === 0)) {
      alert('Selecione uma opção!')
    } else {
      navigation.navigate('Sobre', {nome: inputNome, idade: inputIdade, 
        genero: generos[pickerGenero].desc, escolaridade: escolaridades[pickerEscolaridade].desc,
      nvlEscolaridade: niveisEscolaridade[pickerNvlEscolaridade].desc, 
      conta: sliderValue.toFixed(2), nacionalidade: nacionalSwitch, 
      nacionalidade: (nacionalSwitch) ? 'Brasileiro' : 'Estrangeiro'})
    }
  }
  
  return(
    <View style={styles.container}>
      <Text style={styles.subTitle}>Preencha as Informações para abrir sua conta.</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
        autoComplete={'off'}
        autoCapitalize={'words'}
        style={styles.inputText} 
        onChangeText={(nome) => setInputNome(
          nome)}
        />
      </View>
      <View style={styles.form}>
      <Text style={styles.label}>Idade</Text>
      <TextInput
      keyboardType='numeric'
      style={styles.inputText}
      onChangeText = {(idade) => setInputIdade(idade)}
      />
      </View>

      <View style={styles.areaPicker}>
        <Text style={styles.label}>Genero</Text>
        <Picker
        style={styles.picker}
        selectedValue={pickerGenero}
        onValueChange={ (itemValue, itemIndex) => setPickerGenero(itemValue)}>
          {generoItem}
        </Picker>
      </View>

      <View style={styles.areaPicker}>

        <Text style={styles.label}>Escolaridade</Text>
        <Picker
        style={styles.picker}
        selectedValue={pickerEscolaridade}
        onValueChange={ (itemValue, itemIndex) => setPickerEscolaridade(itemValue)}>
          {escolaridadeItem}
        </Picker>

      </View>

      <View style={styles.areaPicker}>
        <Text style={styles.label}>Situação</Text>
        <Picker
        style={styles.picker}
        selectedValue={pickerNvlEscolaridade}
        onValueChange={ (itemValue, itemIndex) => setPickerNvlEscolaridade(itemValue)}
        >
          {nvlEscolaridadeItem}
        </Picker>
      </View>

      <View style={styles.areaSlider}>
        <Text style={styles.label}>Limite da Conta</Text>
        <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1000}
        minimumTrackTintColor='#000000'
        maximumTrackTintColor='#C0C0C0' 
        thumbTintColor='#87CEFA'
        step={10}
        onValueChange={ (vlrSelecionado) => setSliderValue(vlrSelecionado)}
        value={sliderValue}
        />
        <Text style={styles.valueSlider}>R$ {sliderValue.toFixed(2)}</Text>
      </View>
      
      <View style={styles.areaSwitch}>
      <Text style={styles.label}>Nacionalidade</Text>
      <Switch 
       trackColor={{ false: "#87CEFA", true: "#0f0" }}
       thumbColor={(nacionalSwitch) ? "#0f0" : "#0f0"}
       thumbTintColor={'red'}
      value={nacionalSwitch}
      onValueChange={ (valorNacionalidade) => setNacionalSwitch(valorNacionalidade)}/>
      <Text style={styles.valueNacional}>{(nacionalSwitch) ? 'Brasileiro' : 'Estrangeiro'}</Text>
      </View>

     <View style={styles.areaButton}>
       <Pressable 
       onPress={irSobre}
       style={styles.btnForm}>
         <Text style={styles.textBtn}>Confirmar</Text>
       </Pressable>
     </View>
    </View>
  )
}
