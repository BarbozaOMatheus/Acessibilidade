import React, {Component} from 'react';
import { read, save } from '../../data'
import {View, Text, TouchableOpacity, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './estilo';

export default class Tempo extends Component {
  state = {
    count: 0,
    time: 0.0,
    runAtStartup: false,
    switchValue: false
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
              delayLongPress={() => this.read}
              onLongPress={() => this.onPressButton}>
              <Text style={(styles.texto, {color: 'black'})}>EDITAR</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomItem}>
            <TouchableOpacity
              style={styles.bottomItemInner}
              onPress={save([this.state.time, this.state.runAtStartup], 'config.txt')}>
              <Text style={(styles.texto, {color: 'black'})}>GRAVAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
