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

import IntentLauncher, { IntentConstant } from 'react-native-intent-launcher';


const AppConatiner = createAppContainer(Routes);



export default class App extends Component {
  constructor(props) {
    super(props);

      
  }
	state = {
    appState: AppState.currentState,
    
  };
  

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
    DeviceEventEmitter.addListener("floating-bubble-press", this.pressBotao.bind(this));
    
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
    DeviceEventEmitter.Remove();
  }

	_handleAppStateChange = (nextAppState) => {
      if (this.state.appState.match(/background/) &&
           nextAppState === 'active') {          
        this.remove();
        console.log("removed");          

      }else if (this.state.appState.match(/active/) &&
                  nextAppState === 'background') {

          this.permite();
          this.inicia();
          this.adiciona();
      }
      this.setState({appState: nextAppState});
  }

  pressBotao(e) {  	
    IntentLauncher.startActivity({
      action: 'android.intent.action.MAIN',           
      category: 'android.intent.category.LAUNCHER', 
      className: 'com.acessibilidade.MainActivity', 
      packageName: 'com.acessibilidade',   
      flags: 131072,     
    })
    
  }

  permite() {
    requestPermission()
      .catch(Alert.alert('Permissão negada'));

    requestPermission()
      checkPermission()
        .then((value) => console.log(`Permission: ${value ? 'Yes' : 'No'}`))
        .catch(() => console.log("Failed to check"));
  }

	inicia() { 
    initialize()
      .catch(() => Alert.alert("Falha ao inicializar o botão flutuante"));  	
  }
    

  
  adiciona() {    

    showFloatingBubble(350, 300)
      .catch(() => console.log("Failed to Floating Bubble Added"));    
    
  }

  remove() {
    hideFloatingBubble()
      .catch(() => console.log("Failed to Removed Bubble"));
  }
  
  render(){

    return <AppConatiner />    

  }
}