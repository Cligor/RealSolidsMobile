import React, { Component } from 'react';
import { 
    View, 
    StyleSheet, 
    TouchableOpacity,
    Text
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Menu extends Component {
    render() {
        return (
            <View style={style.container}>

                { /*Separando os botões em duas colunas (se precisar fazer uma terceira */}

                { /* Coluna 1 */ }
                <View style={style.containerButtons} >
                    <TouchableOpacity style={ style.buttons } onPress={() => Actions.masp()}>
                        <Text style={style.textButton}>MASP</Text> 
                         
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={ style.buttons } onPress={() => Actions.masp()}>
                        <Text>CATEDRAL</Text> 
                         
                    </TouchableOpacity>
                    { /* adicionar outros botões mais botões */}
                </View>

                { /* Coluna 2 */ }
                <View style={style.containerButtons}>
                <TouchableOpacity style={ style.buttons } onPress={() => Actions.masp()}>
                        <Text>MASP</Text> 
                         
                    </TouchableOpacity>

                     <TouchableOpacity style={ style.buttons } onPress={() => Actions.masp()}>
                        <Text>MASP</Text> 
                         
                    </TouchableOpacity>
                </View>

            </View>        
        );
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between', 
        flexDirection: 'row',
    },

    containerButtons: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '50%',
    },

    buttons: {
        width: 150,
        backgroundColor: 'red',
        alignItems: 'center'
    },

    textButton: {
        color: 'white',
    },

    viewButtons: {
        //styles
    },
});
