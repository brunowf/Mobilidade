import React, { Component } from 'react';
import { Text, FlatList, View, ScrollView, Button, Image } from 'react-native';
import axios from 'axios';
import { urlServer as url } from '../app.json';
import { ListItem, List } from 'react-native-elements';

export default class ListaUsuarios extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listaUsers: []
    }
  }

  componentDidMount() {
    axios.get(url + '/usuarios')
      .then(resposta => {
        //se deu certo:
        this.setState({ listaUsers: resposta.data })
      })
      .catch(resposta => {
        //se deu errado:
        alert('Deu errado!')
        console.log(resposta)
      })
  }

  render() {
    return (
      <View><FlatList
        data={this.state.listaUsers}
        renderItem={({ item }) => <View style={{ margin: 5, flex: 1 }}>
          <Text>{item.email} | {item.senha} | {item.cidade} |  </Text>
          <View style={{ margin: 5, flex: 1 }}>
            <Image source={{uri:'data:image/png;base64,'+ item.foto}} style={{ width: 100, height: 100 }} />
          </View>
        </View>}
        keyExtractor={item => item.id.toString()}
      >
      </FlatList>
      </View>
    );
  }
}