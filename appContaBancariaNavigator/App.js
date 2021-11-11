import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Pages/Home';
import Sobre from './src/Pages/Sobre';
 
const Stack = createStackNavigator();
 
export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          title:'Conta Bancária - StackNavigator',
          headerStyle:{
            backgroundColor: '#000080',
          },
          headerTitleStyle:{
            fontWeight: 'bold',
            textTransform: 'uppercase',
          },
          headerTintColor: '#87CEFA',
        }}
         />
        <Stack.Screen 
        name="Sobre" 
        component={Sobre} 
        options={{
          title:'Dados Cadastrais',
          headerStyle:{
            backgroundColor: '#000080',
          },
          headerTitleStyle:{
            fontWeight: 'bold',
            textTransform: 'uppercase',
          },
          headerTintColor: '#87CEFA',
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
