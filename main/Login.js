import React, { Component } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';
//import { StackActions, NavigationActions } from 'react-navigation';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'user',
            password: 'password',
            roles: 'USER'
        }
    }

    criarJson() {
        axios.post('http://192.168.0.32:8080/login', {
            username: this.state.username,
            password: this.state.password
        }).then(resposta => {
            //se deu certo:
            alert('Deu certo!')
        })
            .catch(resposta => {
                //se der errado
                alert('Deu errado!')
            })
    }


    render() {
        return (
            <View style={{ justifyContent: 'center', margin: 5, flexDirection: 'column', flex: 1 }} >
                <ScrollView>
                    <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 30 }}>
                        <Text style={{ fontSize: 50 }}>Mobilidade</Text>
                    </View>
                    <View style={{ flex: 1, margin: 5, justifyContent: 'flex-end' }}>
                        <Input
                            placeholder='E-mail'
                            maxLength={20}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-start', paddingBottom: 70, paddingTop: 20 }}>
                        <Input
                            maxLength={20}
                            placeholder='Senha'
                            secureTextEntry
                        />
                    </View>
                    <View style={{ margin: 10, flex: 1 }}>
                        <Button title='Login'>
                            onPress={() => this.criarJson()}
                        </Button>
                    </View>
                    <View style={{ margin: 10, flex: 1 }}>
                        <Button
                            title="cadastro"
                            onPress={() => this.props.navigation.navigate('CadastroUsuario')}
                        />
                        {/* <Button
                        title="Cadastrar"
                        onPress={() => {
                            this.props.navigation.dispatch(StackActions.reset({
                                index: 0,
                                actions: [
                                    NavigationActions.navigate({ routeName: 'CadastroUsuario' })
                                ],
                            }))
                        }}
                    />  */}
                    </View>
                    <View style={{ margin: 10, flex: 1, paddingBottom: 120 }}>
                        <Button
                            title="Listar"
                            onPress={() => this.props.navigation.navigate('Listar')}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}