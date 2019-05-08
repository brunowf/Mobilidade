import React, { Component } from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import { Input } from 'react-native-elements';
import { StackActions, NavigationActions } from 'react-navigation';

export default class CadastroUsuario extends Component {
    render() {
        return (
            <View style={{ justifyContent: 'center', margin: 5, flexDirection: 'column', flex: 1 }} >
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 30 }}>Cadastro de usuário</Text>
                </View>
                <View style={{ flex: 4, margin: 5, justifyContent: 'flex-end', paddingBottom: 20 }}>
                    <ScrollView>
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
                    </ScrollView>
                </View>
                <View style={{ margin: 5, flex: 1 }}>
                    <Button title='Cadastrar'></Button>
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
            </View>
        );
    }
}