import React from 'react';
import { View, Text,TouchableOpacity, Pressable,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Formacao(){
    
    const navigation = useNavigation();
    
    return(
        
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                style={styles.btnMenu}
                onPress={ () => navigation.goBack() }>
                    <FontAwesome name='arrow-left' size={35} color='#eee' />
                </TouchableOpacity>
                <Text style={styles.txtHeader}>Formação</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.txtContent}>Escolaridade: Ensino Superior</Text>
                <Text style={styles.txtContent}>Situação: Cursando</Text>
                <Text style={styles.txtContent}>Período: 3º Semestre</Text>
                <Text style={styles.txtContent}>Curso: Tecnólogo em Análise e Desenvolvimento de Sistemas</Text>
                <Text style={styles.txtContent}>Instituição: Universidade Paulista - UNIP</Text>
                <Text style={styles.txtContent}>Campus: Santos-SP Rangel</Text>
            </View>

            <View style={styles.areaBtns}>
                <Pressable
                style={styles.btnAcao}
                onPress={ () => navigation.navigate('Home')  }>
                    <FontAwesome name='home' size={20} color='#eee' />
                </Pressable>

                <Pressable
                style={styles.btnAcao}
                onPress={()=> navigation.navigate('Pessoal')}>
                    <FontAwesome name='user' size={20} color='#eee' />
                </Pressable>

                <Pressable
                style={styles.btnAcao}
                onPress={ () => navigation.navigate('Experiência') }>
                     <FontAwesome name='briefcase' size={20} color='#eee' />
                </Pressable>

                <Pressable
                style={styles.btnAcao}
                onPress={ () => navigation.navigate('Projetos') }>
                    <FontAwesome name='tasks' size={20} color='#eee' />
                </Pressable>
            </View>
            
        </View>
    );
}