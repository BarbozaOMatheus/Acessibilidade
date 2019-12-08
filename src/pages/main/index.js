import React, { Component } from "react";

import { Alert, View, BackHandler, TouchableOpacity, Linking, PermissionsAndroid } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import ContactsWrapper from 'react-native-contacts-wrapper';
import { read } from '../../data'

import styles from './estilo';

export default class Main extends Component {

  state = {
    time: 0,
    runAtStartup: false
  }

  constructor(props) {
    super(props)
    this.loadFile()
  }

  onPressCall = (url) => (
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          Alert.alert(
            'Erro!',
            'Não foi possível abrir o app',
            [
              { text: 'OK' }
            ],
            { cancelable: false },
          );
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error('Um erro ocorreu', err))
  );

  async componentDidMount() {
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.loadFile()
    });
  }

  loadFile = async () => {
    const data = await read('config.txt')

    if (data)
      this.setState({
        time: parseInt(data[0]),
        runAtStartup: Boolean(data[1]==='true')
      }) 
    console.log(this.state.time)  
  }

  render() {
    return (
      <View style={styles.conainer}>
        <View style={styles.top}>

          <TouchableOpacity style={styles.profileImage}
            delayLongPress={this.state.time}
            onLongPress={() => this.props.navigation.navigate('MainScreen')}
          >
            <Icon name="arrow-left" size={40} color="#fabb00" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileImageConfig}
            delayLongPress={this.state.time}
            onLongPress={() => this.props.navigation.navigate('Config')}
          >
            <Icon name="cog" size={40} color="#0e6ee3" />
          </TouchableOpacity>
        </View>

        <View style={styles.center}></View>

        <View style={styles.bottom}>
          <View style={styles.bottomItem}>
            <TouchableOpacity style={styles.bottomItemInner}
              delayLongPress={this.state.time}
              onLongPress={() => this.onPressCall('tel:190')}
            >
              <Icon name="phone" size={65} color="red" />
            </TouchableOpacity>
          </View>

          <View style={styles.bottomItem}>
            <TouchableOpacity style={styles.bottomItemInner}
              delayLongPress={this.state.time}
              onLongPress={() => this.props.navigation.navigate('Contatos')}
            >
              <Icon name="address-book" size={65} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.bottomItem}>
            <TouchableOpacity style={styles.bottomItemInner}
              delayLongPress={this.state.time}
              onLongPress={() => this.onPressCall('https://www.google.com')}
            >
              <Icon name="google" size={65} color="#0e6ee3" />
            </TouchableOpacity>
          </View>

          <View style={styles.bottomItem}>
            <TouchableOpacity style={styles.bottomItemInner}
              delayLongPress={this.state.time}
              onLongPress={() => this.onPressCall('whatsapp://send?phone=99')}
            >
              <Icon name="whatsapp" size={65} color="#34af23" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}