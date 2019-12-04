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
  icone: {
    //justifyContent: 'flex-end',
    //alignItems: 'flex-end',
    padding: 20
  },
  textoTitulo: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'bold',
    fontWeight: '700',
  },
  titulo: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 15
  },
  texto: {
    fontSize: 15,
    fontFamily: 'bold',
    fontWeight: '700',
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
    height: '72%',
    backgroundColor: '#474444',
    flexDirection: 'column',
    padding: 5,
  },
});

export default styles;