import React, {Component} from 'react';
import * as RNFS from 'react-native-fs';
import {View, Text, TouchableOpacity, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './estilo';

export default class Tempo extends Component {
  state = {
    count: 0,
    time: '',
    runAtStartup: false,
    switchValue: false,
  };

  maisTempo = () => {
    this.setState({
      count: this.state.count + 500,
      time: toString(this.state.count + 500),
    });
  };
  menosTempo = () => {
    this.setState({
      count: this.state.count - 500,
    });
  };

  toggleSwitch = value => {
    this.setState({switchValue: value});
    console.log('Switch 1 is: ' + value);
  };

  save = () => {
    if (this.state.time === '') {
      return;
    }

    let content = `${this.state.time}\n${this.state.runAtStartup}`;
    let filePath = `${RNFS.DocumentDirectoryPath}/config.txt`;

    RNFS.writeFile(filePath, content, 'utf8')
      .then(success => {
        console.log('Configurações salvas com sucesso!');
      })
      .catch(error => {
        console.error(error);
      });
  };

  read = () => {
    let filePath = `${RNFS.DocumentDirectoryPath}/config.txt`;

    let content = RNFS.readFile(filePath, 'utf8');

    let aux = content.toString().split('\n');

    this.setState({time: aux[1]});
    this.setState({runAtStartup: aux[2]});
  };

  render() {
    return (
      <View style={styles.conainer}>
        <View style={styles.top}>
          <TouchableOpacity
            style={styles.profileImage}
            onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-left" size={40} color="#fabb00" />
          </TouchableOpacity>
        </View>

        <View style={styles.center} />

        <View style={styles.bottom}>
          <View style={{height: '30%'}}>
            <Text style={styles.texto}>Início Automático</Text>
            <Switch
              style={{size: '50'}}
              onValueChange={this.toggleSwitch}
              value={this.state.switchValue}
            />
          </View>

          <View style={{height: '8%'}}>
            <Text style={styles.texto}>Tempo pressionando (segundos)</Text>
          </View>

          <Text style={styles.textTime}>{this.state.count}</Text>

          <View style={styles.menu}>
            <View style={styles.bottomItem}>
              <TouchableOpacity
                style={styles.bottomItemInner}
                id="butao1"
                onPress={this.menosTempo}>
                <Text>-0.5s</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomItem}>
              <TouchableOpacity
                style={styles.bottomItemInner}
                id="butao2"
                onPress={this.maisTempo}>
                <Text>+0.5s</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.menu}>
          <View style={styles.bottomItem}>
            <TouchableOpacity
              style={styles.bottomItemInner}
              delayLongPress={
                // eslint-disable-next-line radix
                parseInt(this.read)}
              onLongPress={() => this.onPressButton}>
              <Text style={(styles.texto, {color: 'black'})}>EDITAR</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomItem}>
            <TouchableOpacity
              style={styles.bottomItemInner}
              onPress={this.save}>
              <Text style={(styles.texto, {color: 'black'})}>GRAVAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
