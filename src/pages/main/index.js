import React, {Component} from 'react';

import {Alert, View, TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {read} from '../../data';

import styles from './estilo';

export default class Main extends Component {
  state = {
    config: {
      time: 0,
      runAtStartup: false,
    },
    emergencyContact: {
      name: 'Police',
      phoneNumber: '190',
    },
  };

  constructor(props) {
    super(props);
    this.loadData();
  }

  onPressCall = url =>
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          Alert.alert('Erro!', 'Não foi possível abrir o app', [{text: 'OK'}], {
            cancelable: false,
          });
        } else {
          console.log(this.state.config.time);
          return Linking.openURL(url);
        }
      })
      .catch(err => console.error('Um erro ocorreu', err));

  async componentDidMount() {
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.loadData();
    });
  }

  loadData = async () => {
    const config = await read('config.txt');
    const emergencyContact = await read('emergencyContact.txt');

    if (config)
      this.setState({
        config: {
          time: parseInt(config[0]),
          runAtStartup: Boolean(config[1] === 'true'),
        },
      });

    if (emergencyContact)
      this.setState({
        emergencyContact: {
          name: emergencyContact[0],
          phoneNumber: emergencyContact[1],
        },
      });
  };

  render() {
    return (
      <View style={styles.conainer}>
        <View style={styles.top}>
          <TouchableOpacity
            style={styles.profileImage}
            delayLongPress={this.state.config.time}
            onLongPress={() => this.props.navigation.navigate('MainScreen')}>
            <Icon name="arrow-left" size={40} color="#fabb00" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.profileImage}
            delayLongPress={this.state.config.time}
            onLongPress={() => this.props.navigation.navigate('Config')}>
            <Icon name="cog" size={40} color="#0e6ee3" />
          </TouchableOpacity>
        </View>

        <View style={styles.bottom}>
          <View style={styles.bottomItem}>
            <TouchableOpacity
              style={styles.bottomItemInner}
              delayLongPress={this.state.config.time}
              onLongPress={() =>
                this.onPressCall(
                  `tel:${this.state.emergencyContact.phoneNumber}`,
                )
              }>
              <Icon name="phone" size={65} color="red" />
            </TouchableOpacity>
          </View>

          <View style={styles.bottomItem}>
            <TouchableOpacity
              style={styles.bottomItemInner}
              delayLongPress={this.state.config.time}
              onLongPress={() =>
                Linking.openURL('content://com.android.contacts/contacts')
              }>
              <Icon name="address-book" size={65} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.bottomItem}>
            <TouchableOpacity
              style={styles.bottomItemInner}
              delayLongPress={this.state.config.time}
              onLongPress={() => this.onPressCall('https://www.google.com')}>
              <Icon name="google" size={65} color="#0e6ee3" />
            </TouchableOpacity>
          </View>

          <View style={styles.bottomItem}>
            <TouchableOpacity
              style={styles.bottomItemInner}
              delayLongPress={this.state.config.time}
              onLongPress={() => Linking.openURL('whatsapp://send?text=Olá')}>
              <Icon name="whatsapp" size={65} color="#34af23" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
