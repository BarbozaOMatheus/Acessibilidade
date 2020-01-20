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
    padding: 5,
    alignItems: 'center',
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  textTime: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666',
    marginLeft: 20,
  },
  menu: {
    height: 60,
    flexDirection: 'row',
    marginTop: 20,
  },
  bottomItem: {
    width: '50%',
    height: 100,
    padding: 3,
  },
  bottomItemInner: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    borderRadius: 40,
  },
  botao: {
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    elevation: 20,
    marginTop: 100,
    width: 70,
    height: 70,
  },
});

export default styles;
