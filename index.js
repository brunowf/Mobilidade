/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Calculadora from './main/Calculadora';
import Login from './main/login/Login';

AppRegistry.registerComponent(appName, () => Login);
