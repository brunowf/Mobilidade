import React, { Component } from 'react';
import { Text, FlatList, View, ScrollView, Button } from 'react-native';
import axios from 'axios';
import { ListItem, List } from 'react-native-elements';

export default class ListaUsuarios extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listaUsers: []
        }
    }

    componentDidMount() {
        axios.get('http://192.168.0.32:8080/carros')
            .then(resposta => {
                //se deu errado:
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
            renderItem={({item}) => <Text>{item.modelo}</Text>}
            keyExtractor={item => item.id.toString()}
            >
            </FlatList>
            </View>
        );
    }
}