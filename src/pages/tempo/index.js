import React, { Component } from "react";

import { View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './estilo';

export default class Tempo extends Component {

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
          <View style={{ height: '30%', }}>
            <Text style={styles.texto}>Início Automático</Text>
          </View>
          <View style={{ height: '70%', }}>
            <Text style={styles.texto}>Tempo pressionando (segundos)</Text>
          </View>
        </View>

        <View style={styles.menu}>
          <View style={styles.bottomItem}>
            <TouchableOpacity style={styles.bottomItemInner}
              delayLongPress={1800}
              onLongPress={() => this.props.navigation.navigate('Tempo')}
            >
              <Text style={styles.texto, { color: 'black' }}>EDITAR</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomItem}>
            <TouchableOpacity style={styles.bottomItemInner}>
              <Text style={styles.texto, { color: 'black' }}>GRAVAR</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}

