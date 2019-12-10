import React, { Component } from "react";

import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './estilo';
import DicaItem from "./DicaItem";



export default class Sobre extends Component {
  constructor(props) {
    super(props); 
  }
  render() {
    return (
      <View style={styles.container}>
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
          <View>
            <DicaItem icone="cog" audio="" cor="#0e6ee3"></DicaItem>
            <DicaItem icone="phone" audio="ligacaodeemergencia.mpeg" cor="red"></DicaItem>
            <DicaItem icone="address-book" audio="rock.mp3" cor="black"></DicaItem>
            <DicaItem icone="google" audio="audio.mp3" cor="#0e6ee3"></DicaItem>
            <DicaItem icone="whatsapp" audio="audio.mp3" cor="#34af23"></DicaItem>

          </View>
        </ScrollView>
        </View>

      </View>
    );
  }
}

