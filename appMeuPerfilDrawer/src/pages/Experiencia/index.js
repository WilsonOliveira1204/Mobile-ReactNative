import React from 'react';
import { View, Text,TouchableOpacity, Pressable,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Experiencia(){
    
    const navigation = useNavigation();
    
    return(
        
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                style={styles.btnMenu}
                onPress={ () => navigation.goBack() }>
                    <FontAwesome name='arrow-left' size={35} color='#fff' />
                </TouchableOpacity>
                <Text style={styles.txtHeader}>Experiência</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.txtContent}>
                    Já trabalhei em área administrativa, voltada para documentação de gestão pessoal. 
                    Com esse curso, pretendo entrar na área de Tecnologia em si para ganhar experiência 
                    e conseguentemente evoluir na profissão.
                </Text>
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
                onPress={ () => navigation.navigate('Formação') }>
                     <FontAwesome name='graduation-cap' size={20} color='#eee' />
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