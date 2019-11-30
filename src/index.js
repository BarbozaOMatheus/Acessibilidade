import React, { Component, useEffect } from "react";
import {Alert, Linking, DeviceEventEmitter, AppState} from "react-native";
import { createAppContainer } from "react-navigation";
import Routes from "./routes";

import { 
  showFloatingBubble, 
  hideFloatingBubble, 
  requestPermission, 
  initialize,
  checkPermission 
} from "react-native-floating-bubble";


const AppConatiner = createAppContainer(Routes);
var check = 0;
var count = 0;

export default class App extends Component {
  
	state = {
    appState: AppState.currentState,
    
  };

  async componentDidMount() {
    if (Platform.OS === 'android') {
      const url = await Linking.getInitialURL();
      this.navigate(url);
    } else {
      Linking.addEventListener('url', this.handleOpenURL);
    }
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleOpenURL = (event) => {
    this.navigate(event.url);
  };

  navigate = (url) => {
    
    const route = url.replace(/.*?:\/\//g, '');
    const recipe = route.match(/\/([^\/]+)\/?$/)[1];
    const routeName = route.split('/')[0];
  
    // routeName: recipe
    // recipe: teste (parâmetro)
  };

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
    DeviceEventEmitter.addListener("floating-bubble-press", this.pressBotao.bind(this));
    

  }

  // componentDidUpdate() {
  //   AppState.addEventListener('change', this._handleAppStateChange);
  //   DeviceEventEmitter.addListener("floating-bubble-press", this.pressBotao.bind(this));
    

  // }
  

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
    DeviceEventEmitter.Remove();
  }

	 _handleAppStateChange = (nextAppState) => {
      if (this.state.appState.match(/background/) &&
           nextAppState === 'active') {
          if(check != 0){
            this.remove();
            console.log("removed");
          }

      }else if (this.state.appState.match(/active/) &&
                  nextAppState === 'background') {

        if (check == 0) {
          this.permite();
          this.inicia();
          
        }

        this.adiciona();
      }
      this.setState({appState: nextAppState});
  };

  pressBotao(e) {
    //this.remove();yeshua
  	Linking.openURL('acessibilidade://acessibilidade/.MainApplication').catch((error) => Alert.alert('erro ao abrir o app' + error));
    
    
    
  }

  permite() {
    requestPermission()
      .catch(Alert.alert('Permissão negada'));
  }

	inicia() {    

    initialize()
      .catch(() => Alert.alert("Falha ao inicializar o botão flutuante")); 
  	
    check += 1;
    console.log("check: " +check);
	  
  }
    

  
  adiciona() {

    requestPermission()
      checkPermission()
        .then((value) => console.log(`Permission: ${value ? 'Yes' : 'No'}`))
        .catch(() => console.log("Failed to check"));

    showFloatingBubble(10, 10)
      .catch(() => console.log("Failed to Floating Bubble Added"));
    
      count +=1;
     console.log('count'+count);
  }

  remove() {
    hideFloatingBubble()
      .catch(() => console.log("Failed to Removed Bubble"));
  }
  
  render(){



    return <AppConatiner />
    

  }
}