import React, { Component } from "react";

import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './estilo';

var Sound = require('react-native-sound');
var audio = null;
Sound.setCategory('Playback'); // true = mixWithOthers

var count = 0;

export default class Sobre extends Component {
  constructor(props) {
    super(props);  
    
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
            <Text style={styles.texto}>Os botões abaixo são áudios de dicas sobre as funcionalidades do app. </Text>
          </View>

          <View style={{ height: '16%', }}>
            <Text style={styles.texto}>Obs: Para ouvir basta clicar!</Text>
          </View>
  
        <ScrollView>
          <View style={{ padding: 10, }}>
            <TouchableOpacity style={styles.play} onPress={this.manageSound} >
              <Icon name="play" size={50} color="#fabb00" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.play} onPress={this.manageSound}>
              <Icon name="play" size={50} color="#fabb00" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.play} onPress={this.manageSound}>
              <Icon name="play" size={50} color="#fabb00" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.play} onPress={this.manageSound}>
              <Icon name="play" size={50} color="#fabb00" />
            </TouchableOpacity>
            
          </View>
        </ScrollView>
        </View>

      </View>
    );
  }
}

