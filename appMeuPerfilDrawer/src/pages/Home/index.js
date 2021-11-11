import React from 'react';
import { View, Text, Button, Image, TouchableOpacity,Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles'

export default function Home(){
    
    const navigation = useNavigation();

    let img = 'https://www.rbsdirect.com.br/filestore/9/2/8/3/2/3_af73d422bdfe592/323829_79f0118b61b85f9.jpg?w=800&h=535&a=c%201x'

    return(
        <View style={styles.container}>
            
            <View style={styles.header}>
                <TouchableOpacity 
                style={styles.btnMenu}
                onPress={ () => navigation.toggleDrawer() }>
                    <FontAwesome name='bars' size={35} color='#eee' />
                </TouchableOpacity>
                <Text style={styles.txtHeader}>Meu Portifólio</Text>
            </View>

            <View style={styles.areaImg}>
                <Image 
                style={styles.imgPerfil}
                source={{uri: img}}
                />
                <Text style={styles.txtProfile}>Samuel Higor Correia da Silva</Text>
            </View>
            <View style={styles.areaBtn}>
                <Pressable
                style={styles.btnAcao}
                onPress={ () => navigation.navigate('Pessoal') }>
                    <FontAwesome name='user' size={20} color='#eee' />
                    <Text style={styles.txtBtn}>Dados Pessoais</Text>
                </Pressable>

                <Pressable
                style={styles.btnAcao}
                onPress={()=> navigation.navigate('Formação')}>
                    <FontAwesome name='graduation-cap' size={20} color='#eee' />
                    <Text style={styles.txtBtn}>Formação</Text>
                </Pressable>

                <Pressable
                style={styles.btnAcao}
                onPress={ () => navigation.navigate('Experiência') }>
                     <FontAwesome name='briefcase' size={20} color='#eee' />
                    <Text style={styles.txtBtn}>Experiência</Text>
                </Pressable>

                <Pressable
                style={styles.btnAcao}
                onPress={ () => navigation.navigate('Projetos') }>
                    <FontAwesome name='tasks' size={20} color='#eee' />
                    <Text style={styles.txtBtn}>Projetos</Text>
                </Pressable>
            </View>

      </View>
    );
}
