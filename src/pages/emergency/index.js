import React, {Component} from 'react';

import {
  View,
  Text,
  PermissionsAndroid,
  Alert,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import ContactsWrapper from 'react-native-contacts-wrapper';
import {save, read} from '../../data';
import styles from './estilo';

export default class Sobre extends Component {
  state = {
    name: 'Police',
    phoneNumber: '190',
  };

  getContact = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contatos',
      message: 'Este aplicativo gostaria de ver seus contatos.',
    }).then(() => {
      ContactsWrapper.getContact()
        .then(contact => {
          this.setState({
            name: contact.name,
            phoneNumber: contact.phone,
          });
          save(
            [this.state.name, this.state.phoneNumber],
            'emergencyContact.txt',
          );
          Alert.alert('Salvo com sucesso', '', [{text: 'Ok'}], {
            cancelable: true,
          });
        })
        .catch(error => {
          console.log('ERROR CODE: ', error.code);
          console.log('ERROR MESSAGE: ', error.message);
        });
    });
  };

  async componentDidMount() {
    const data = await read('emergencyContact.txt');

    if (data)
      this.setState({
        name: data[0],
        phoneNumber: data[1],
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
          <View style={styles.viewContact}>
            <Text style={styles.textoViewContact}>{this.state.name}</Text>
            <Text style={styles.textoViewContact}>
              {this.state.phoneNumber}{' '}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.botao}
            onPress={
              () =>
                this.getContact() /*Linking.openURL('content://com.android.contacts/contacts')*/
            }>
            <Icon name="search" size={40} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
