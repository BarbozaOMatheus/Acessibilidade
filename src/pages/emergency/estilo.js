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
    padding: 10,
  },
  texto: {
    fontSize: 25,
    fontFamily: 'bold',
    fontWeight: '800',
    color: 'white',
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: '#8e44ad',
    borderRadius: 25,
    width: 70,
    height: 70,
    elevation: 20,
  },
  viewContact: {
    height: '40%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#ecf0f1',
    elevation: 10,
  },
  textoViewContact: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default styles;
