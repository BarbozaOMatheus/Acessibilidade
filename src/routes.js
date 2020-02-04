import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Main from './pages/main/';
import Config from './pages/conf/';
import Sobre from './pages/sobre/';
import Tempo from './pages/tempo/';
import Emergency from './pages/emergency/';
import Dicas from './pages/dicas';
import Colaboradores from './pages/colaboradores/';

const AppNavigator = createStackNavigator(
  {
    MainScreen: {
      screen: Main,
      navigationOptions: {
        title: 'MAC',
      },
    },
    Colaboradores: {
      screen: Colaboradores,
      navigationOptions: {
        title: 'Colaboradores',
      },
    },
    Config: {
      screen: Config,
      navigationOptions: {
        title: 'Configurações',
      },
    },
    Sobre: {
      screen: Sobre,
      navigationOptions: {
        title: 'Sobre o App',
      },
    },
    Tempo: {
      screen: Tempo,
      navigationOptions: {
        title: 'Tempo',
      },
    },
    Emergency: {
      screen: Emergency,
      navigationOptions: {
        title: 'Contato de Emergência',
      },
    },
    Dicas: {
      screen: Dicas,
      navigationOptions: {
        title: 'Dicas',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerLeft: null,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#8e44ad',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        flex: 1,
      },
    },
  },
);
export default createAppContainer(AppNavigator);
