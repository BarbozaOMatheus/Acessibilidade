import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    height: '25%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#8e44ad',
  },
  bloco: {
    width: 330,
    flexDirection: 'column',
    paddingBottom: 40,
    borderRadius: 50,
    backgroundColor: '#ecf0f1',
    elevation: 10,
  },
  equipe: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  integrantes: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666',
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  profileImage: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#666',
    backgroundColor: '#eee',
  },
  bottom: {
    height: '75%',
    padding: 5,
    alignItems: 'center',
  },
});

export default styles;
