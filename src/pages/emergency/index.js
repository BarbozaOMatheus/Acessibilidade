import React, { Component } from "react";

import * as RNFS from 'react-native-fs'
import { View, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './estilo';

export default class Sobre extends Component {

  state = {
    name: '',
    phoneNumber: ''
  }

  save = () => {
    if (this.state.name === '')
      return

    else if (this.state.phoneNumber === '')
      return

    let content = `${this.state.name}\n${this.state.phoneNumber}`
    let filePath = `${RNFS.DocumentDirectoryPath}/emergencyContact.txt`

    RNFS.writeFile(filePath, content, 'utf8').then(success => {
      console.log('Contato salvo com sucesso!')
    }).catch(error => {
      console.error(error)
    })
  }

  read = () => {
    let filePath = `${RNFS.DocumentDirectoryPath}/emergencyContact.txt`

    let content = RNFS.readFile(filePath, 'utf8')

    let aux = content.toString().split('\n')

    this.setState({ name: aux[1] })
    this.setState({ phoneNumber: aux[2] })
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

        </View>

      </View>
    );
  }
}

