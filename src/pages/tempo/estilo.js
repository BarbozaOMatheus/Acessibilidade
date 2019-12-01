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
    backgroundColor: '#1ec20a',
    padding: 10,
  },
  texto: {
    fontSize: 15,
    fontFamily: 'bold',
    fontWeight: '700',
    color: 'white',
  },
  profileImage: {
    width: 123,
    height: 123,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 70,
    borderWidth: 5,
    borderColor: '#787878',
    backgroundColor: '#eee',
    elevation: 24,
  },

  bottom: {
    backgroundColor: '#474444',
    flexDirection: 'column',
    padding: 5,
  },

  textTime: {
    fontSize: 25,
    fontFamily: 'bold',
    fontWeight: '700',
    //flex: 1,
    color: 'white',
    marginEnd: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  menu: {
    //margin: '1%',
    height: '14%',
    backgroundColor: '#474444',
    flexDirection: 'row',
    //padding: 0,
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  bottomItem: {
    width: '50%',
    height: '100%',

    padding: 4,
  },
  bottomItemInner: {
    flex: 1,
    backgroundColor: '#e8dcdc',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowRadius: 10,
    elevation: 10,
  },
});

export default styles;
