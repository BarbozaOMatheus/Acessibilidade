import React, { Component, useEffect } from "react";
import {Alert, Linking, DeviceEventEmitter, AppState} from "react-native";
import { createAppContainer } from "react-navigation";
import Routes from "./routes";

import { 
  showFloatingBubble, 
  hideFloatingBubble, 
  requestPermission, 
  initialize,
  checkPermission,
  hasPermission

} from "react-native-floating-bubble";

import IntentLauncher, { IntentConstant } from 'react-native-intent-launcher';


const AppConatiner = createAppContainer(Routes);
var count = 0;


export default class App extends Component {
  constructor(props) {
    super(props);

      
  }
	state = {
    appState: AppState.currentState,
    
  };  

  componentDidMount() {    
  	this.permite();		
    AppState.addEventListener('change', this._handleAppStateChange);
    DeviceEventEmitter.addListener("floating-bubble-press", this.pressBotao.bind(this));    
  }

 
  componentWillUnmount() {  	
   AppState.removeEventListener('change', this._handleAppStateChange);
   // DeviceEventEmitter.Remove();      
  }

	_handleAppStateChange = (nextAppState) => {
      if (this.state.appState.match(/background/) &&
           nextAppState === 'active') {          
       this.remove();
        console.log("removed");          

      }else if (this.state.appState.match(/active/) &&
                  nextAppState === 'background') { 
                     				
				this.adiciona();

      }
      this.setState({appState: nextAppState});
  }

  pressBotao(e) {  	
  	console.log("IntentLauncher");
    IntentLauncher.startActivity({
      action: 'android.intent.action.MAIN',           
      category: 'android.intent.category.LAUNCHER', 
      className: 'com.acessibilidade.MainActivity', 
      packageName: 'com.acessibilidade',   
      flags: 2000, 

    })
  }
 
  permite() {
    requestPermission().then(this.inicia())
      .catch(console.log('Permissão negada'));
  }

  inicia() { 
    initialize()
      .catch(() => console.log("Falha ao inicializar o botão flutuante"));  	
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