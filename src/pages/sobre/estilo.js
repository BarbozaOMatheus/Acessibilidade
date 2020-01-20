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
  texto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  titulo: {
    fontSize: 20,
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
    flexDirection: 'column',
    flexWrap: 'wrap',
    padding: 5,
  },
});

export default styles;
