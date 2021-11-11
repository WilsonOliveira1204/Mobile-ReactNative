import React from 'react';
import { View, Text,TouchableOpacity, Pressable,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Projetos(){
    
    const navigation = useNavigation();
    
    return(
        
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                style={styles.btnMenu}
                onPress={ () => navigation.goBack() }>
                    <FontAwesome name='arrow-left' size={35} color='#eee' />
                </TouchableOpacity>
                <Text style={styles.txtHeader}>Projetos</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.titleContent}> Atualmente cursando na área de T.I. conclui alguns projetos e trabalhos: </Text>
                <Text style={styles.txtContent}> -Documentação para o PIM IV;</Text>
                <Text style={styles.txtContent}> -Aplicativos WEB utilizando frontend ReactJs e backend NodeJs;</Text>
                <Text style={styles.txtContent}> -Aplicativos Mobile utilizando ReactNative;</Text>
                <Text style={styles.txtContent}> -Soluções em C#;</Text>
                <Text style={styles.txtContent}> -Sistemas web JavaScript,HTML,CSS;</Text>
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
                onPress={ () => navigation.navigate('Experiência') }>
                    <FontAwesome name='briefcase' size={20} color='#eee' />
                </Pressable>
            </View>
            
        </View>
    );
}