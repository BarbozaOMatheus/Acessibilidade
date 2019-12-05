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

const styles = StyleSheet.create({
  itemContainer: {
    margin: 10,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    borderColor: 'white',
    borderWidth: 5,
    borderRadius: 70,
    padding: 10,

  },
  contactName: {
    fontSize: 20,
    color: '#fabb00',
    fontFamily: 'bold',
    fontWeight: '700',
  },
  phones: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'bold',
    fontWeight: '700',
  },
  center: {
    height: '2%',
    backgroundColor: 'white'
  }
})

class ContactList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      contacts: null
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
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts',
          message: ' This app would like to see your contacts'
        }
      ).then(() => {
        this.getList();
      })
    } else if (Platform.OS === 'ios') {
      this.getList();
    }
  }

  getList = () => {
    Contacts.getAll((err, contacts) => {
      if (err === 'denied') {
        console.log("cannot access");
      } else {
        this.setState({ contacts });
        console.log(contacts);
      }
    })
  }
//this.onPressCall('whatsapp://send?phone={`${phone.number}`}'
  renderItem = ({ item }) => (
    <View style={styles.itemContainer}>

      <TouchableOpacity
        onPress={() => Linking.openURL('tel:{phone.number}')}
      >
        <Text style={styles.contactName}>
          Nome: {`${item.givenName} `} {item.familyName}
        </Text>
        {item.phoneNumbers.map(phone => (
          <Text style={styles.phones}>Número:  {phone.number}</Text>
        ))}
      </TouchableOpacity>

      <TouchableOpacity style={estilo.icone}
        onPress={() => Linking.openURL('whatsapp://send?phone={`${phone.number}`')}
      >

        <Icon name="whatsapp" size={40} color="#34af23" />
      </TouchableOpacity>

    </View>

  )
  render() {
    return (
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

          <View style={styles.container}>
            <FlatList
              data={this.state.contacts}
              renderItem={this.renderItem}
              //Setting the number of column
              numColumns={1}
              keyExtractor={(item, index) => item.key}
            />
          </View>
        </View>

      </View>

    )
  }
}

export default ContactList;