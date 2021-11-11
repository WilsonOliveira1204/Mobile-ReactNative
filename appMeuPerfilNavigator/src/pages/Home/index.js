import React from 'react';
import { View, Text } from 'react-native';
import {styles} from './style'
import Header from '../../components/Header/header'
import Feed from '../../components/Feed/feed'
 
export default function Home() {
 return (
   <View style={styles.container}>
     <Header />
     <Feed />
   </View>
  );
}
