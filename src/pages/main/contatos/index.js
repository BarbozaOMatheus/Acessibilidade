import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Platform,
  PermissionsAndroid,
  TouchableOpacity,
  Linking,
  Alert
} from 'react-native';

import estilo from './estilo';
import Icon from 'react-native-vector-icons/FontAwesome';

import Contacts from 'react-native-contacts';
import { ScrollView } from 'react-native-gesture-handler';

import ListItem from "./Components/ListItem/";
//import Avatar from "./components/Avatar";




class ContactList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      contacts: []
    }
  }

  onPressCall = (url) => (
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          Alert.alert(
            'Erro!',
            'Este contato não tem Whatsapp',
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


  componentDidMount() {
 
  PermissionsAndroid.request(
  PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
  {
    'title': 'Contacts',
    'message': 'This app would like to view your contacts.'
  }
).then(() => {
  Contacts.getAll((err, contacts) => {
    if (err === 'denied'){
      // error
      console.log("cannot access");
    } else {
      // contacts returned in Array
      this.setState({ contacts });
      console.log(contacts);
    }
  })
})
  }

  render() {
    return(
    <View style={estilo.container}>
      <View style={estilo.top}>

          <TouchableOpacity style={estilo.profileImage}
            onPress={() => this.props.navigation.goBack()}
          >
            <Icon name="arrow-left" size={40} color="#fabb00" />
          </TouchableOpacity>

      </View>

        <View style={estilo.center}></View>
        
        <View style={estilo.bottom}>

          <View style={estilo.titulo}>
            <Text style={estilo.textoTitulo}>Contatos</Text>
          </View>

          <View>
            <ScrollView >
          {this.state.contacts.map(contact => {
            return (
              <ListItem
                
                key={contact.recordID}
                title={`${contact.givenName}`}
                numero={`${contact.phoneNumbers.label}`}
                onPress={() => Contacts.openExistingContact(contact, () => {})}
                onDelete={() =>
                  Contacts.deleteContact(contact, () => {
                    this.loadContacts();
                  })
                }
              />
            );
          })}
        </ScrollView>
          </View>

        </View>

    </View>
    );
  }
  
}

export default ContactList;