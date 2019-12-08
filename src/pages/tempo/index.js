import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { save, read } from '../../data'
import styles from './estilo';

export default class Tempo extends Component {
  state = {
    time: 0,
    runAtStartup: false
  };

  maisTempo = () => {
    this.setState({
      time: this.state.time + 500
    });
  };
  menosTempo = () => {
    if (this.state.time > 0) {
      this.setState({
        time: this.state.time - 500
      });
    }
  };

  toggleSwitch = value => {
    this.setState({runAtStartup: value});
  };

  async componentDidMount() {
    const data = await read('config.txt')

    if (data)
      this.setState({
        time: parseInt(data[0]),
        runAtStartup: Boolean(data[1]==='true')
      }) 
  }

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
              value={this.state.runAtStartup}
            />
          </View>

          <View style={{height: '8%'}}>
            <Text style={styles.texto}>Tempo pressionando (milisegundos)</Text>
          </View>

          <Text style={styles.textTime}>{this.state.time}</Text>

          <View style={styles.menu}>
            <View style={styles.bottomItem}>
              <TouchableOpacity
                style={styles.bottomItemInner}
                id="menosTempo"
                onPress={() => this.menosTempo()}>
                <Text>-0.5ms</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomItem}>
              <TouchableOpacity
                style={styles.bottomItemInner}
                id="maisTempo"
                onPress={() => this.maisTempo()}>
                <Text>+0.5ms</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.menu}>
          <View style={styles.bottomItem}>
            <TouchableOpacity
              style={styles.bottomItemInner}
              onPress={() => save([this.state.time, this.state.runAtStartup], 'config.txt')}>
              <Text style={(styles.texto, {color: 'black'})}>GRAVAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
