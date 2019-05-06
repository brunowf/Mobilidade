/**
 * @format
 */

/*import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
//import Login from './main/login/Login';
import Usuario from './main/cadastros/Usuario';

AppRegistry.registerComponent(appName, () => Usuario);*/


import { AppRegistry } from "react-native";
import { createAppContainer } from "react-navigation";

import Navigator from "./main";
import { name as appName } from "./app.json";

const Mobilidade = createAppContainer(Navigator.StackNavigator);

AppRegistry.registerComponent(appName, () => Mobilidade);