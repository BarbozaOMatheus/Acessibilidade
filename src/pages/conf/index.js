import React, { Component } from "react";

import { View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './estilo';

export default class Config extends Component {

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
          <View style={styles.bottomItem}>
            <TouchableOpacity style={styles.bottomItemInner}
              delayLongPress={1800}
              onLongPress={() => this.props.navigation.navigate('Sobre')}
            >
              <Text style={styles.texto}>SOBRE</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomItem}>
            <TouchableOpacity style={styles.bottomItemInner}
              delayLongPress={1800}
              onLongPress={() => this.props.navigation.navigate('Emergency')}
            >
              <Text style={styles.texto}>EMERGÊNCIA</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomItem}>
            <TouchableOpacity style={styles.bottomItemInner}
              delayLongPress={1800}
              onLongPress={() => this.props.navigation.navigate('Tempo')}
            >
              <Text style={styles.texto}>TEMPO</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomItem}>
            <TouchableOpacity style={styles.bottomItemInner}>
              <Text style={styles.texto}>DICAS</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}