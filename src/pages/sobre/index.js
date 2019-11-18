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
            delayLongPress={1800}
            onLongPress={() => this.props.navigation.goBack()}
          >
            <Icon name="arrow-left" size={40} color="#fabb00" />
          </TouchableOpacity>

        </View>

        <View style={styles.center}></View>

        <View style={styles.bottom}>
          <View style={{ height: '18%', }}>
            <Text style={styles.texto}>IF MAC</Text>
          </View>
          <View style={{ height: '62%', }}>
            <Text style={styles.texto}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </Text>
          </View>
          <View style={{ height: '20%', }}>
            <Text style={styles.texto}>Colaboradores: Matheus Barboza, Jerry Santos, Felipe Paiva,
            Iago Barbosa
            </Text>
          </View>
        </View>

      </View>
    );
  }
}

