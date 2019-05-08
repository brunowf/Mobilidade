import Login from './main/Login';
import CadastroUsuario from './main/CadastroUsuario';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import React, { Component } from 'react';


const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  CadastroUsuario: {
    screen: CadastroUsuario,
  },
}, {
    initialRouteName: 'Login',
  });

  const AppMobilide = createAppContainer(AppNavigator);


export default class App extends Component {
  render(){
    return <AppMobilide/>;
  }
}
