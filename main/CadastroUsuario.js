import React, { Component } from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import { Input } from 'react-native-elements';
import axios from 'axios';
//import { StackActions, NavigationActions } from 'react-navigation';

export default class CadastroUsuario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userEmail: 'brun',
            userSenha: '123',
            userTelefone: '123',
            userCpf: '123',
            userDataCadastro: '2019-04-18T21:50:30.000+0000',
            userCodUsado: '123',
            userCodProprio: null,
            userAvalM: null,
            userCidade: 'BIGUACU',
            userMotFav: null
        }
    }

    criarJson() {
        axios.post('http://192.168.0.102:8080/usuarios', {
            id: null,
            email:"user.com",
            senha:"senha",
            telefone:"telef",
            cpf:"123.123.123-12",
            data_cadastro:"2019-04-18T21:50:30.000+0000",
            cod_indicacao_usado:"user1XXX12",
            cod_indicacao_proprio:null,
            avaliacao_media:null,
            cidade:"BIGUACU",
            motoristas_favoritos:[],
        }).then(resposta => {
            //se deu certo:
            alert('deu certo')
        })
            .catch(resposta => {
                //se deu errado:
                alert('Deu errado!')
            })
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', margin: 5, flexDirection: 'column', flex: 1 }} >
                <ScrollView>
                    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 30 }}>Cadastro de usuário</Text>
                    </View>
                    <View style={{ flex: 4, margin: 5, justifyContent: 'flex-end', paddingBottom: 20 }}>
                        <Input
                            placeholder='E-mail'
                            maxLength={50} />
                        <Input
                            maxLength={20}
                            placeholder='Senha' />
                        <Input
                            placeholder='Nome completo'
                            maxLength={50} />
                        <Input
                            maxLength={11}
                            placeholder='CPF' />
                        <Input
                            maxLength={11}
                            placeholder='Telefone' />
                        <Input
                            maxLength={11}
                            placeholder='Foto' />
                        <Input
                            maxLength={5}
                            placeholder='Código de indicação' />
                        <Input
                            maxLength={50}
                            placeholder='Cidade' />

                    </View>
                    <View style={{ margin: 5, flex: 1 }}>
                        <Button title='Cadastrar'
                        onPress={() => this.criarJson()}
                        ></Button>
                    </View>
                    <View style={{ margin: 5, flex: 1 }}>
                        <Button
                            title="Voltar"
                            onPress={() => this.props.navigation.navigate('Login')}
                        />

                        {/* <Button
                        title="Voltar"
                        onPress={() => {
                            this.props.navigation.dispatch(StackActions.reset({
                                index: 0,
                                actions: [
                                    NavigationActions.navigate({ routeName: 'Login' })
                                ],
                            }))
                        }}
                    /> */}
                    </View>
                </ScrollView>
            </View>
        );
    }
}