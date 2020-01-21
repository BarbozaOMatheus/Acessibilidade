import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {save, read} from '../../data';
import styles from './estilo';

export default class Tempo extends Component {
  state = {
    time: 0,
    runAtStartup: false,
  };

  maisTempo = () => {
    this.setState({
      time: this.state.time + 500,
    });
  };
  menosTempo = () => {
    if (this.state.time > 0) {
      this.setState({
        time: this.state.time - 500,
      });
    }
  };

  toggleSwitch = value => {
    this.setState({runAtStartup: value});
  };

  async componentDidMount() {
    const data = await read('config.txt');

    if (data)
      this.setState({
        time: parseInt(data[0]),
        runAtStartup: Boolean(data[1] === 'true'),
      });
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

        <View style={styles.bottom}>
          <View
            style={{
              marginTop: 30,
              flexDirection: 'row',
            }}>
            <Text style={styles.texto}>Tempo pressionando: </Text>
            <Text style={styles.textTime}>{this.state.time}</Text>
          </View>

          <View style={styles.menu}>
            <View style={styles.bottomItem}>
              <TouchableOpacity
                style={styles.bottomItemInner}
                id="menosTempo"
                onPress={() => this.menosTempo()}>
                <Text style={styles.texto}>-0.5ms</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomItem}>
              <TouchableOpacity
                style={styles.bottomItemInner}
                id="maisTempo"
                onPress={() => this.maisTempo()}>
                <Text style={styles.texto}>+0.5ms</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.botao}
            onPress={() =>
              save([this.state.time, this.state.runAtStartup], 'config.txt')
            }>
            <Icon name="check-circle" size={70} color="green" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
