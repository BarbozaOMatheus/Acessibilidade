import React, { Component } from "react";

import { View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './estilo';


// Import the react-native-sound module
var Sound = require('react-native-sound');
var audio = null;
//Ativa o playback mesmo em modo silencioso
Sound.setCategory('Playback'); // true = mixWithOthers

var count = 0;

//Component dicas_sobre
export default class Sobre extends Component {
  constructor(props) {
    super(props);  
      //carrega o audio correspondente da dica (src:android\app\src\main\res\raw <titulo.mp3>)
      audio = new Sound('audio.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('Erro ao carregar o audio', error);
          return;
        }
      }); 
    
  }

  manageSound(){ 
    console.log('duration in seconds: ' + audio.getDuration() + 'number of channels: ' + audio.getNumberOfChannels());
      // Play the sound with an onEnd callback

    if (count%2 == 0) { 
      audio.play((success) => {
        if (!success) {
          console.log('playback failed due to audio decoding errors');
        }
      });
    }else {
      audio.pause((success) => {
        if (!success) {
          console.log('playback failed due to audio decoding errors');
        }
      });
    }
    
    count += 1;
  }
  
  render() {
    return (
      <View style={styles.conainer}>
        <View style={styles.top}>

          <TouchableOpacity style={styles.profileImage}
            onPress={() => this.props.navigation.goBack()}
          >
            <Icon name="arrow-left" size={40} color="#fabb00" />
          </TouchableOpacity>

        </View>

        <View style={styles.center}></View>

        <View style={styles.bottom}>

          <View style={{ height: '16%', }}>
            <Text style={styles.texto}>O botão abaixo explica a funcionalidade da opção SOBRE</Text>
          </View>

          <View style={{ height: '16%', }}>
            <Text style={styles.texto}>Clique para ouvir!</Text>
          </View>

          <View style={{ padding: 10, }}>
            <TouchableOpacity style={styles.play} onPress={this.manageSound} >
              <Icon name="play" size={30} color="#fabb00" />
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}
//Component dicas_configurações
export default class Config extends Component {
  constructor(props) {
    super(props);  
      //carrega o audio correspondente da dica (src:android\app\src\main\res\raw <titulo.mp3>)
      audio = new Sound('config.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('Erro ao carregar o audio', error);
          return;
        }
      }); 
    
  }

  manageSound(){ 
    console.log('duration in seconds: ' + audio.getDuration() + 'number of channels: ' + audio.getNumberOfChannels());
      // Play the sound with an onEnd callback

    if (count%2 == 0) { 
      audio.play((success) => {
        if (!success) {
          console.log('playback failed due to audio decoding errors');
        }
      });
    }else {
      audio.pause((success) => {
        if (!success) {
          console.log('playback failed due to audio decoding errors');
        }
      });
    }
    
    count += 1;
  }
  
  render() {
    return (
      <View style={styles.conainer}>
        <View style={styles.top}>

          <TouchableOpacity style={styles.profileImage}
            onPress={() => this.props.navigation.goBack()}
          >
            <Icon name="arrow-left" size={40} color="#fabb00" />
          </TouchableOpacity>

        </View>

        <View style={styles.center}></View>

        <View style={styles.bottom}>

          <View style={{ height: '16%', }}>
            <Text style={styles.texto}>O botão abaixo explica a funcionalidade da opção CONFIGURAÇÕES</Text>
          </View>

          <View style={{ height: '16%', }}>
            <Text style={styles.texto}>Clique para ouvir!</Text>
          </View>

          <View style={{ padding: 10, }}>
            <TouchableOpacity style={styles.play} onPress={this.manageSound} >
              <Icon name="play" size={30} color="#fabb00" />
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}

//Component dicas_emergency
export default class Contatos extends Component {
  constructor(props) {
    super(props);  
      //carrega o audio correspondente da dica (src:android\app\src\main\res\raw <titulo.mp3>)
      audio = new Sound('contatos.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('Erro ao carregar o audio', error);
          return;
        }
      }); 
    
  }

  manageSound(){ 
    console.log('duration in seconds: ' + audio.getDuration() + 'number of channels: ' + audio.getNumberOfChannels());
      // Play the sound with an onEnd callback

    if (count%2 == 0) { 
      audio.play((success) => {
        if (!success) {
          console.log('playback failed due to audio decoding errors');
        }
      });
    }else {
      audio.pause((success) => {
        if (!success) {
          console.log('playback failed due to audio decoding errors');
        }
      });
    }
    
    count += 1;
  }
  
  render() {
    return (
      <View style={styles.conainer}>
        <View style={styles.top}>

          <TouchableOpacity style={styles.profileImage}
            onPress={() => this.props.navigation.goBack()}
          >
            <Icon name="arrow-left" size={40} color="#fabb00" />
          </TouchableOpacity>

        </View>

        <View style={styles.center}></View>

        <View style={styles.bottom}>

          <View style={{ height: '16%', }}>
            <Text style={styles.texto}>O botão abaixo explica a funcionalidade da opção CONTATOS DE EMERGENCIA</Text>
          </View>

          <View style={{ height: '16%', }}>
            <Text style={styles.texto}>Clique para ouvir!</Text>
          </View>

          <View style={{ padding: 10, }}>
            <TouchableOpacity style={styles.play} onPress={this.manageSound} >
              <Icon name="play" size={30} color="#fabb00" />
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}

