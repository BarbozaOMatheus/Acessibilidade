import React, { Component } from "react";

import { View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './estilo';

export default class Sobre extends Component {

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

          <View style={{ height: '18%', }}>
            <Text style={styles.texto}>Obs: Para ouvir basta clicar!</Text>
          </View>

          <View style={{ padding: 10, }}>
            <TouchableOpacity style={styles.play}>
              <Icon name="play" size={30} color="#fabb00" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.play}>
              <Icon name="play" size={30} color="#fabb00" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.play}>
              <Icon name="play" size={30} color="#fabb00" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.play}>
              <Icon name="play" size={30} color="#fabb00" />
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}

