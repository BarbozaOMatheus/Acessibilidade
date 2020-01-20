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
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'bold',
    fontWeight: '700',
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
  },
  bottomItem: {
    width: '50%',
    height: '50%',
    padding: 4,
  },
  bottomItemInner: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowRadius: 10,
    elevation: 10,
    borderRadius: 30,
  },
});

export default styles;
