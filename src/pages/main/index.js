import React, { Component } from "react";

import { Alert, View, TouchableOpacity, Linking, PermissionsAndroid } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import ContactsWrapper from 'react-native-contacts-wrapper';


import styles from './estilo';

export default class Main extends Component {

  onPressCall = (url) => (
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url)
            .catch(() => null);
        }
      })
  );

  onButtonPressed = () => (
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        'title': 'Contacts',
        'message': 'This app would like to view your contacts.'
      },
      ContactsWrapper.getContact()
    ).then((contact) => {
      console.log(contact)
    })
      .catch((error) => {
        console.log("ERROR CODE: ", error.code);
        console.log("ERROR MESSAGE: ", error.message);
      })
  );


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

          <TouchableOpacity style={styles.profileImageConfig}
            delayLongPress={1800}
            onLongPress={() => this.props.navigation.navigate('Config')}
          >
            <Icon name="cog" size={40} color="#0e6ee3" />
          </TouchableOpacity>
        </View>

        <View style={styles.center}></View>

        <View style={styles.bottom}>
          <View style={styles.bottomItem}>
            <TouchableOpacity style={styles.bottomItemInner}
              onPress={() => this.onPressCall('tel:190')}
            >
              <Icon name="phone" size={65} color="red" />
            </TouchableOpacity>
          </View>

          <View style={styles.bottomItem}>
            <TouchableOpacity style={styles.bottomItemInner}
              onPress={() => this.onButtonPressed()}
            >
              <Icon name="address-book" size={65} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.bottomItem}>
            <TouchableOpacity style={styles.bottomItemInner}
              onPress={() => this.onPressCall('https://www.google.com')}
            >
              <Icon name="google" size={65} color="#0e6ee3" />
            </TouchableOpacity>
          </View>

          <View style={styles.bottomItem}>
            <TouchableOpacity style={styles.bottomItemInner}
              onPress={() => this.onPressCall(' https://wa.me/99')}
            >
              <Icon name="whatsapp" size={65} color="#34af23" />
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}