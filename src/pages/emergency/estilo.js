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
texto2: {
fontSize: 15,
fontFamily: 'bold',
fontWeight:'700',
color: 'black'
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
height: '80%',
backgroundColor: '#474444',
flexDirection: 'column',
padding: 5,
},
menu: {
height: '10%',
backgroundColor: 'white',
flexDirection: 'row',
padding: 15,
alignItems: 'flex-end',
justifyContent: 'center',
},
bottomItem: {
width: '50%',
height: '70%',
padding: 20,
},
itemContainer: {
margin: 10,
paddingBottom: 12,
flexDirection: 'row',
justifyContent: 'space-around',
flexWrap: 'wrap',
borderColor: 'white',
borderWidth: 5,
borderRadius: 70,
padding: 10,

},
contactName: {
fontSize: 20,
color: '#fabb00',
fontFamily: 'bold',
fontWeight: '700',
},
phones: {
fontSize: 18,
color: 'white',
fontFamily: 'bold',
fontWeight: '700',
},
center: {
height: '2%',
backgroundColor: 'white'
},
});

export default styles;
