import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';
import Button from 'Mobilidade/components/Button'


export default class Login extends Component {
    render() {
        return (
            <View style={{ justifyContent: 'center', margin: 5, flexDirection: 'column', flex: 1 }} >
                <View style={{ flex: 2, alignItems: 'center', justifyContent:'center'}}>
                    <Text style={{ fontSize: 30 }}>Cadastro de usuário</Text>
                </View>
                <View style={{ flex: 4, margin: 5, justifyContent: 'flex-end', paddingBottom:20 }}>
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
                    <Button titulo='Cadastrar'></Button>
                </View>
                <View style={{ margin: 5, flex: 1 }}>
                    <Button titulo='Voltar'></Button>
                </View>
            </View>
        );
    }
}