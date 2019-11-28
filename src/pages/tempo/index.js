import React, { Component } from "react";

import * as RNFS from 'react-native-fs'
import { View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './estilo';

export default class Tempo extends Component {

  state = {
    time: '',
    runAtStartup: false
  }

  save = () => {
    if (this.state.time === '')
      return

    let content = `${this.state.time}\n${this.state.runAtStartup}`
    let filePath = `${RNFS.DocumentDirectoryPath}/config.txt`

    RNFS.writeFile(filePath, content, 'utf8').then(success => {
      console.log('Configurações salvas com sucesso!')
    }).catch(error => {
      console.error(error)
    })
  }

  read = () => {
    let filePath = `${RNFS.DocumentDirectoryPath}/config.txt`

    let content = RNFS.readFile(filePath, 'utf8')

    let aux = content.toString().split('\n')

    this.setState({ time: aux[1] })
    this.setState({ runAtStartup: aux[2] })
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

            <TouchableOpacity style={styles.bottomItemInner}
              onPress={() => this.read()}
            >
              <Text style={styles.texto, { color: 'black' }}>GRAVAR</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}

