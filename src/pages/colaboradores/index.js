import React, {Component} from 'react';

import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './estilo';

export default class Sobre extends Component {
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
          <ScrollView>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}>
              <View style={styles.bloco}>
                <View style={styles.equipe}>
                  <Text style={styles.titulo}>Idealizador</Text>
                </View>
                <View style={styles.integrantes}>
                  <Text style={styles.texto}>Paulo Perris</Text>
                </View>
              </View>
              <View style={styles.bloco}>
                <View style={styles.equipe}>
                  <Text style={styles.titulo}>Mentora</Text>
                </View>
                <View style={styles.integrantes}>
                  <Text style={styles.texto}>Jéssica França</Text>
                </View>
              </View>
              <View style={styles.bloco}>
                <View style={styles.equipe}>
                  <Text style={styles.titulo}>Gerente</Text>
                </View>
                <View style={styles.integrantes}>
                  <Text style={styles.texto}>Iago Barbosa</Text>
                </View>
              </View>
              <View style={styles.bloco}>
                <View style={styles.equipe}>
                  <Text style={styles.titulo}>Desenvolvedores</Text>
                </View>
                <View style={styles.integrantes}>
                  <Text style={styles.texto}>Matheus de Oliveira Barboza</Text>
                  <Text style={styles.texto}>Jerry Santos Silva</Text>
                  <Text style={styles.texto}>
                    Iam Lucas de Andrade Medeiros
                  </Text>
                  <Text style={styles.texto}>Ayrton Sena</Text>
                  <Text style={styles.texto}>Wild</Text>
                  <Text style={styles.texto}>Hugo Souza</Text>
                  <Text style={styles.texto}>Felipe Paiva</Text>
                </View>
              </View>
              <View style={styles.bloco}>
                <View style={styles.equipe}>
                  <Text style={styles.titulo}>Analistas</Text>
                </View>
                <View style={styles.integrantes}>
                  <Text style={styles.texto}>Edson Isaac da Costa Lima</Text>
                  <Text style={styles.texto}>Adelia Pires Lima Neta</Text>
                  <Text style={styles.texto}>Amanda Juchem</Text>
                  <Text style={styles.texto}>Ruan Moreira de Oliveira</Text>
                </View>
              </View>
              <View style={styles.bloco}>
                <View style={styles.equipe}>
                  <Text style={styles.titulo}>Testadores</Text>
                </View>
                <View style={styles.integrantes}>
                  <Text style={styles.texto}>Brendda Marques Barreto</Text>
                  <Text style={styles.texto}>Alexandre Santos Carvalho</Text>
                  <Text style={styles.texto}>Maiara Durães Lima</Text>
                  <Text style={styles.texto}>Shirleine Souza Campos</Text>
                  <Text style={styles.texto}>Alan Pinheiro Reis de Souza</Text>
                  <Text style={styles.texto}>Vanessa Santos Barbosa</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
