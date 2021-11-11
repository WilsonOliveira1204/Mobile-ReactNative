import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header/index'
import Anuncios from './src/components/Anuncios/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Anuncios />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: .9,
  },
});