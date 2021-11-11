import React, {useState} from 'react';

import {
  View,
  Text,
  ScrollView,
  Button,
  Image,
  StyleSheet
}
from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import axios from 'axios';

const Stack = createStackNavigator();

const service = axios.create({
  baseURL: 'https://sujeitoprogramador.com/r-api/?api=filmes'
})

function listaDeFilmes(props) {

  var [movies, setMovies] = useState(null);
  var [requestDone, setRequestDone] = useState(false);

  if (!requestDone) {
    service.get().then(res => {
      let data = res.data;
      setMovies(data);
      setRequestDone(true);
    });
  }

  return(
    <View style={styles.container}>
      <ScrollView style={styles.listContainer}>
      {
        movies && movies.map(e => {
          return(
            <View style={styles.movieContainer} key={e.id}>
              <Text style={styles.movieTitle}>{e.nome}</Text>
              <Image source={{uri: e.foto}} style={[styles.movieImg, {width: '100%', height: 130, resizeMode: 'contain'}]}/>
              <Button onPress={() => props.navigation.navigate('Detalhes filme', { movie: e })} title="Ver mais" color="#1c1c1c"/>
            </View>
          )
        })
      }
      </ScrollView>
    </View>
  );
}

function movieDetails(props) {
  console.log(props);
  return (
    <View style={[ styles.container, { display: 'flex', flexDirection: 'column', justifyContent: 'space-around', backgroundColor: '#1c1c1c'}]}>
      <Text style={styles.movieTitle}>{props.route.params.movie.nome}</Text>
      <Image source={{uri: props.route.params.movie.foto }} style={[styles.movieImg, {width: '100%', height: 130, resizeMode: 'contain'}]} />
      <View style={styles.sinopse_container}>
        <Text style={{ fontWeight: 'bold', color: '#fff' }}>Sinopse:</Text>
        <Text style={{ color: 'rgb(210,210,210)' }}>{props.route.params.movie.sinopse}</Text>
      </View>
    </View>
  )
}

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lista de filmes" component={listaDeFilmes}></Stack.Screen>
        <Stack.Screen name="Detalhes filme" component={movieDetails} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(240,240,240)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  listContainer: {
    width: '100%',
    padding: 20
  },

  sinopse_container: {
    padding: 20,
  },

  movieContainer: {
    backgroundColor: '#1c1c1c',
    marginBottom: 25,
    borderRadius: 5
  },

  movieTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
    color: '#fff'
  },

  movieImg: {}
});