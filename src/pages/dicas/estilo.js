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
    fontSize: 17,
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
  play: {
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#666',
    backgroundColor: '#eee',
    elevation: 24,
    marginTop: 10,
  },
  bottom: {
    height: '75%',
    flexDirection: 'column',
    padding: 5,
  },
  bottomItem: {
    width: '50%',
    height: '50%',
    padding: 5,
  },
  bottomItemInner: {
    flex: 1,
    backgroundColor: '#d1d1d1',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowRadius: 10,
    elevation: 10,
  },
});

export default styles;
