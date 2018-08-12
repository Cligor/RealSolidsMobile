import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, ImageBackground, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

import logo from '../images/logo/opacity-500x500.png';

export default class Inicio extends Component {
    render() {
        return (
            <View style={style.Container}>
                <StatusBar backgroundColor='#5cb85c' barStyle="light-content" />

                <ImageBackground source={logo} style={style.backgroundImage}>
                    <View style={style.Conteudo}>
                        <Text>Funfou</Text>
                        <Button 
                            title='Entrar' 
                            style={style.button} 
                            onPress={() => Actions.apresentacao()} 
                        />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    conteudo: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    
    button: {
        backgroundColor: '#5cb85c'
    },

    backgroundImage: {
        flex: 1,
    },
    
});
