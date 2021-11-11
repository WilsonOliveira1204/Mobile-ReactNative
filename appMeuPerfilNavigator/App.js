import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';

import Home from './src/pages/Home';
import Pessoal from './src/pages/Pessoal';
import Formacao from './src/pages/Formacao';
import Experiencia from './src/pages/Experiencia';
import Projetos from './src/pages/Projetos';

const Tab = createBottomTabNavigator();

const icons = {
    Home:{
        name: 'home'
    },
    Pessoal:{
        name: 'user',
    },
    Formação:{
        name: 'graduation-cap'
    },
    Experiência:{
        name: 'briefcase'
    },
    Projetos:{
        name: 'tasks'
    }
}

export default function App(){
    return(
        <NavigationContainer >
            <Tab.Navigator
            screenOptions={ ({route}) =>({
                tabBarIcon: ({ color, size }) => {
                    const { name } = icons[route.name];
                    return <FontAwesome name={name} color={color} size={size} />
                }
            }) } 
            tabBarOptions={{
                style: {
                    backgroundColor: '#556B2F',
                    width: '100%',
                    height: '8%'
                },
                labelStyle:{
                    position: 'absolute',
                    bottom: 10,
                    fontSize: 12,
                }, 
                activeTintColor: '#FFFF00',
                inactiveTintColor: '#FFFF00',
                activeBackgroundColor: '#0000CD',
            }}>
                <Tab.Screen
                name={'Home'} 
                component={Home} />
                <Tab.Screen name={'Pessoal'} component={Pessoal} />
                <Tab.Screen name={'Formação'} component={Formacao} />
                <Tab.Screen name={'Experiência'} component={Experiencia} />
                <Tab.Screen name={'Projetos'} component={Projetos} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}