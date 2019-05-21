import React, { Component } from 'react';
import { Text, View, ScrollView, Button, TextInput, StyleSheet, Image } from 'react-native';
import { Input, FormLabel, FormInput } from 'react-native-elements';
import axios from 'axios';
import { urlServer as url } from '../app.json';
import Camera from './Camera';

const styles = StyleSheet.create({
  inputs: {
    borderColor: 'gray',
    borderBottomWidth: 1,
    fontSize: 18
  }
});

export default class CadastroUsuario extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userSenha: '123',
      userTelefone: '123',
      userCpf: '123',
      userDataCadastro: '2019-04-18T21:50:30.000+0000',
      userCodUsado: '123',
      userCodProprio: null,
      userAvalM: null,
      userCidade: 'BIGUACU',
      userMotFav: null,
      imagem: null
    }
  }

  criarJson() {
    axios.post(url + '/usuarios', {
      id: null,
      email: this.state.userEmail,
      senha: this.state.userSenha,
      telefone: this.state.userTelefone,
      cpf: this.state.userCpf,
      foto: null,
      data_cadastro: this.state.userDataCadastro,
      cod_indicacao_usado: this.state.userCodUsado,
      cod_indicacao_proprio: null,
      avaliacao_media: null,
      cidade: this.state.userCidade,
      motoristas_favoritos: [],
    }).then(resposta => {
      //se deu certo:
      alert('deu certo')
    })
      .catch(resposta => {
        //se der errado
        alert('Deu errado!')
      })
  }

  buscarImagem(imagem) {
    this.setState({ imagem: imagem });
  }

  render() {
    return (
      <View style={{ justifyContent: 'center', margin: 5, flexDirection: 'column', flex: 1 }} >
        <ScrollView>
          <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>Cadastro de Usuário</Text>
          </View>
          <View style={{ flex: 4, margin: 5, justifyContent: 'flex-end', marginHorizontal: 20 }}>

            {/* <FormLabel>E-mail</FormLabel> */}
            <TextInput
              onChangeText={(text) => this.setState({ userEmail: text })}
              placeholder='E-mail'
              maxLength={50}
              style={styles.inputs}
            />
            <TextInput
              onChangeText={(text) => this.setState({ userSenha: text })}
              maxLength={20}
              placeholder='Senha'
              secureTextEntry
              style={styles.inputs}
            />
            <TextInput
              //onChangeText={(text) => this.setState({ user: text })}
              placeholder='Nome completo'
              maxLength={50}
              style={styles.inputs}
            />
            <TextInput
              onChangeText={(text) => this.setState({ userCpf: text })}
              maxLength={11}
              placeholder='CPF'
              style={styles.inputs}
            />
            <TextInput
              onChangeText={(text) => this.setState({ userTelefone: text })}
              maxLength={11}
              placeholder='Telefone'
              style={styles.inputs}
            />
            {/* <TextInput
                            //onChangeText={(text) => this.setState({ user: text })}
                            maxLength={11}
                            placeholder='Foto'
                            style={styles.inputs}
                        /> */}
            <TextInput
              onChangeText={(text) => this.setState({ userCodUsado: text })}
              maxLength={5}
              placeholder='Código de indicação'
              style={styles.inputs}
            />
            <TextInput
              onChangeText={(text) => this.setState({ userCidade: text })}
              maxLength={50}
              placeholder='Cidade'
              style={styles.inputs}
            />
          </View>
          <View style={{ margin: 5, flex: 1 }}>
            <Image source={this.state.imagem} style={{ width: 100, height: 100 }} />
          </View>
          <View style={{ margin: 5, flex: 1 }}>
            <Camera devolverImagem={this.buscarImagem.bind(this)}> </Camera>
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