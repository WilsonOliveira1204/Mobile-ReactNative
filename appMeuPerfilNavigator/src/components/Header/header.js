import React from 'react';
import { View, Text, Image } from 'react-native';
import {styles} from './style'
 
export default function Header() {

    let  img = 'https://www.rbsdirect.com.br/filestore/9/2/8/3/2/3_af73d422bdfe592/323829_79f0118b61b85f9.jpg?w=800&h=535&a=c%201x'

 return (
   <View style={styles.container}>
       <View style={styles.contentHeader}>
        <Text style={styles.textHeader}>Samuel Higor C. da Silva</Text>
        <Text style={styles.legendHeader}>É devagar que se chega longe!</Text>
       </View>
       <View style={styles.areaImg}>
           <Image 
           style={styles.imgPerfil}
           source={{uri: img}} />
       </View>
   </View>
  );
}