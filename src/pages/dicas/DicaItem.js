import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './estilo';
import { setState } from "expect/build/jestMatchersObject";
import Slider from '@react-native-community/slider';

var Sound = require('react-native-sound');
Sound.setCategory('Playback'); // true = mixWithOthers


export default class DicaItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            status: 'play',
            sliderValue: 0,
            currentTime:0
        };
        
        this.audio = null;
        this.audio = new Sound(this.props.audio, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log('Erro ao carregar o audio', error);
              return;
            }
          }); 
    }

    mudarBotao(){
        if(this.state.status == 'play'){
            this.setState({status: 'pause'});
        }else{
            this.setState({status: 'play'});
        }
    }
    
    mudarCurrentTime(){
        var intervalo = setInterval(() =>{
            if(this.state.status == 'play'){
                clearInterval(intervalo)
                
            }else{
                if(this.state.currentTime <=this.audio.getDuration()){
                    this.setState({currentTime: this.state.currentTime + 1});
                }else{
                    this.setState({status: 'play',currentTime: 0});
                }
                
            }
        },1000);
    }
        

    manageSound(){ 
        console.log('duration in seconds: ' + this.audio.getDuration() + 'number of channels: ' + this.audio.getNumberOfChannels());
        // Play the sound with an onEnd callback
        this.mudarCurrentTime();
        if(this.state.status == 'play'){
            this.audio.play((success) => {
                if (!success) {
                    console.log('playback failed due to audio decoding errors');
                }else{

                }
            });
        }else{
            this.audio.pause((success) => {
                if (!success) {
                    console.log('playback failed due to audio decoding errors');
                }else{
                    this.clearInterval(intervalo)
                }
            });
        }
        this.mudarBotao();
      }

    render(){
        return(
            <View style={{flex:1, flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity style={styles.play} onPress={() => this.manageSound()}>
                    <Icon name={this.state.status} size={50} color="#fabb00" />
                </TouchableOpacity>
                
                <Slider value={this.state.currentTime} maximumValue={this.audio.getDuration()} minimumValue={0}style={{ width: 200, height: 40 }}/>
                <View>
                    <Icon name={this.props.icone} size={50} color={this.props.cor}/>
                </View>
            </View>
        );
    }
}