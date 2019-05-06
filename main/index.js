import PageLogin from './login/Login';
import PageRegister from './cadastros/Usuario';

import { createStackNavigator } from 'react-navigation';

const StackNavigator = createStackNavigator({
    Login: {
        screen: PageLogin,
        navigationOptions: {
            title: 'Login',
        },
    },
    Cadastro: PageRegister,
});

export default { StackNavigator };