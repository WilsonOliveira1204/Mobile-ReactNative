import React from 'react';

import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  Linking,
} from 'react-native';

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/users/',
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      user: {
        avatar: '',
        bio: '',
        location: '',
        repos: [],
      },
      showData: false,
    };

    this.getUser = this.getUser.bind(this);
  }

  getUser() {

    this.setState({
      user: {
        avatar: '',
        bio: '',
        location: '',
        repos: []
      },
      showData: false
    })

    api.get(`/${this.state.username}`).then(res => {
      let data = res.data;

      api.get(`/${this.state.username}/repos`).then(res2 => {
        this.setState({
          user: {
            avatar: data.avatar_url,
            bio: data.bio,
            location: data.location,
            repos: res2.data,
          },
          showData: true,
        });
      });
    }).catch(er => {
      alert('Usuário não encontrado :/');
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          source={ { uri: this.state.user.avatar || 'https://cdn-icons-png.flaticon.com/512/25/25231.png' } }
          style={[styles.img_container, {width: 200, height: 200}]}
        />

        <TextInput
          onChangeText={value => this.setState({username: value})}
          style={styles.input}
          placeholder="Digite o nome de usuário"
        />
        <Button onPress={this.getUser} title="Pesquisar" color="#2c2c2c" />
      
        <View>
          {this.state.showData && (
            <View style={{margin: 10}}>
              <Text style={[styles.heading, {textAlign: 'center', marginVertical: 10, fontSize: 25, borderBottomColor: '#ccc', borderBottomWidth: 1 }]}>Informações do usuário</Text>

              <Text style={[styles.heading, {textAlign: 'center', marginVertical: 5}]}>{this.state.user.location}</Text>

              <Text style={styles.heading}>Biografia:</Text>
              <Text style={styles.paragraph}>{this.state.user.bio} </Text>

              <Text style={[styles.heading, {textAlign: 'center', marginVertical: 10, fontSize: 25, borderBottomColor: '#ccc', borderBottomWidth: 1 }]}>Repositórios</Text>

              <ScrollView>
              {this.state.user.repos &&
                this.state.user.repos.map(e => {
                  return (
                    <Pressable onPress={() => {Linking.openURL(e.html_url)}} style={styles.repo_container} key={e.id}>
                      <Text style={[styles.heading, {fontSize: 15, padding: 5, textAlign: 'center', borderBottomColor: '#4c4c4c', borderBottomWidth: 1}]}>{ e.name }</Text>
                      <Text style={[styles.paragraph, {padding: 5}]}>{ e.description || 'Sem descrição.'}</Text>
                    </Pressable>
                  );
                })}
              </ScrollView>
            </View>
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
  },

  img_container: {
    borderRadius: 110,
    alignSelf: 'center',
    backgroundColor: '#fff',
    padding: 50,
    borderWidth: 1,
    borderColor: '#fff',
    margin: 20,
  },

  input: {
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    fontSize: 19,
  },

  heading: {
    fontWeight: 'bold',
    color: '#fff',
  },

  paragraph: {
    color: 'rgba(235,235,235, 0.8)',
  },

  repo_container: {
    padding: 5,
    backgroundColor: '#3c3c3c',
    margin: 10
  }


});
