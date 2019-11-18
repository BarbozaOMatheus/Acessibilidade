import { StyleSheet } from "react-native";

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
    padding: 10
  },
  texto: {
    fontSize: 15,
    fontFamily: 'bold',
    fontWeight:'700',
    color: 'white'
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
  center: {
    height: '3%',
    backgroundColor: '#384736'
  },
  bottom: {
    height: '43%',
    backgroundColor: '#474444',
    flexDirection: 'column',
    padding: 5,
  },
  menu: {
    height: '29%',
    backgroundColor: '#474444',
    flexDirection: 'row',
    padding: 5,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  bottomItem: {
    width: '50%',
    height: '50%',
    padding: 4,
  },
  bottomItemInner: {
    flex: 1,
    backgroundColor: '#e8dcdc',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "black",
    shadowRadius: 10,
    elevation: 10,
  }
});

export default styles;